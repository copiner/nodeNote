var http = require('http'),
    url = require("url"),
    fs = require('fs');


function handle_incoming_request(req, res) {

	console.log("Incoming request: (" + req.method + ") " +req.url);

	req.parsed_url = url.parse(req.url, true);
	console.log(req.parsed_url);

	var core_url = req.parsed_url.pathname;
	if(core_url == "/albums.json"){
		handle_load_albums(req, res);
	} else if(core_url.substr(0, 7) == "/albums"
		 && core_url.substr(core_url.lenght - 5)== ".json"){
		handle_get_albums(req, res);
	} else {
		res.writeHead(404, {"Content-Type": "application/json"});
		res.end(JSON.stringify({error: "unknown_resource"}));
	}

}
function handle_load_albums(req, res){

	var album_name = req.url.substr(7, req.url.length - 12);
	load_album_list(function (err, albums) {
		if(err != null){
		res.writeHead(503, { "Content-Type" : "application/json" });
		res.end(JSON.stringify({ error: "file_error", message: err.message }) + "\n");
		return;
		}
		res.writeHead(200, {"Content-Type": "application/json"});
		res.end(JSON.stringify({ error: null, data: { albums: albums}}) + "\n");
	});


}


function handle_get_albums(req, res){

	var core_url = req.parsed_url.pathname;
	var album_name = core_url.substr(7, core_url.length - 12);

	var page = parseInt(req.parsed_url.query.page);
	var page_size = parseInt(req.parsed_url.query.page_size);

	if(isNaN(page)||page<=0) page = 0;
	if(isNaN(page_size)||page_size<=0) page = 250;
	load_album(album_name,  function (err, photos) {
		if(err != null){
		res.writeHead(503, { "Content-Type" : "application/json" });
		res.end(JSON.stringify({ error: "file_error", message: err.message }) + "\n");
		return;
		}
		res.writeHead(200, {"Content-Type": "application/json"});
		res.end(JSON.stringify({ error: null,
      data: {album: {album_name: album_name, photos: photos}}}) + "\n");
	});

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
	});
}

function load_album(album_name, page, page_size,  callback){
	fs.readdir("albums/"+album_name,  function(err, file_list){
	  if(err){
	        callback(err);
		return;
	    }
	    var files_only = [];
	   (function iterator(i){
		if(i >= file_list.length){
			var photos = file_only.splice(page*page_size, page_size);
			callback(null, photos);
			return;
		}

		fs.stat("albums/"+ album_name+ "/"+ file_list[i], function (err, stats){
			if(err){
				callback(err);
				return;
			}

			if(stats.isFile())
				files_only.push(file_list[i]);
			iterator(i+1);
		});
	 })(0);
	});
}

var s = http.createServer(handle_incoming_request);
s.listen(3000);
