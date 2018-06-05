const Hapi = require('hapi');
const H2o2 = require('h2o2');
(async () =>{
	try{
		const server = new Hapi.Server({
			host: 'localhost',
			port: Number(process.argv[2] || 8080)
		});
		await server.register(H2o2);

		server.route({
			path: '/proxy',
			method: 'GET',
			handler: {
				proxy: {
					host: '127.0.0.1',
					port: 65535
				}
			}
		});
		await server.start();
		console.log(`Server started at ${server.info.url}`);
	}catch (error){
		console.log(error);
	}
})();