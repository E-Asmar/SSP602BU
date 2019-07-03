const express = require('express');
const router = express.Router();

//modules
const taskModules = require("./spTaskRunnerModules.js");

const displayTasks = taskModules.displayTasks;
const displayMilestone = taskModules.displayMilestones;
const deleteTask = taskModules.deleteTask;
const addTask = taskModules.addTask;
const saveTask = taskModules.saveTask;
const editTask = taskModules.editTask;
const saveAfterEdit = taskModules.saveAfterEdit;


const JSONapiDisplayTasks = taskModules.JSONapiDisplayTasks;
const XMLapiDisplayTasks = taskModules.XMLapiDisplayTasks;
const JSONapiAddTask = taskModules.JSONapiAddTask;
const JSONapiDisplayMilestones = taskModules.JSONapiDisplayMilestones;
const XMLapiDisplayMilestones = taskModules.XMLapiDisplayMilestones;
const JSONapiUpdate = taskModules.JSONapiUpdate;
const JSONapiDelete = taskModules.JSONapiDelete;


//routes
/*router.get('/',(req,res) => {
	res.render('index');
});*/
router.get('/',(req,res,next)=>{
	res.redirect('/tasks');
});

router.get('/tasks',displayTasks);
router.get('/tasks/mdisplay/:id',displayMilestone);

router.get('/tasks/add',addTask);
router.post('/tasks/add',saveTask);

router.get('/tasks/edit/:id', editTask);
router.post('/tasks/edit:id', saveAfterEdit);

router.get('/tasks/delete/:id',deleteTask);

//api calls 
router.get('/api/json/tasks', JSONapiDisplayTasks);
router.get('/api/xml/tasks', XMLapiDisplayTasks);

router.post('/api/json/addTask',JSONapiAddTask);

router.get('/api/json/tasks/:id', JSONapiDisplayMilestones);
router.get('/api/xml/tasks/:id', XMLapiDisplayMilestones);

router.put('api/json/tasksupdate/:id', JSONapiUpdate);

router.delete('api/json/tasksdelete/:id', JSONapiDelete);





module.exports = router;