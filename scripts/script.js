// Notes for Assignment 2
    // 1. I have added a Dark/Light mode to the homepage of the Project 2 website.  A lightbulb icon has been added to the navigation bar at the top of the page, which serves as a button when clicked to switch between these modes.
    // 2. The main additions to the html begin on line 27 of the index.html file.
    // 3. The main additions to the CSS begins on line 285 of the _index.scss partial.
    // 4. I took inspiration for the use of a background tint and use of the background-blend-mode: multiply CSS property, from a slack overflow thread: https://stackoverflow.com/questions/12112746/how-can-i-tint-a-background-image-with-css/35177384


/* ======================
PSEUDOCODE
=========================*/

// When the user selects the Dark Mode/Light Mode button on the homepage, capture their action
    // Use querySelector to capture the button element
    // Add an event listener to a mouse click on the button

// Toggle the background tint and font colour to simulate the alternate mode (light or dark)
    // Use querySelector to capture the html elements
        // store header elements and section elements for background tint; body, h1, and span elements for font colour
        // Assign similar background tints to one variable using querySelectorAll (those assigned to tintDark or tintLight)
    // Toggle tint classes to html elements
        // Use for of loops to cycle through variables that store multiple html elements
        // Toggle the appropriate class to create a dark/light mode style
    // Alternate the content of the Dark Mode/Light Mode element
        // Use an if statement to toggle different font awesome images and set toggle in global variables
        // Use toggle to apply a class to the light mode state


/* ======================
CODE
=========================*/

// Storing the html slements for the dark/light toggle button
const button = document.querySelector('.index-tintButton');

// Toggle for tint button effect
buttonToggle = 0;

// Using an event listener for a mouse click on the dark/light toggle button
button.addEventListener('click', function() {

    // Storing the html elements to change to dark/light mode
    const tintDark = document.querySelectorAll('.index-header, .index-threeImages, .index-planAhead, .index-freeTrip');
    const tintLight = document.querySelectorAll('.index-visitGuyana, .index-midpage');
    const tintImg = document.querySelectorAll('.index-titleSunglasses, .index-visitGuyanaImg, .index-planAheadImg1, .index-planAheadImg2, .index-threeImagesItems, .index-bottomSpanImg');
    const tintFont = document.querySelectorAll('.index-body, .index-titleContainer, .index-titlePrefix');

    // Using for of loops to cycle through variabls and apply classes with dark/light mode styling 
    for (item of tintDark) {
        item.classList.toggle("tintDark");
    }

    for (item of tintLight) {
        item.classList.toggle("tintLight");
    }

    for (item of tintImg) {
        item.classList.toggle("tintImg");
    }

    for (item of tintFont) {
        item.classList.toggle("tintFont");
    }

    // Storing the lightbut button and changing the font awesome image according to the dark/light state
    const tintButton = document.querySelector('.index-tintButton');
    
    tintButton.classList.toggle("index-tintButtonColour");

    if (buttonToggle === 0) {
        tintButton.classList.add("far");
        tintButton.classList.remove("fas");
        buttonToggle++;
    } else {
        tintButton.classList.add("fas");
        tintButton.classList.remove("far");
        buttonToggle--;
    }
})