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

    // Storing the lightbulb effect for the dark/light toggle button and toggling its inclusion on the page
    const tintButtonBackground = document.querySelector('.index-tintButtonBackground');

    tintButtonBackground.classList.toggle("noDisplay");
    
    // Storing the lightbut button and changing the font awesome image according to the dark/light state
    const tintButton = document.querySelector('.index-tintButton');
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
