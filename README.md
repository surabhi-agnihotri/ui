# task1
Task 1: Create a Product Carousel for Featured Products
I created a simple image carousel with navigation buttons to showcase featured chocolate products on a website homepage. Here's how I approached it:

HTML Structure: I structured the HTML with a container for the carousel (<div class="carousel">) and individual slides (<div class="slide">). Each slide contains an image of a chocolate product and optional text content.
CSS Styling: I utilized CSS to style the carousel and slides, including their positioning, dimensions, and transitions for smooth animations. I also styled the navigation buttons (#prev and #next) to enhance their appearance.
JavaScript Functionality:
I employed JavaScript to select the navigation buttons (#prev and #next) and all the slides using querySelector and querySelectorAll.
Initializing variables such as curSlide (current slide index) and maxSlide (maximum slide index).
I utilized a forEach loop to horizontally translate each slide by multiplying its index with a fixed value (500 pixels). This positions the slides side by side within the carousel.
Event listeners were added to the previous and next buttons. Upon clicking, these buttons increment or decrement the curSlide index accordingly. If the current slide is the first or last slide, the index loops back to the last or first slide, creating a continuous loop effect.
Within the event listener functions, another forEach loop adjusts the translation of each slide based on the current slide index. This horizontally shifts the slides to simulate sliding.
Responsive Design: I incorporated media queries to adjust the dimensions of the carousel and slides for different screen sizes. This ensures that the carousel remains functional and visually appealing across various devices.
In summary, my approach efficiently implements a basic image carousel with manual navigation functionality using HTML, CSS, and vanilla JavaScript. It provides a straightforward solution for showcasing featured chocolate products on a website homepage while maintaining responsiveness and visual appeal.
