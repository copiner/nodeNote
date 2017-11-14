var fs = require('fs');

function readBigFileEntry(filename, response){
  path.exists(filename, function(exists) {
  	if (!filename || !exists) {
  		response.writeHead(404);
  		response.end();
  		return;
  	}

  	var readStream = fs.ReadStream(filename);

  	var contentType = 'none';
  	var ext = path.extname(filename);
  	switch (ext) {
  		case ".flv":
  			contentType = "video/wmv";
  			break;
  	}

  	response.writeHead(200, {
  		'Content-Type' : contentType,
  		'Accept-Ranges' : 'bytes'
  	});

  	readStream.on('close', function() {
  		response.end();
  		console.log("Stream finished.");
  	});
  	readStream.pipe(response);
  });
}
readBigFileEntry("vedio.wmv", response)
