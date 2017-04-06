console.log('Loaded!');

//Move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft+1;
    img.style.marginLeft = marginLeft+ 'px';
}
img.onclick = function() {
  var Interval = setinterval(moveRight,'50px');  
};
