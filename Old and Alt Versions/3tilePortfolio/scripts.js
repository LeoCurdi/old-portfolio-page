
// this is for the navigation top bar
var headerHeight = document.querySelector(".header").offsetHeight; // header height = 81px

var navHeight = document.querySelector(".navbar").offsetHeight; // navbar height = 39px

var navbar = document.querySelector(".navbar");
var navSide = document.querySelector(".navSide");
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    if (currentScrollPos <= headerHeight) {
        navbar.style.position = "relative";
        navSide.style.top = "120px";
      }
  } 
  else {
    if (currentScrollPos >= headerHeight) {
      navbar.style.position = "fixed";
      navbar.style.top = "0";
      navSide.style.top = "39px";
      navSide.style.marginTop = "0px";
    }
  }
  prevScrollpos = currentScrollPos;
}


// this makes the pictures in the portfolio page get bigger when hovered over
// Get all the image elements
const images = document.querySelectorAll('.project');
const descriptions = document.querySelectorAll('.projectDescription');
const projTitles = document.querySelectorAll('.projectTitle');
let i = 0;

// Add event listener to each image element
images.forEach((image, i) => {
  image.addEventListener('mouseover', () => {
    // Increase the size of the image when hovered over
    image.style.transform = 'scale(1.05)';
    image.style.transition = 'transform 0.25s ease-in-out'; // Add a smooth transition effect

    // Display the description with an animation
    //descriptions.forEach(description => {
      descriptions[i].style.opacity = '1';
      descriptions[i].style.transition = 'opacity 0.25s ease-in-out';
   // });
    // hide the title
    //projTitles.forEach(title => {
      projTitles[i].style.opacity = '0';
      projTitles[i].style.transition = 'opacity 0.25s ease-in-out';
   // });
  });

  image.addEventListener('mouseout', () => {
    // Return the image to its original size when not hovered over
    image.style.transform = 'scale(1)';
    image.style.transition = 'transform 0.25s ease-in-out'; // Add a smooth transition effect

    // Hide the description with an animation
    //descriptions.forEach(description => {
      descriptions[i].style.opacity = '0';
      descriptions[i].style.transition = 'opacity 0.25s ease-in-out';
    //});    
    // show the title
    //projTitles.forEach(title => {
      projTitles[i].style.opacity = '1';
      projTitles[i].style.transition = 'opacity 0.25s ease-in-out';
    //});
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
