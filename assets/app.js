// array of sports
var topics = ['Hockey', 'Golf', 'Basketball', 'Tennis'];

function createBtn() {
  //deleting any previous info
  $('#button-holder').empty();

  // Looping through the array of sports
  for (var i = 0; i < topics.length; i++) {
    var a = $('<button>');
    a.addClass('sports-btn');
    a.attr('data-name', topics[i]);
    a.text(topics[i]);
    $('#button-holder').append(a);
  }
}

$('#newSport').on('click', function(event) {
  event.preventDefault();
  //grab the inputted sport and trims whitespace
  var someSport = $('#sport-input')
    .val()
    .trim();

  //add sport to array
  topics.push(someSport);
  console.log(someSport);

  createBtn();
});

function displaySportsGif() {
  var sports = $(this).attr('data-name');
  var queryURL =
    'https://api.giphy.com/v1/gifs/search?api_key=DHYsoL5IUHLHQ87Qu5huTWrNXhWI5DEH&q=' +
    sports +
    '&limit=10';

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    //for loop to give 6 gifs for each sport
    for (var i = 0; i <= 5; i++) {
      //console.log(response.data[i].images.original_still.url);

      var sportDiv = $("<div class='sport' data-state='still'>");

      var rate = response.data[i].rating;
      var ratingDiv = $('<p>').text('Rating: ' + rate);

      //Creating an element to hold the gif
      var gif = $("<img class='run'>");
      gif.attr('src', response.data[i].images.original_still.url);
      gif.attr('data-animate', response.data[i].images.original.url);
      gif.attr('data-still', response.data[i].images.original_still.url);
      gif.attr('data-state', 'still');

      // Appending the image
      sportDiv.append(gif);
      sportDiv.append(ratingDiv);

      if (response.data[i].rating == 'pg' || 'pg-13') {
        $('#sports-gifs').prepend(sportDiv);
      }

      $('.run').on('click', function() {
        var state = $(this).attr('data-state');

        if (state === 'still') {
          $(this).attr('src', $(this).attr('data-animate'));
          $(this).attr('data-state', 'animate');
        } else {
          $(this).attr('src', $(this).attr('data-still'));
          $(this).attr('data-state', 'still');
        }
        console.log(data - state);
      });
    }
  });
}

$(document).on('click', '.sports-btn', displaySportsGif);

createBtn();
