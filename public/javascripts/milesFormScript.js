var stone = 1;

function addMilestone(){
	var mile = document.createElement("INPUT");
	var br = document.createElement("br");
	mile.setAttribute("type","text");
	mile.setAttribute("Placeholder", "Milestone_"+stone);
	mile.setAttribute("name", "taskMilestone");
	//mile.setAttribute("name", "Milestone_"+stone);
	document.getElementById("milestone-form").appendChild(mile);
	document.getElementById("milestone-form").appendChild(br);
	stone++;
}

function completed(milestone_id){
	var id = 
	document.getElementById()
	console.log("complete");

}


function DisplayMilestones(arr){
var displayDes = document.getElementById('milestone-display');
var br = document.createElement("br");
var td = document.createElement("td");
	
	for (var i = 0; i < arr.length; i++) {
			var desc = document.createTextNode(arr);
			td.appendChild(desc);
			displayDes.appendChild(td);
			displayDes.appendChild(br);		
			console.log(arr[i].milestoneDiscription);
			
		}
	}


//button press to add to switch status checked unchecked

var cbox=function(){
	var checkbox=document.createElement("input");
	var listItem=document.createElement("li");
//checkboxes

var br=document.createElement("br");
checkbox.type="checkbox";
checkbox.name="stone";
checkbox.value="true";

listItem.appendChild(checkbox);
	console.log("task completed");
	var listItem=this.parentNode;

let id = req.params.id;

checkbox.setAttribute("type","checkbox");
checkbox.setAttribute("name","checkbox_"+id)

document.getElementById("boxcheck").appendChild(checkbox);	

}