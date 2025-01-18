//cursor
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



//horizontal lines
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const offset = 100; 

    function setActiveLink() {
        let currentSection = ''; 
        const scrollPos = window.scrollY + offset; 

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight; 
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id'); 
            }
        });

        navLinks.forEach(link => {
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active'); 
            } else {
                link.classList.remove('active'); 
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);

    setActiveLink();
});
