const Hapi = require('hapi');
const Path = require('path');
const Vision = require('vision');
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
			path: Path.join(__dirname, 'templates'),
			helpersPath: Path.join(__dirname, 'helpers')
		});

		server.route({
			path: '/',
			method: 'GET',
			handler: {
				view: 'template.html'
			}
		});

		await server.start();
		console.log(`Server started at ${server.info.url}`);
	} catch (error){
		console.log(error);
	}
})();