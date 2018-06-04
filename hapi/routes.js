const Hapi = require('hapi');
(async () => {
	try{
		server = new Hapi.Server({
			host: 'localhost',
			port: Number(process.argv[2] || 8080)
		});

		server.route({
			path: `/{name}`,
			method: 'GET',
			handler: (request, h) => {
				return `Hello ${request.params.name}`
			}
		});

		await server.start();
		console.log(`Server started at ${server.info.url}`);
	} catch(error){
		console.log(error);
	}
})();