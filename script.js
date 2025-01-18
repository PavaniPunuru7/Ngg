 // Active link switching logic
 const navLinks = document.querySelectorAll('.nav_section a');

 navLinks.forEach(link => {
     link.addEventListener('click', function () {
         navLinks.forEach(nav => nav.classList.remove('active'));
         this.classList.add('active');
     });
 });
 // Prevent carousel slide when clicking on .line
document.querySelectorAll('.line').forEach(line => {
    line.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});





var cursor = $(".cursor"),
follower = $(".cursor-follower");

var posX = 0,
posY = 0;

var mouseX = 0,
mouseY = 0;

TweenMax.to({}, 0.016, {
repeat:-1,
onRepeat:function(){
posX += (mouseX - posX) / 9;
posY += (mouseY - posY) / 9;

TweenMax.set(follower, {
  css: {
    left: posX - 12,
    top: posY - 12
  }
});
TweenMax.set(cursor, {
  css: {
    left: mouseX,
    top: mouseY
  }
});
}	
});

$(document).on("mousemove",function(e){
mouseX = e.pageX;
mouseY = e.pageY;
});