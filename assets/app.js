// array of sports
var topics = ["Hockey", "Golf", "Basketball", "Tennis"];

function createBtn() {

    //deleting any previous info
    $("#button-holder").empty();
    
    // Looping through the array of sports
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("sports-btn");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#button-holder").append(a);
        }
    };
    
    $("#newSport").on("click", function(event) {
        event.preventDefault();
        //grab the inputted sport and trims whitespace
        var someSport = $("#sport-input").val().trim();
    
        //add sport to array
        topics.push(someSport);
        console.log(someSport);
    
    createBtn();
    });


function displaySportsGif() {

    var sports = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=DHYsoL5IUHLHQ87Qu5huTWrNXhWI5DEH&q=" + sports + "&limit=10";

    $.ajax({
    url: queryURL,
    method: "GET"

    }).then(function(response) {

        //for loop to give 10 gifs for each sport
        for (var i = 0; i <= 10; i++) {
        //console.log(response.data[i].images.original_still.url);
        
        var sportDiv = $("<div class='sport' data-state='still'>");
    
        var rate = response.data[i].rating;
        var ratingDiv = $("<p>").text("Rating: " + rate);
        
        //Retrieving the URL for the still gif
        //var gifStillURL = response.data[i].images.original_still.url;
            
        //Retrieving the URL for the running gif
        //var gifAnimateURL = response.data[i].images.original.url;
        
        //Creating an element to hold the gif
        var gif = $("<img class='run'>")
        gif.attr("src", response.data[i].images.original_still.url);
        gif.attr("data-animate", response.data[i].images.original.url); 
        gif.attr("data-still", response.data[i].images.original_still.url);
        gif.attr("data-state", 'still'); 
        
      
        //creating an element to hold the animated gif
       // var runningGif = $("<img class='run' data-state='animate'>").attr("src", gifAnimateURL);

        // Appending the image
        sportDiv.append(gif);
        sportDiv.append(ratingDiv);
        
        if (response.data[i].rating == "g" ||  "pg") {
        $("#sports-gifs").prepend(sportDiv);
        }
    
        $(".run").on("click", function() {

            var state = $(this).attr('data-state');

            if (state === 'still') {
                $(this).attr("src", $(this).attr('data-animate'));
                $(this).attr("data-state", 'animate');
                
                // gif.attr("src", gif.attr("data-animate"));
                // gif.attr('data-state', "animate");
            } else {
                $(this).attr("src", $(this).attr('data-still'));
                $(this).attr("data-state", 'still');

                }       
                console.log(data-state);
            });
        }
        });

        };

$(document).on("click", ".sports-btn", displaySportsGif);

createBtn();


