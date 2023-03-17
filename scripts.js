
// responsiveness section
// check if we're on mobile (aka if we're on a vertical screen)
var verticalScreen = window.innerWidth < window.innerHeight; // check if mobile screen by checking if the screen is vertical. vertical screen is a bool that stores true or false

// grab a bunch of stuff to modify

var headerH1 = document.querySelector(".headerH1"); // get the header h1

// about page
var aboutPgMain = document.querySelector(".aboutPgMain"); // get the main content section
var aboutMe = document.querySelector(".aboutMe"); // get the paragraph
var portraitContainer = document.querySelector(".portraitContainer"); // get the portrait

// portfolio page
const projectGrid = document.querySelector('.projectGrid');
const images = document.querySelectorAll('.projectTile'); // get the project tiles
const imagesLeftCol = document.querySelectorAll('.projectTile:nth-of-type(2n - 1)'); // get the left column of project tiles
const projectDescriptions = document.querySelectorAll('.projectDescription'); // get the project descriptions
const projectTitles = document.querySelectorAll('.projectTitle'); // get the project titles

const imagesCol1 = document.querySelectorAll('.projectTile:nth-of-type(3n - 2)');
const imagesCol2 = document.querySelectorAll('.projectTile:nth-of-type(3n - 1)');

// performs the necessary layout changes for a vertical screen
function switchToVerticalScreen() {
    // make the header span the page so it's not tiny
    headerH1.style.fontSize = '5vw';
    
    // about page
    // make the portrait and about paragraph fit the page better
    portraitContainer.style.width = '115px';
    portraitContainer.style.height = '115px';
    portraitContainer.style.marginTop = '-25px';
    aboutMe.style.marginTop = '10px';
    aboutMe.style.width = '95%';
    aboutMe.style.fontSize = '0.7em';
    aboutPgMain.style.marginBottom = '8rem';

    // portfolio page
    // rearrange the portfolio grid to have 2 columns instead of 3, and increase the font size
    images.forEach((image) => {
        image.style.width = '45%';
        image.style.marginRight = '0';
    });
    imagesLeftCol.forEach((image) => {
        image.style.marginRight = '1.3%';
    });
    projectDescriptions.forEach((description) => {
        description.style.fontSize = '2em';
    });
    projectTitles.forEach((title) => {
        title.style.fontSize = '2.3em';
    });

    // add some margin at the bottom of the portfolio page to cut out weird scroll glitch with sticky nav
    projectGrid.style.marginBottom = '10em';
}

// performs the necessary layout changes to revert back to a horizontal screen
function switchToHorizontalScreen() {
    headerH1.style.fontSize = '2.1vw';

    // about page
        portraitContainer.style.width = '170px';
        portraitContainer.style.height = '170px';
        portraitContainer.style.marginTop = '-15px';
        aboutMe.style.marginTop = '20px';
        aboutMe.style.width = '60%';
        aboutMe.style.fontSize = '1em';
        aboutPgMain.style.marginBottom = '15rem';

    // portfolio page
        images.forEach((image) => {
            image.style.width = '28%';
            image.style.marginRight = '0';
        });
        imagesCol1.forEach((image) => {
            image.style.marginRight = '1.3%';
        });
        imagesCol2.forEach((image) => {
            image.style.marginRight = '1.3%';
        });
        projectDescriptions.forEach((description) => {
            description.style.fontSize = '1.25em';
        });
        projectTitles.forEach((title) => {
            title.style.fontSize = '1em';
        });

        projectGrid.style.marginBottom = '6%';
}

// check vertical screen on initial page load / refresh
if (verticalScreen) {
    switchToVerticalScreen();
}

// continuously check for vertical screen whenever window size is changed
window.addEventListener('resize', function(event) {
    verticalScreen = window.innerWidth < window.innerHeight;

    // if we're on vertical screen.
    if (verticalScreen) {
        switchToVerticalScreen();
    }

    // if we're no longer on a vertical screen
    else {
        switchToHorizontalScreen();
    }
});



// this is for the navigation top bar
var headerHeight = document.querySelector(".header").offsetHeight; // header height = 81px

var navHeight = document.querySelector(".navbar").offsetHeight; // navbar height = 39px

var navbar = document.querySelector(".navbar");
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    if (currentScrollPos <= headerHeight) {
        navbar.style.position = "relative";
      }
  } 
  else {
    if (currentScrollPos >= headerHeight) {
      navbar.style.position = "fixed";
      navbar.style.top = "0";
    }
  }
  prevScrollpos = currentScrollPos;
}

// make the button scroll the user down the page
document.getElementById("aboutButton").addEventListener("click", function() {
    window.scrollTo({
        top: document.getElementById("pageTop").offsetTop/*  - document.getElementById("portfolioTop").offsetHeight * 3 */,
        behavior: "smooth"
    });
});

document.getElementById("portfolioButton").addEventListener("click", function() {
    window.scrollTo({
        top: document.getElementById("portfolioTop").offsetTop - document.getElementById("portfolioTop").offsetHeight * 3,
        behavior: "smooth"
    });
});



// this makes the pictures in the portfolio page get bigger when hovered over
// Get all the image elements
/* const images = document.querySelectorAll('.projectTile'); */
const descriptions = document.querySelectorAll('.projectDescription');
const projTitles = document.querySelectorAll('.projectTitle');
let i = 0;

// Add event listener to each image element
images.forEach((image, i) => {
  image.addEventListener('mouseover', () => {
    // Increase the size of the image when hovered over
    image.style.transform = 'scale(1.06)';
    image.style.transition = 'transform 0.25s ease-in-out'; // Add a smooth transition effect

    // Display the description with an animation
      descriptions[i].style.opacity = '1';
      descriptions[i].style.transition = 'opacity 0.25s ease-in-out';
    // hide the title
      projTitles[i].style.opacity = '0';
      projTitles[i].style.transition = 'opacity 0.25s ease-in-out';
  });

  image.addEventListener('mouseout', () => {
    // Return the image to its original size when not hovered over
    image.style.transform = 'scale(1)';
    image.style.transition = 'transform 0.25s ease-in-out'; // Add a smooth transition effect

    // Hide the description with an animatio
      descriptions[i].style.opacity = '0';
      descriptions[i].style.transition = 'opacity 0.25s ease-in-out';  
    // show the title
      projTitles[i].style.opacity = '1';
      projTitles[i].style.transition = 'opacity 0.25s ease-in-out';
  });
});



// this makes the social icons in the footer get bigger when hovered over
// Get all the icon elements
const socialIcons = document.querySelectorAll('.fa');

// Add event listener to each icon element
socialIcons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    // Increase the size of the icon when hovered over
    icon.style.transform = 'scale(1.1)';
    icon.style.transition = 'transform 0.25s ease-in-out'; // Add a smooth transition effect
  });

  icon.addEventListener('mouseout', () => {
    // Return the icon to its original size when not hovered over
    icon.style.transform = 'scale(1)';
    icon.style.transition = 'transform 0.25s ease-in-out'; // Add a smooth transition effect
  });
});
