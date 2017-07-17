require('dotenv').config();

var ngrok = require('ngrok');
var PushBullet = require('pushbullet');
var pusher = new PushBullet(process.env.PUSHBULLET_TOKEN);

ngrok.connect({
	proto: 'tcp',
	addr: 22
}, function (err, url) {
	if (err) {
		console.error(err);
		process.exit(1);
	}

	console.log("Server started on " + url);
	pusher.note({
		"source_device_iden": process.env.PUSHBULLET_DEVICE
	}, "Server Started", "Listening on " + url, function(error, response) {
		if (error) {
			console.error(error);
		}

		// console.log(response);
	});
}); // tcp://0.tcp.ngrok.io:48590 
