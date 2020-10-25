var quotes = ["Time to do 5 burpees and burn fat!!",
            "Lets do 5 push ups!",
            "Hey lets do 8 sit ups and give that fat some pain",
            "You have been sitting for a while now, lets do 6 squats!",
            "Stand on the plank position for 15 seconds",
            "Get on the floor and do 5 crunches",
            "Get on the floor and do 5 leg raise",
            "How about doing jumping rope 10 times(pretend having a rope in hand ;)?",
            "Time to do 5 jumping squats!!"
        ];

// var name = "";

var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var workout = getRandomNumber(0,quotes.length);

var message = "<img class = \"bg\" src = \"backgrounds/"+(workout+1)+".jpg\">";

// message += "<h1 class=\"greet\"><b>Hello "+name+"!</b></h1>";
message += "<h1 class = \"center\">"+quotes[workout]+"</h1>";
        
document.body.innerHTML =  message;
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}