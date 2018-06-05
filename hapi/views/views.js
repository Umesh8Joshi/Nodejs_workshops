const Hapi = require('hapi');
const Vision = require('vision');
const Path = require('path');
const Handlebars = require('handlebars');
(async () => {
	try{
		const server = new Hapi.Server({
			host: 'localhost',
			port: Number(process.argv[2] || 8080)
		});

		await server.register(Vision);

		server.views({
			engines: {
				html: Handlebars
			},
			path: Path.join(__dirname, 'templates')
		});

		server.route({
			path: '/',
			method: 'GET',
			handler: {
				view: 'index.html'
			}
		});
		await server.start();
		console.log(`Server started at ${server.info.url}`);
	}catch (error){
		console.log(error);
	}
})();