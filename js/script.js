//add media queries 
//fix desktop view 

let verifyNumber;

let $inputText;

const $number = $(`#number`);
const $valid = $(`#valid`);
const $carrier = $(`#carrier`);
const $location = $(`#location`);

function handleGetData(event) {
    event.preventDefault();
    
    inputText = $("#main").val();
$.ajax({
    
    url: `https://phonevalidation.abstractapi.com/v1/?api_key=9d5acbb007c74165b9702ec4a7246e81&phone=${1 + inputText}`,
})
    .then(
    function (data) {
        
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