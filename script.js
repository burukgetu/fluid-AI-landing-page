// Function to calculate scroll percentage
function getScrollPercentage() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    return (scrollTop / scrollHeight) * 100; // Calculate percentage of scroll
}

const logo = document.getElementById('logo');
const text_overlay = document.querySelector('.text-overlay');
const join_button = document.getElementById('join-button');

// Cards Intialize
const card_1 = document.getElementById('card_1');

let autoScrollTriggered = false;

window.addEventListener('scroll', function () {
    const scrollPercentage = getScrollPercentage();
    const windowWidth = window.innerWidth

    if(!autoScrollTriggered) {
      if(windowWidth > 400) {
         if (scrollPercentage > 2) {
             logo.classList.add('after');
             autoScrollTo(6, 2000);
             autoScrollTriggered = true;
         }
        } else {
          if (scrollPercentage > 1 && scrollPercentage < 3) {
            logo.classList.add('after');
            autoScrollTo(4, 2000);
            autoScrollTriggered = true
        }
    }
  }

    if (scrollPercentage > 2) {
        text_overlay.classList.add('after');
        join_button.classList.add('after');
    }


    // CARDS ANIMATION

    function addAnimationClasses() {
        card_1.classList.add('anim');
        card_2.classList.add('anim');
        card_3.classList.add('anim');
        card_4.classList.add('anim');
        card_5.classList.add('anim');
        card_6.classList.add('anim');
        card_7.classList.add('anim');
        card_8.classList.add('anim');
        card_9.classList.add('anim');
        card_10.classList.add('anim');
      }
      
    if(scrollPercentage >= 2) {
        // Set a 2-second delay (2000 milliseconds) before executing the function
        setTimeout(addAnimationClasses, 2500);
    }
})


// AUTO SCROLL
function autoScrollTo(targetPercent, duration) {
    const startScroll = window.scrollY || document.documentElement.scrollTop;
    const targetScroll = (targetPercent / 100) * (document.documentElement.scrollHeight - window.innerHeight);
    const startTime = performance.now();
  
    function scrollAnimation(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Ease in-out effect
  
      window.scrollTo(0, startScroll + (targetScroll - startScroll) * easeInOutQuad(progress));
  
      if (progress < 1) {
        requestAnimationFrame(scrollAnimation); // Continue the animation until duration completes
      }
    }
  
    requestAnimationFrame(scrollAnimation);
  }

  // image SLIDER

// Array of background images
const images = [
  'images/slider-img-1.png',
  'images/slider-img-2.png', 
  'images/slider-img-3.png', 
];

// Array of descriptions corresponding to the images
const descriptions = [
  {
      main: 'Fluid has Internet access, so you can get up-to-date information from it.',
      sub: 'Time to work',
  },
  {
      main: 'You can use Fluid as an assistant to save time - and save your sanity.',
      sub: 'Time for family',
  },
  {
      main: "Fluid easily integrates with your friends' calendars",
      sub: 'Time for friends',
  },
  // Add more descriptions as needed
];

let currentIndex = 0; // Track the current image index

function updateBackground() {
  const slider = document.querySelector('.slider-1');
  const description = descriptions[currentIndex];
  // Apply the new background image
  slider.style.backgroundImage = `url('${images[currentIndex]}')`;

   // Update the text descriptions
   document.getElementById('slider-description').textContent = description.main;
   document.getElementById('slider-sub-description').textContent = description.sub;

  // Trigger animation
  slider.classList.remove('slide-in'); // Remove class to reset animation
  void slider.offsetWidth; // Trigger reflow
  slider.classList.add('slide-in'); // Add class to start animation
}

document.getElementById('slide-button').addEventListener('click', () => {
  // Update the background image
  currentIndex = (currentIndex + 1) % images.length; // Loop through images
  updateBackground();
});

document.getElementById('back-button').addEventListener('click', () => {
  // Update the background image for the back button
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back
  updateBackground();
});

// Add CSS class for animation
const style = document.createElement('style');
style.innerHTML = `
  .slider-1.slide-in {
      animation: slideIn 1s forwards; /* Apply sliding animation */
  }
`;
document.head.appendChild(style);