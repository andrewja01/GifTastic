# GifTastic

//link to deployed page
https://andrewja01.github.io/GifTastic/


In this project I was working to append different Gifs to the page. Starting with a couple buttons already created, the page functions to let the user click on the sport to bring up 10 different Gifs in the stopped position. If the user clicks on the Gif it will start playing and vice versa if they click again. If the user would like to add a new sport they can enter a sport in the input field and click the "add sport" button to append a new button to the page.

The functionality was built using javascript. First creating a function to add new buttons and push the new sport to an array of sports already created. Then to display the Gifs, I used an ajax call to pull the sports from the Giphy.com API and then prepend the sport Gifs to a div on the HTML. 

The most difficult challenge was to start and stop the Gif's. This was done by using an if...else statement to check if they Gif was already in an animated state or not, and either stop or start the Gif based on that current state. 

