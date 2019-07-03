const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const userTask = new Schema({
	taskTitle: String,
	taskDiscription: String,
	taskMilestone:[
			{milestoneDiscription: String, 
			milestoneEvalue: Boolean}]
	
});

module.exports = {
	getUserTaskSchema: (connection) => {
		
		return connection.model("TaskModel",
								userTask);
	}
}