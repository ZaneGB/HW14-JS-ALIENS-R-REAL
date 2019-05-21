// Level 1: Automatic Table and Date Search

// Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).
// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table 
// to your web page and then adds new rows of data for each UFO sighting.

// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through 
// the date/time column to find rows that match user input.


// from data.js
var tableData = data;

// Use d3

let tbody = d3.select("tbody");

// Develop a funcion to build the table 

function buildTable(data){
    
    // First, clear out existing data

    tbody.html("");

    data.forEach((dataRow) => {
        
        // console.table(dataRow);
        
        let row = tbody.append("tr");

        // console.table(Object.values(dataRow));

        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
        });
    })
}

// Level 2: Multiple Search Categories (Optional)

// Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple 
// filters and search for UFO sightings using the following criteria based on the table columns:

// date/time
// city
// state
// country
// shape

// Define user inputs

var dateInput = document.querySelector("#datetime");
var cityInput = document.querySelector("#city");
var stateInput = document.querySelector("#state");
var countryInput = document.querySelector("#country");
var shapeInput = document.querySelector("#shape");

// Declare a function that will handle filtering user input when they click the button

function handleClick(){ 
    
    // prevent the form from refreshing the page
    
    d3.event.preventDefault();

    // let date = d3.select('#datetime').property('value');
    
    // Format the user's search by removing leading and trailing whitespace, convert to lower case

    var dateFiltered = dateInput.value.trim().toLowerCase();
    var cityFiltered = cityInput.value.trim().toLowerCase(); 
    var stateFiltered = stateInput.value.trim().toLowerCase();
    var countryFiltered = countryInput.value.trim().toLowerCase();
    var shapeFiltered = shapeInput.value.trim().toLowerCase();

  // Set filteredData to an array where data is filtered by user's input

    let filterData = tableData.filter(function(data){
        
        return (dateFiltered === "" || data.datetime === dateFiltered) &&
        (cityFiltered === "" || data.city === cityFiltered) &&   
        (stateFiltered === "" || data.state === stateFiltered) &&
        (countryFiltered === "" || data.country === countryFiltered) &&
        (shapeFiltered === "" || data.shape === shapeFiltered);

    });
    
    buildTable(filterData);
}

d3.selectAll('#filter-btn').on('click', handleClick);

buildTable(tableData);

