var ngrok = require('ngrok');

ngrok.connect({
	proto: 'tcp',
	addr: 22
}, function (err, url) {
	if (err) {
		console.error(err);
		process.exit(1);
	}

	console.log("Server started on " + url);
}); // tcp://0.tcp.ngrok.io:48590 
