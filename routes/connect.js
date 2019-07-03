const mongoose = require('mongoose');
const credential = require("../credentials.js");

const dbUrl = 'mongodb://127.0.0.1/'+credential.database;

let connection = null;
let model = null;

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const userTaskSchema = new Schema({
	taskTitle: String,
	taskDiscription: String,
	taskMilestone:[
			{milestoneDiscription: String, 
			milestoneEvalue: Boolean}]
	
});


module.exports.getUserTaskModel = () =>{
	if(connection == null){
		console.log('Creating connection and model...');
		connection = mongoose.createConnection(dbUrl);
		model = connection.model("TaskModel",userTaskSchema);
	};
	return model;
};