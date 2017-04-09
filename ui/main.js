//Counter code

var button = document.getElementById("counter");

button.onclick = function() {
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200) {
                var counter = request.ResponseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
            
        }
        //Not done yet
        
    };
    //Make the request
    request.open('GET','http://ujjwalchaudhary.imad.hasura-app.io/counter',true);
    request.send(null);
};

//Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    
     //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200) {
                //Capture a list of a name and render it as a list
    var names = request.ResponseText;
    names = JSON.parse(names);
    var list = '';
    for (var i=0; i< name.lenght; i++) {
        list += '<li>' + name[i]+ '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
            }
        }
        //Not done yet
        
    };
    
    //Make the request
    request.open('GET','http://ujjwalchaudhary.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
    
};