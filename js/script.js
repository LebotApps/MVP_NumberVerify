// API 9d5acbb007c74165b9702ec4a7246e81

// data structure https://phonevalidation.abstractapi.com/v1/?api_key=9d5acbb007c74165b9702ec4a7246e81&phone=14152007986

// project requirements https://seir-everest.netlify.app/unit-projects/unit-one-project-requirements/


let verifyNumber;

const $number = $("#number");
const $carrier = $(`#carrier`);
const $location = $(`#location`);

function render(){

}



function handleGetData(event) {
    event.preventDefault();

    searchText= $("input#main").val();

$.ajax({
    
    url: `https://phonevalidation.abstractapi.com/v1/?api_key=9d5acbb007c74165b9702ec4a7246e81&phone=14707788215`

})

    .then(


    function (data) {
        verifyNumber = data;

        $number.text(data["phone", "valid"]);
        $carrier.text(data["carrier"]);
        $location.text(data["location"]);
    },

function (error) {
  console.log("bad request: ", error);
})
};

$("form").on('submit', handleGetData);
