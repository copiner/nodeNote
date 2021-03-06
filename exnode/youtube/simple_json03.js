var http = require('http'),
    fs = require('fs');

function handle_incoming_request(req, res) {

	console.log("Incoming request: (" + req.method + ") " +req.url);

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

function load_album_list(callback){
	fs.readdir("albums/", function(err, file_list){
		if(err) {
			callback(err);
			return;
		}

		var dirs_only = [];
		for(var i = 0; i < file_list.length; i++){
  			fs.stat("albums/" + file_list[i], function(err, stats){
  				if(err){
  					callback(err);
  					return;
  				}
          console.log(i);//i==4 always
          //console.log(file_list[i]);//undefined
  				if(stats.isDirectory())
  					dirs_only.push(file_list[i]);
  		});
		}

		callback(null, dirs_only);

	});
}

var s = http.createServer(handle_incoming_request);
s.listen(3000);
