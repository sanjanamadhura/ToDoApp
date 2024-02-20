const taskinput = document.getElementById('taskinput');
const listcontainer = document.getElementById('listcontainer');  //listcontainer for ul (unordered list)

function addtasks(){
    if(taskinput.value ===''){
        alert("The task cannot be Empty")
    }else{
        let task = document.createElement('li'); // creating a variable for the list element
        task.textContent = taskinput.value;         //assining the inserted value as the content of list element
        listcontainer.appendChild(task);            //append the list item to the unorderd list
        let i = document.createElement("i");        // creating the delete icon , since this icon got from the font awesome icons the "i" element was made
        i.classList.add("fa-solid","fa-trash-can")  // <i class="fa-solid fa-trash-can" id="deletebtn" style="color: #000000;"></i>  <==this was the code   from the front awesome , the calsses had to add using classlit.add()function 
        i.setAttribute("id","deletebtn")            // set the id
        task.appendChild(i)
        
    }
    taskinput.value='';
    saveTasks();
}

taskinput.addEventListener("keyup",function(e){
    if(e.key==="Enter"){
        addtasks();
    }
})

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveTasks();
    }else if(e.target.tagName ==="I"){
        e.target.parentElement.remove();
        saveTasks();
    }

},false)

function saveTasks(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showTasks(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTasks();