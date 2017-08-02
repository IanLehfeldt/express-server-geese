console.log('client.js has been loaded');

var geese = [];
//We created an empty array with the variable geese.

$(document).ready(function () {
    console.log('jquery is loaded');
    getGeesen();
    //our ajax function that draws a goose table from the response of our server
    // drawGeeseTable();

    // Add new goose on button click
    $('#newGooseButton').on('click', function () {
        console.log('new goose button was clicked');
        var newGoose = {}; // creates empty newGoose object

        // Adding properties to the new goose
        newGoose.name = $('#newGooseName').val();
        newGoose.age = parseInt($('#newGooseAge').val());
        newGoose.type = $('#newGooseType').val();

        console.log('newGoose:', newGoose);

        // Adding new goose to goose array
        //geese.push(newGoose);
        $.ajax({
            method: 'POST',
            url: '/geese',
            data: newGoose,
            success: function(response){
                console.log(response);
                getGeesen();
            }
            
        })

        // redrawing the table with the new goose
        drawGeeseTable();
    });
    
});


//AJAX function for getting stuff off the server
//a part of jquery, but implemented by a bunch of different libraries
function getGeesen() {
    //Asking AJAX to do a method, from a specific url and check for a success
    $.ajax({
        //ajax function takes in an object
        //object has a method
        method: 'GET',
        //object checks for url
        url: '/geese',
        //once object is successful, it then does a method
        success: function (response) { //response will be the array of geese.
            console.log(response);
            geese = response;
            drawGeeseTable();
            //After AJAX gets the response of the array of geese, we log it
            //We set geese to the response
            //AND THEN we draw a geese table from the response.
        }
    })
}

//function that draws a table with the geese array
function drawGeeseTable() {
    //adding geese to DOM
    //empties the geese table
    $('#geesenTableBody').empty();

    //for loop that goes thru each item in geese array
    for (var i = 0; i < geese.length; i++) {
        var goose = geese[i];

        //jquery function that appends a new geese row for each item in geese array
        $('#geesenTableBody').prepend(
            '<tr>' +
            '<td>' + goose.name + '</td>' +
            '<td>' + goose.age + '</td>' +
            '<td>' + goose.type + '</td>' +
            '</tr>'
        );
    }
} 

// function updateGeeseArray() {
//     $.ajax({
//         method: 'POST',
//         url: '/geese',
//         success: function (){

//         }
//     })
// }