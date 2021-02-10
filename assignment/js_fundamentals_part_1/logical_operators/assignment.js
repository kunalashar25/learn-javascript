let country = 'India';
let continent = 'Asia';
let population = 11.59;
const language = 'English';
const isIsland = false;

if (language === 'English' && population < 50 && !isIsland)
    console.log('Can stay in this country');
else
    console.log('Country does not meet the criteria');