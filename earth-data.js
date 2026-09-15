/*

M POPAL EARTH
EARTH DATA CENTER

This file contains:
• Continents
• Countries
• Major cities
• Important landmarks
• Oceans
• Search information

The main website can use this data without changing
the main HTML structure.

*/

/* =========================================================
CONTINENTS
========================================================= */

const continents = [

{
    id: "asia",
    name: "Asia",
    type: "Continent",
    description:
        "Asia is the largest continent by area and population.",
    color: "#00eaff"
},

{
    id: "africa",
    name: "Africa",
    type: "Continent",
    description:
        "Africa is known for its diverse landscapes, cultures and wildlife.",
    color: "#39ffb0"
},

{
    id: "europe",
    name: "Europe",
    type: "Continent",
    description:
        "Europe contains many historic cities, cultures and landmarks.",
    color: "#9d5cff"
},

{
    id: "north-america",
    name: "North America",
    type: "Continent",
    description:
        "North America includes Canada, the United States, Mexico and many other regions.",
    color: "#ffd166"
},

{
    id: "south-america",
    name: "South America",
    type: "Continent",
    description:
        "South America is home to the Amazon rainforest and the Andes.",
    color: "#ff6b9d"
},

{
    id: "oceania",
    name: "Oceania",
    type: "Continent",
    description:
        "Oceania includes Australia and many Pacific island nations.",
    color: "#7cfcff"
},

{
    id: "antarctica",
    name: "Antarctica",
    type: "Continent",
    description:
        "Antarctica is the coldest continent and surrounds the South Pole.",
    color: "#ffffff"
}

];

/* =========================================================
OCEANS
========================================================= */

const oceans = [

{
    name: "Pacific Ocean",
    type: "Ocean"
},

{
    name: "Atlantic Ocean",
    type: "Ocean"
},

{
    name: "Indian Ocean",
    type: "Ocean"
},

{
    name: "Southern Ocean",
    type: "Ocean"
},

{
    name: "Arctic Ocean",
    type: "Ocean"
}

];

/* =========================================================
IMPORTANT COUNTRIES
========================================================= */

const countries = [

{
    name: "Afghanistan",
    continent: "Asia",
    capital: "Kabul"
},

{
    name: "Japan",
    continent: "Asia",
    capital: "Tokyo"
},

{
    name: "China",
    continent: "Asia",
    capital: "Beijing"
},

{
    name: "India",
    continent: "Asia",
    capital: "New Delhi"
},

{
    name: "Pakistan",
    continent: "Asia",
    capital: "Islamabad"
},

{
    name: "Saudi Arabia",
    continent: "Asia",
    capital: "Riyadh"
},

{
    name: "United Arab Emirates",
    continent: "Asia",
    capital: "Abu Dhabi"
},

{
    name: "Turkey",
    continent: "Asia / Europe",
    capital: "Ankara"
},

{
    name: "Russia",
    continent: "Europe / Asia",
    capital: "Moscow"
},

{
    name: "United Kingdom",
    continent: "Europe",
    capital: "London"
},

{
    name: "France",
    continent: "Europe",
    capital: "Paris"
},

{
    name: "Germany",
    continent: "Europe",
    capital: "Berlin"
},

{
    name: "Italy",
    continent: "Europe",
    capital: "Rome"
},

{
    name: "Egypt",
    continent: "Africa",
    capital: "Cairo"
},

{
    name: "South Africa",
    continent: "Africa",
    capital: "Pretoria"
},

{
    name: "Nigeria",
    continent: "Africa",
    capital: "Abuja"
},

{
    name: "United States",
    continent: "North America",
    capital: "Washington, D.C."
},

{
    name: "Canada",
    continent: "North America",
    capital: "Ottawa"
},

{
    name: "Mexico",
    continent: "North America",
    capital: "Mexico City"
},

{
    name: "Brazil",
    continent: "South America",
    capital: "Brasília"
},

{
    name: "Argentina",
    continent: "South America",
    capital: "Buenos Aires"
},

{
    name: "Australia",
    continent: "Oceania",
    capital: "Canberra"
},

{
    name: "New Zealand",
    continent: "Oceania",
    capital: "Wellington"
},

{
    name: "Antarctica",
    continent: "Antarctica",
    capital: "No permanent capital"
}

];

/* =========================================================
MAJOR CITIES
========================================================= */

const cities = [

{
    name: "Kabul",
    country: "Afghanistan",
    type: "Capital City"
},

{
    name: "Tokyo",
    country: "Japan",
    type: "Capital City"
},

{
    name: "Beijing",
    country: "China",
    type: "Capital City"
},

{
    name: "New Delhi",
    country: "India",
    type: "Capital City"
},

{
    name: "Dubai",
    country: "United Arab Emirates",
    type: "Major City"
},

{
    name: "Riyadh",
    country: "Saudi Arabia",
    type: "Capital City"
},

{
    name: "London",
    country: "United Kingdom",
    type: "Capital City"
},

{
    name: "Paris",
    country: "France",
    type: "Major City"
},

{
    name: "Berlin",
    country: "Germany",
    type: "Capital City"
},

{
    name: "Rome",
    country: "Italy",
    type: "Capital City"
},

{
    name: "Cairo",
    country: "Egypt",
    type: "Major City"
},

{
    name: "Cape Town",
    country: "South Africa",
    type: "Major City"
},

{
    name: "New York City",
    country: "United States",
    type: "Major City"
},

{
    name: "Los Angeles",
    country: "United States",
    type: "Major City"
},

{
    name: "Toronto",
    country: "Canada",
    type: "Major City"
},

{
    name: "Mexico City",
    country: "Mexico",
    type: "Capital City"
},

{
    name: "São Paulo",
    country: "Brazil",
    type: "Major City"
},

{
    name: "Buenos Aires",
    country: "Argentina",
    type: "Capital City"
},

{
    name: "Sydney",
    country: "Australia",
    type: "Major City"
},

{
    name: "Melbourne",
    country: "Australia",
    type: "Major City"
},

{
    name: "Auckland",
    country: "New Zealand",
    type: "Major City"
}

];

/* =========================================================
IMPORTANT LANDMARKS
========================================================= */

const landmarks = [

{
    name: "Burj Khalifa",
    country: "United Arab Emirates",
    type: "Landmark",
    description:
        "A famous skyscraper in Dubai."
},

{
    name: "Great Wall of China",
    country: "China",
    type: "Landmark",
    description:
        "A historic defensive network stretching across northern China."
},

{
    name: "Mount Everest",
    country: "Nepal / China",
    type: "Mountain",
    description:
        "The world's highest mountain above sea level."
},

{
    name: "Taj Mahal",
    country: "India",
    type: "Landmark",
    description:
        "A famous marble mausoleum in Agra."
},

{
    name: "Eiffel Tower",
    country: "France",
    type: "Landmark",
    description:
        "A famous landmark in Paris."
},

{
    name: "Colosseum",
    country: "Italy",
    type: "Landmark",
    description:
        "An ancient amphitheatre in Rome."
},

{
    name: "Pyramids of Giza",
    country: "Egypt",
    type: "Landmark",
    description:
        "Ancient pyramids near Cairo."
},

{
    name: "Statue of Liberty",
    country: "United States",
    type: "Landmark",
    description:
        "A famous monument in New York Harbor."
},

{
    name: "Grand Canyon",
    country: "United States",
    type: "Natural Landmark",
    description:
        "A vast canyon carved by the Colorado River."
},

{
    name: "Christ the Redeemer",
    country: "Brazil",
    type: "Landmark",
    description:
        "A famous statue overlooking Rio de Janeiro."
},

{
    name: "Sydney Opera House",
    country: "Australia",
    type: "Landmark",
    description:
        "A world-famous performing arts building in Sydney."
},

{
    name: "Uluru",
    country: "Australia",
    type: "Natural Landmark",
    description:
        "A massive sandstone formation in central Australia."
}

];

/* =========================================================
SPECIAL EARTH LOCATIONS
========================================================= */

const specialPlaces = [

{
    name: "North Pole",
    type: "Geographic Location"
},

{
    name: "South Pole",
    type: "Geographic Location"
},

{
    name: "Equator",
    type: "Geographic Line"
},

{
    name: "Prime Meridian",
    type: "Geographic Line"
},

{
    name: "International Date Line",
    type: "Geographic Line"
}

];

/* =========================================================
SEARCH DATABASE
========================================================= */

const earthSearchData = [

...continents,
...oceans,
...countries,
...cities,
...landmarks,
...specialPlaces

];

/* =========================================================
SEARCH FUNCTION
========================================================= */

function searchEarth(query){

if(
    typeof query !== "string" ||
    !query.trim()
){

    return [];

}


const searchText =
    query
    .trim()
    .toLowerCase();


return earthSearchData.filter(
    item => {

        const name =
            item.name
            ? item.name.toLowerCase()
            : "";

        const country =
            item.country
            ? item.country.toLowerCase()
            : "";

        const continent =
            item.continent
            ? item.continent.toLowerCase()
            : "";

        const capital =
            item.capital
            ? item.capital.toLowerCase()
            : "";

        const type =
            item.type
            ? item.type.toLowerCase()
            : "";

        return (

            name.includes(searchText) ||

            country.includes(searchText) ||

            continent.includes(searchText) ||

            capital.includes(searchText) ||

            type.includes(searchText)

        );

    }
);

}

/* =========================================================
FIND CONTINENT
========================================================= */

function getContinent(id){

return continents.find(
    continent =>
        continent.id === id
);

}

/* =========================================================
FIND COUNTRY
========================================================= */

function getCountry(name){

return countries.find(
    country =>
        country.name.toLowerCase() ===
        name.toLowerCase()
);

}

/* =========================================================
FIND CITY
========================================================= */

function getCity(name){

return cities.find(
    city =>
        city.name.toLowerCase() ===
        name.toLowerCase()
);

}

/* =========================================================
FIND LANDMARK
========================================================= */

function getLandmark(name){

return landmarks.find(
    landmark =>
        landmark.name.toLowerCase() ===
        name.toLowerCase()
);

}

/* =========================================================
EXPORT DATA
========================================================= */

window.M_POPAL_EARTH_DATA = {

continents,

oceans,

countries,

cities,

landmarks,

specialPlaces,

earthSearchData,

searchEarth,

getContinent,

getCountry,

getCity,

getLandmark

};

/* =========================================================
READY MESSAGE
========================================================= */

console.log(
"M POPAL EARTH DATA CENTER READY",
earthSearchData.length,
"items loaded."
);
