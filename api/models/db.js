const mongoose = require( 'mongoose' );
const {DATABASE_NAME,DATABASE_PASSWORD,DATABASE_USER,DATABASE_PORT} = require('env');
let shutdown;

// const dbURI = 'mongodb://localhost/Movektm';


const dbURI= `mongodb://${DATABASE_USER}:${DATABASE_PASSWORD}@ds155747.mlab.com:${DATABASE_PORT}/${DATABASE_NAME}`;

mongoose.connect(dbURI);

// monitoring mongoose connection events 
mongoose.connection.on('connected', function(){
	console.log('mongoose connected to' +dbURI);
});

mongoose.connection.on('error', function(err){
	console.log('mongoose connection error' +err);
});

mongoose.connection.on('disconnected', function(){
	console.log('mongoose disconnected');
});

// close mongoose connection 
shutdown = function(msg, callback){
	mongoose.connection.close(function(){
		console.log('Mongoose disconnected through' + msg);
		callback();
	});	
};

//for nodemon restarts
process.once('SIGUSR2', function(){
	shutdown('nodemon restart' , function(){
		process.kill(process.pid, 'SIGUSR2');
	});
});

//listen for SIGINT on application termination 
process.on('SIGINT', function(){
	shutdown('app termination' , function(){
		process.exit(0);
	});
});

// listen for SIGTERM for heroku app termination 
process.on('SIGTERM', function(){
	shutdown('heroku app shutdown', function(){
		process.exit(0);
	});
});
