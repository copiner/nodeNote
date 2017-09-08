var  http = require('http');
var  url = require("url");
var  path = require("path");
var  fs = require('fs');

function handle_incoming_request(req, res) {

	console.log("Incoming request: (" + req.method + ") " +req.url);

	req.parsed_url = url.parse(req.url, true);
	//console.log(req.parsed_url);

	var core_url = req.parsed_url.pathname;
  //console.log(core_url);


	if(core_url.substr(0, 7) == '/pages/'){
		serve_page(req, res);
  } else if(core_url.substr(0, 9) == '/content/'){
		server_static_content('content/', core_url.substr(9), req, res);
	} else if(core_url == "/albums"){
		handle_load_albums(req, res);
	} else if(core_url.substr(0, 8) == "/records"){
		handle_get_records(req, res);
	} else {
		res.writeHead(404, {"Content-Type": "application/json"});
		res.end(JSON.stringify({error: "unknown_resource"}));
	}
}

function serve_page(req, res){
	var page_name = req.parsed_url.pathname.substr(0, 7);
  //console.log(page_name);
	fs.readFile('app.html', 'utf8', function(err, data){
		if(err){
			res.writeHead(503, { "Content-Type": "text/html"} );
			res.end("nope serve is lost");
		}
		res.writeHead(200, { "Content-Type": "text/html"} );
    //console.log(data);
		res.end(data.replace("{{PAGE_NAME}}", page_name)); //!!!
    });
}

function server_static_content(folder, filename, req, res){
	var fname = folder + filename;
  console.log(fname);
	var rs = fs.createReadStream(fname);
  rs.on(
     "readable",
     function(){
       var d = rs.read();
        console.log(d);//null
     if(typeof d == "string"){
        res.write(d);
     } else if(typeof d == 'object' && d instanceof Buffer) {
         if(get_content_type(filename).substr(0, 6) == "image/"){
           res.write(d);
         }else{
           res.write(d.toString('utf8'));
         }
    }
  }
  );

  rs.on(
     "end",
     function(){
       res.end();
     }
  );

	rs.on(
	   "error",
	   function(err){
  		res.writeHead(404, { 'Content-Type': "application/json"});
  		res.end(JSON.stringify({ error: "resource_not_found"}));
	   }
	);

  var ct = get_content_type(filename);

	res.writeHead(200, {"content-Type": ct});
	rs.pipe(res);  //!!!
}

function get_content_type(filename){
	var ext = path.extname(filename).toLowerCase();  //path.extname: 返回path路径文件扩展名

	switch(ext){
	case '.jpg': case '.jpeg':
		return 'image/jpeg';
	case '.gif':
		return 'image/gif';
	case '.png':
		return 'image/png';
	case '.js':
		return 'text/javascript';
	case '.css':
		return 'text/css';
	case '.html':
		return 'text/html';
	default:
		return 'text/plain';
	}

}


function handle_load_albums(req, res){

	//var core_url = req.parsed_url.pathname;
	//var album_name = core_url.substr(7, core_url.length - 12);
	var callback = function(err, albums){
				if(err != null){
						res.writeHead(503, { "Content-Type" : "application/json" });
						res.end(JSON.stringify({ error: "file_error", message: err.message }) + "\n");
						return;
				}
						res.writeHead(200, {"Content-Type": "application/json"});
						res.end(JSON.stringify({data: {albums: albums}}) + "\n");
			};
	load_album_list(callback);
}

function load_album_list(callback){
	fs.readdir("albums/", function(err, file_list){
	  if(err){
        callback(err);
				return;
	    }
	  var dirs_only = [];
		(function iterator(i){
			if(i >= file_list.length){
				callback(null, dirs_only);
				return;
			}

			fs.stat("albums/"+ file_list[i], function (err, stats){
				if(err){
					callback(err);
					return;
				}
				if(stats.isFile())
					dirs_only.push(file_list[i]);
				iterator(i+1);
			});
		})(0);

		console.log(dirs_only); //[]
	});
}


function handle_get_records(req, res){

	//console.log(req.parsed_url);
	var core_url = req.parsed_url.pathname;
	var records_name = core_url.substr(8);
	//console.log(records_name);

	load_records(records_name,  function (err, records) {
		if(err != null){
			res.writeHead(503, { "Content-Type" : "application/json" });
			res.end(JSON.stringify({ error: "file_error", message: err.message }) + "\n");
			return;
		}
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(JSON.stringify({data: records}) + "\n");
	});
}

function load_records(records_name, callback){
	fs.readdir("records/"+records_name,  function(err, file_list){
		  if(err){
		        callback(err);
						return;
		    }

		callback(null, file_list);
	});
}

// file_list.map((val)=>{
// 			fs.stat(`records/records_name/${val}`, (err, stats)=>{
// 				var el = `${val}`;
// 				console.log(el);
// 			});
// 	})

// (function iterator(i){
// 	fs.stat("records/"+ records_name + "/"+ file_list[i], function (err, stats){
// 			if(err){
// 				callback(err);
// 				return;
// 			}
// 			var records = file_list[i] +': '+ stats.size+"-"+stats.birthtime
// 			callback(null, records);
// 		});
// 		iterator(i+1);
// })(0);

var s = http.createServer(handle_incoming_request);
s.listen(3000);
