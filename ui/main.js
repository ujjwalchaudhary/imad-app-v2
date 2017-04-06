//Counter code

var button = document.getElementById("counter");
var count = 0;
button.onclick = function() {
    
    //Make a request to the counter Endpoint
    
    //Capture the response and store it in variable
    
    //Render the variable in orrect span
    counter = counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};
