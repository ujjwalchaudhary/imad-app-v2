console.log('Loaded!');

//Move the image
var img = document.getElementById('madi');
var marginLeft = 1;
function moveRight(){
    marginLeft = marginLeft+1;
    img.style.marginLeft = marginLeft+ 'px';
}
img.onclick = function() {
  var interval = setInterval(moveRight,'5px');  
};
