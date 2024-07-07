// Preload images to reduce load times
function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

// Spring images
preloadImages([
    "Images/Spring/spring1.jpg",
    "Images/Spring/spring2.jpg",
    "Images/Spring/spring3.jpg",
    "Images/Spring/spring4.jpg",
    "Images/Spring/spring5.jpg",
    "Images/Spring/spring6.jpg",
    "Images/Spring/spring7.jpg"
]);

// Summer images
preloadImages([
    "Images/Summer/summer1.jpg",
    "Images/Summer/summer2.jpg",
    "Images/Summer/summer3.jpg",
    "Images/Summer/summer4.jpg",
    "Images/Summer/summer5.jpg",
    "Images/Summer/summer6.jpg",
    "Images/Summer/summer7.jpg"
]);

// Autumn images
preloadImages([
    "Images/Autumn/autumn1.jpg",
    "Images/Autumn/autumn2.jpg",
    "Images/Autumn/autumn3.jpg",
    "Images/Autumn/autumn4.jpg",
    "Images/Autumn/autumn5.jpg",
    "Images/Autumn/autumn6.jpg",
    "Images/Autumn/autumn7.jpg"
]);

// Winter images
preloadImages([
    "Images/Winter/winter1.jpg",
    "Images/Winter/winter2.jpg",
    "Images/Winter/winter3.jpg",
    "Images/Winter/winter4.jpg",
    "Images/Winter/winter5.jpg",
    "Images/Winter/winter6.jpg",
    "Images/Winter/winter7.jpg"
]);

// Old code that miscalculated the date
// var current_date = new Date();
// const retirement_date = new Date(2025, 5, 23);

// console.log(Math.round((retirement_date.getTime() - current_date.getTime()) / (1000 * 60 * 60 * 24)));

// var days_left = Math.round((retirement_date.getTime() - current_date.getTime()) / (1000 * 3600 * 24)); // + 1 is scuffed fix, plz fix later when you have a brain

var current_date = new Date();
const retirement_date = new Date("05/23/2025");

// Convert dates to UTC timestamps
let current_date_utc = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());
let retirement_date_utc = Date.UTC(retirement_date.getFullYear(), retirement_date.getMonth(), retirement_date.getDate());

// Calculate the time difference in milliseconds
let time_difference = Math.abs(retirement_date_utc - current_date_utc);

// Convert milliseconds to days
let days_left = Math.ceil(time_difference / (1000 * 3600 * 24));

console.log(days_left);

setInterval(() => {
    current_date = new Date();
    // Convert dates to UTC timestamps
    let current_date_utc = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());
    let retirement_date_utc = Date.UTC(retirement_date.getFullYear(), retirement_date.getMonth(), retirement_date.getDate());

    // Calculate the time difference in milliseconds
    let time_difference = Math.abs(retirement_date_utc - current_date_utc);

    // Convert milliseconds to days
    let days_left = Math.ceil(time_difference / (1000 * 3600 * 24));
    document.getElementById('days-left').textContent = days_left;
}, 1);

var days_progressed = 634 - days_left;
var percent_there = ((days_progressed / 634) * 100).toFixed(2);

console.log(percent_there);

document.getElementById('percent-left').textContent = `${percent_there}% of the way there`;
document.getElementById('days-left').textContent = days_left;


var bar_width = document.getElementById('bar').clientWidth;
var section_width = (bar_width / 634);
var bar_pos = document.getElementById('bar').getBoundingClientRect();

var marker = {
    x: bar_pos.x,
    y: bar_pos.y,
    url: 'Images/Markers/marker4.png',
    class: 'marker'
}

console.log(marker.x, marker.y);

for (let i = 0; i < days_progressed; i++) {
    marker.x += section_width;
}

function convertVHtoPX(vh) {
    return window.innerHeight * vh / 100;
}

function convertVWtoPX(vw) {
    return window.innerWidth * vw / 100;
}

var img = document.createElement('img');
img.src = marker.url;

img.style.position = 'absolute';
img.style.top = `${marker.y - convertVHtoPX(3)}px`;
img.style.left = `${marker.x - convertVWtoPX(1.25)}px`;

img.classList.add(marker.class);


document.body.appendChild(img);

console.log(marker);

function getSeason(d) {
    var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[d.getMonth()];

    if (month == "December" || month == "January" || month == "Febuary") {
        document.documentElement.style.backgroundImage = `url("Images/Winter/winter7.jpg")`;
        return "Winter";
    } else if (month == "March" || month == "April" || month == "May") {
        document.documentElement.style.backgroundImage = `url("Images/Spring/spring7.jpg")`;
        return "Spring";
    } else if (month == "June" || month == "July" || month == "August") {
        document.documentElement.style.backgroundImage = `url("Images/Summer/summer7.jpg")`;
        return "Summer";
    } else if (month == "September" || month == "October" || month == "November") {
        document.documentElement.style.backgroundImage = `url("Images/Autumn/autumn7.jpg")`;
        return "Fall";
    }
}

const season = getSeason(new Date());

switch (season) {
    case "Winter":
        var r_int = Math.floor(Math.random() * (3 - 1) + 1);
        document.documentElement.style.backgroundImage = `url("Images/Winter/winter${r_int}.jpg")`;
        break;
    case "Spring":
        var r_int = Math.floor(Math.random() * (3 - 1) + 1);
        document.documentElement.style.backgroundImage = `url("Images/Spring/spring${r_int}.jpg")`;
        break;
    case "Summer":
        var r_int = Math.floor(Math.random() * (7 - 1) + 1);
        document.documentElement.style.backgroundImage = `url("Images/Summer/summer${r_int}.jpg")`;
        break;
    case "Fall":
        var r_int = Math.floor(Math.random() * (3 - 1) + 1);
        document.documentElement.style.backgroundImage = `url("Images/Autumn/autumn${r_int}.jpg")`;
        break;
}