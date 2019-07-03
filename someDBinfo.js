const mongoose = require('mongoose');
const credentials = require("./credentials.js");

const dbUrl = 'mongodb://127.0.0.1:27017/cs602db_TP_One';//+credentials.database;

const connection = mongoose.createConnection(dbUrl);

const TaskSchema = require("./schema.js");
const Task = TaskSchema.getUserTaskSchema(connection);

connection.on("open", () => {
	let task;

	task = new Task({
	taskTitle: 'PhaseOne',
	taskDiscription: 'set up the TaskTracker',
	//taskDue: new Date('March 7, 2019 23:59:00');
	taskMilestone: /*['JS Module for creating tasks',
					'RESTful API created',
					'All visual elements created',
					'Precent complete display module',
				]*/


	[
		{milestoneDiscription: 'JS Module for creating tasks', 
		milestoneEvalue: false},
		{milestoneDiscription: 'RESTful API created', 
		milestoneEvalue: false},
		{milestoneDiscription: 'All visual elements created', 
		milestoneEvalue: false},
		{milestoneDiscription: 'Precent complete display module', 
		milestoneEvalue: false},

	]
	});

	task.save();
	/*	task = new Task({
	taskTitle: 'PhaseTwo',
	taskDiscription: 'set up the boothre',
	//taskDue: new Date('March 7, 2019 23:59:00');
	taskMilestone: 'JS Module for creating tasks',
	taskMilestone: 'RESTful API created',
	taskMilestone: 'All visual elements created',
	taskMilestone: 'Precent complete display module',
				

	});*/

//	task.save();

	task = new Task({
	taskTitle: 'PhaseTwo',
	taskDiscription: 'Upgrades for Project Phase',
	taskMilestone:[
		{milestoneDiscription: 'Adding in user workspaces', 
		milestoneEvalue: false},
		{milestoneDiscription: 'Adding athentication', 
		milestoneEvalue: false},
		{milestoneDiscription: 'Add task assigner or managment modules', 
		milestoneEvalue: false},
	]
	});

	task.save((err)=>{
		connection.close();
		if(err) throw err;
		console.log("success");
	});
})