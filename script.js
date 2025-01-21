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

const slider = document.querySelector(".slider");
    const cards = Array.from(document.querySelectorAll(".card"));
    const cardWidth = cards[0].offsetWidth + 16; // Card width + gap
    let currentIndex = 0;
    let slideInterval;

    // Function to start the sliding
    function startSliding() {
        slideInterval = setInterval(slideCards, 3000);
    }

    // Function to stop the sliding
    function stopSliding() {
        clearInterval(slideInterval);
    }

    // Duplicate cards to make the slider seamless
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        slider.appendChild(clone);
    });

    function slideCards() {
        currentIndex++;

        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

        // Reset to the start when the last card slides
        if (currentIndex === cards.length) {
            setTimeout(() => {
                slider.style.transition = "none";
                slider.style.transform = "translateX(0)";
                currentIndex = 0;
            }, 500); // Wait for the sliding transition to complete
        }
    }
    // Event listeners to pause and resume sliding on hover
    cards.forEach(card => {
        card.addEventListener('mouseover', stopSliding);
        card.addEventListener('mouseout', startSliding);
    });

    // Start the sliding when the page loads
    startSliding();

    const detailElements = document.querySelectorAll('.details');
const overlays = document.querySelectorAll('.overlay');
const verticalNav = document.querySelector('#cd-vertical-nav'); // Select the vertical navigation element

// Show overlay on click
detailElements.forEach(detail => {
  detail.addEventListener('click', () => {
    const index = detail.getAttribute('data-index');
    const overlay = document.getElementById(`overlay-${index}`);
    overlay.style.display = 'flex'; // Display the overlay
    if (verticalNav) {
      verticalNav.style.display = 'none'; // Hide the vertical navigation
    }
  });
});

// Close overlay on click
overlays.forEach(overlay => {
  const closeBtn = overlay.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none'; // Hide the overlay
    if (verticalNav) {
      verticalNav.style.display = ''; // Show the vertical navigation (default display)
    }
  });
});
