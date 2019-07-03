const DB = require("./connect.js");
const Task = DB.getUserTaskModel();
const xml2js = require('xml2js');


var q =[{"data": "array",
		"golumn":[{"elves":"monster","elves":"dickbutt"}]}]


module.exports.displayTasks =
	(req,res,next)=>{
		Task.find({},(err,tasks)=>{
			if(err)
				console.log("error : %s", error);

			let results = tasks.map( (task) => {
				return{
					id: task._id,
					taskTitle: task.taskTitle,
					taskDiscription: task.taskDiscription,
					//taskPrecentage: some mathy-maths

				}
			});
			res.render('displayTasksView',
				{title:"Project Phase : List of Task", data:results});
		});
	};

module.exports.JSONapiDisplayTasks = 
	(req,res,next) => {
	console.log('get Tasks');
	Task.find({}).then(eachOne =>{
		res.json(eachOne);
		

		});
};

module.exports.XMLapiDisplayTasks = 
	(req,res,next) => {
	console.log('get Tasks');
	Task.find({}).then(eachOne =>{
		
		let resu = eachOne.map( (lut)=>{
			return{
				id: lut.id,
				taskTitle: lut.taskTitle,
				taskDiscription: lut.taskDiscription,

			}
		});

		var builder = new xml2js.Builder();
		var xml = builder.buildObject(resu);
		//nsole.log(xml);
		//res.type('applicaiton/xml');
		res.send(xml);
		});
		
};


module.exports.displayMilestones =
	(req,res,next) =>{
	let id = req.params.id;

	Task.findById(id,(err,task)=>{
		if(err)
			console.log('error selecting: %s', err);
		if(!task)
			return res.render('404');
		


		
		res.render('displayMilestoneView',
			{title: 'Phase Task',
		//	data : task,

		data : {
				data: task,
				id: task._id,
				taskTitle: task.taskTitle,
				taskDiscription: task.taskDiscription,
				taskMilestoneDes: task.taskMilestone
				//taskMilestoneDes: task.taskMilestone.milestoneDiscription
				
			}
		});

	});

	
	//let miles = req.params.taskMilestone.id;
	//console.log(miles);

}




module.exports.JSONapiDisplayMilestones = 
	(req,res,next)=>{
		Task.findById(req.params.id).then(function(err, task){
			if(err){
				res.send(err)
			}
			res.json(task)
		})
	};

module.exports.XMLapiDisplayMilestones = 
		(req,res,next) => {
	console.log('get Tasks');
	Task.find({}).then(eachOne =>{
		
		let resu = eachOne.map( (lut)=>{
			return{
				id: lut.id,
				taskTitle: lut.taskTitle,
				taskDiscription: lut.taskDiscription,
			}
		});

		console.log(JSON.stringify(eachOne.taskMilestone));

		var builder = new xml2js.Builder();
		var xml = builder.buildObject(resu);
		//console.log(xml);
		res.type('applicaiton/xml');
		res.send(xml);
		});
		
};


module.exports.deleteTask = 
	(req,res,next)=>{

		let id=req.params.id;

		Task.findById(id, (err,task)=>{
			if(err)
				console.log("error selecting : %s", err);
			if(!task)
				return res.render('404');

			task.remove((err)=>{
				if(err)
					console.log("error deleted : %s", err);
				res.redirect('/tasks');
			});
		});
	};

module.exports.JSONapiDelete = 
	(req,res,next) => {
		Task.fineOneAndRemove({
			taskName: req.body.taskName,
			taskDiscription: req.body.taskDiscription,
		}).then(task =>{
			res.json(task)
		});
	};



module.exports.addTask = 
	(req,res,next)=>{
		res.render('addTaskView',
			{title:"Add A Task"});
	};

module.exports.JSONapiAddTask = 
	(req,res,next)=>{
		Task.create({
			taskTitle: req.body.taskTitle,
			taskDiscription: req.body.taskDiscription,
			taskMilestone:[
					{milestoneDiscription: req.body.milestoneDiscription, 
					milestoneEvalue: false}]
		});
	};

module.exports.saveTask =
	(req,res,next)=>{
		
		
		let shan = req.body.taskMilestone;
		var i=0;
		console.log(shan);
		console.log(shan.length);
	

		let arr = req.body.taskMilestone;

	function tommyknockers(){ 
		if(i < shan.length){
			console.log("echo Bravo");
			var taskMilestone = [];
			for(i=0; i<shan.length; i++){
				console.log("echo "+i+" "+shan[i]);
				
				taskMilestone.push({"milestoneDiscription": shan[i], "milestoneEvalue" : false});
			}
			return taskMilestone
		}
		}

		console.log(req.body);

		let task = new Task({
			taskTitle: req.body.taskTitle,
			taskDiscription: req.body.taskDiscription,
			taskMilestone: tommyknockers(),			

						

		});
		task.save((err)=>{
			if(err)
				console.log("error : %s ",err);
			res.redirect('/tasks');
		});
	};

module.exports.editTask = 
	(req,res,next) =>{
	let id = req.params.id;

	Task.findById(id,(err,task)=>{
		if(err)
			console.log('error selecting: %s', err);
		if(!task)
			return res.render('404');

		res.render('editTaskView',
			{title: 'Edit Task',
			data : {
				id: task._id,
				taskTitle: task.taskTitle,
				taskDiscription: task.taskDiscription,
				taskMilestone: task.taskMilestone
			}
		});
	});
}
module.exports.saveAfterEdit = 
	(req, res, next) => {
		let id = req.params.id;

		let shan = req.body.taskMilestone;
		var i=0;
		console.log(shan);
		console.log(shan.length);
	

		let arr = req.body.taskMilestone;

		function tommyknockers(){ 
			if(i < shan.length){
				console.log("echo Bravo");
				var taskMilestone = [];
				for(i=0; i<shan.length; i++){
					console.log("echo "+i+" "+shan[i]);
					
					taskMilestone.push({"milestoneDiscription": shan[i], "milestoneEvalue" : false});
				}
				return taskMilestone
			}
			}

		Task.findById(id, (err, task) =>{
			if(err)
				console.log("Error Selecting : %s ", err);
			if(!task)
				return res.render('404');

				task.taskTitle = req.body.taskTitle,
			task.taskDiscription = req.body.taskDiscription,

			task.taskMilestone = tommyknockers(), // req.body.taskMilestone,


/*
				task.task = req.body.enumber;
				task.task = req.body.fname;*/
				
		
		task.save((err) => {
		if (err)
			console.log("Error updated : %s ",err);
		res.redirect('/tasks');
		});
	});
};  

module.exports.JSONapiUpdate = 
	(req,res,next) => {
		Task.fineOneAndUpdate({
			taskName: req.body.taskName,
			taskDiscription: req.body.taskDiscription,
		}).then(task =>{
			res.json(task)
		});
	};
	