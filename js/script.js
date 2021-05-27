// add getting started to readme file 
//add screenshoots of actual app to screenshots
//future enhancements (international calls and saved searches)

// Declaring Variables 

let verifyNumber;

let $inputText;

// jQuery
const $number = $(`#number`);
const $valid = $(`#valid`);
const $carrier = $(`#carrier`);
const $location = $(`#location`);

// Functions 

function handleGetData(event) {
    event.preventDefault();


//API 

inputText = $("#main").val();
    
    $.ajax({

        url: `https://phonevalidation.abstractapi.com/v1/?api_key=9d5acbb007c74165b9702ec4a7246e81&phone=${1 + inputText}`,
        })
        
//Promise

    .then(function (data) {

    verifyNumber = data;

    $number.text(data["phone"]);
    $valid.text(data["valid"]);
    $carrier.text(data["carrier"]);
    $location.text(data["location"]);

    },
    function (error) {
    console.log("bad request: ", error);
    }
    );
}
$("form").on('submit', handleGetData);