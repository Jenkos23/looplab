const PI = 3.1415;
let rad = 5; //in meters;
const area = PI * rad * rad;
const SPerPlant = 0.8; //space per plant
const StartPlant = 20; // initial plant start needed in our given area

//calcuating the maxmuim capacity of my garden required
const Maxcapacity = area/SPerPlant;

//specify the number of weeks to predict growth
let weeks = 3;

//calculate the number of plant after the specified number of weeks
let plantcount = StartPlant*weeks;

// percentage capacity of the area
let percentageCapacity =(plantcount/Maxcapacity)*100


//switch statement and suggestion for the scientist
switch(true){
    case(percentageCapacity >80):
       console.log("Prune the plants to stop them from exceeding the capacity.");
       break;



case(percentageCapacity >= 50 &&  percentageCapacity <= 80):
       console.log("The plants needs to be Monitored, it is growing in an unacceptable rate");
       break;

case(percentageCapacity < 50):
       console.log("We have more space to grow more plant.");
       break;

default:
    console.log("No action Needed");
    break

 
}

//Part 2 Think Bigger

//amount of additional space required if my starting plant is 100 plants

let newStartPlant =100; //new start plant

//number weeks without pruning
newWeek = 10;

//calculate the number of plant after the specified number of weeks
let newplantcount = newStartPlant * newWeek;

//  new percentage capacity of the area
let newpercentageCapacity =(newplantcount/Maxcapacity)*100

//if the area remain circular, the radius of the  expanded the area for 100 starter plant
let Initiaradius = 5; // calculated in meters
let initistartPlant = 20 // plants
//newradius
NewRadius = (newStartPlant * Initiaradius)/ initistartPlant
 console.log("this is the new radius for expanded garden " +  NewRadius);


 //Part 3 Try and catch error
 try{

 } catch(error){
       
 }