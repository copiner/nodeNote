var http = require('http'),
    fs = require('fs');

function handle_incoming_request(req, res) {

	console.log("Incoming request: (" + req.method + ") " +req.url);

	if(req.url.substr(0, 7) == "/albums"){
		handle_load_albums(req, res);
	} else {
		res.writeHead(404, {"Content-Type": "application/json"});
		res.end(JSON.stringify({error: "unknown_resource"}));
	}

}
function handle_load_albums(req, res){
	var album_name = req.url.substr(8, req.url.length - 7);
	load_album(album_name,  function (err, album, albums) {
		if(err != null){
  		res.writeHead(503, { "Content-Type" : "application/json" });
  		res.end(JSON.stringify({ error: "file_error", message: err.message }) + "\n");
  		return;
		}
		res.writeHead(200, {"Content-Type": "application/json"});
		res.end(JSON.stringify({ error: null, data: { file: album, dict: albums}}) + "\n");
	});
}


function load_album(album_name, callback){
	fs.readdir("albums/" + album_name+"/", function(err, file_list){
	  if(err){
      callback(err);
      return;
	    }

	    var files_only = [];
      var dirs_only = [];
	   (function iterator(i){
  		if(i >= file_list.length){
  			callback(null, files_only, dirs_only);
  			return;
  		}

  		fs.stat("albums/"+ album_name + "/" + file_list[i], function (err, stats){
  			if(err){
  				callback(err);
  				return;
  			}

  			if(stats.isFile()){
          files_only.push(file_list[i]);
          iterator(i+1);
        } else if(stats.isDirectory()){
          dirs_only.push(file_list[i]);
          iterator(i+1);
        }

  		});
  	 })(0);
	});
}

var s = http.createServer(handle_incoming_request);
s.listen(3000);
