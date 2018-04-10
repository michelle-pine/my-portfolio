//Michelle Pine
//ARTG 2260 Programming Basics
//Assignment3
//3/19/17

// global variables
var state = -1; //controls the state
var option; //for deciding what type of data input
var query = ""; //for gathering the query
var longgo = false; //to tell whether longitude is being inputted
var latt = ""; //lattitude value
var long = ""; //longitude value
var apiKey = "8ea258023cad41ad8d4151428172404"; // API key
var url; // to store the url search term
var w = 1024; // canvas width
var h = 720; // canvas height
var bg, windmill1, windmill2, windmill3, base1, hills; //image variables
var entry, choices, reg, lat;
var cloud1, cloud2; //cloud type variables
var temp, wind; // variables for tempurature info
var angle = 0; //angle of windmill
var toggle = false; // used to stop displaying info twice
var can; //the canvas
var name1 = ""; //city name
var time = 0; //keeps track of time passed

var c1 = new Cloud(250, 12);
var c2 = new Cloud(12, 93);
var c3 = new Cloud(560, 150);
var c4 = new Cloud(800, 130);
var c5 = new Cloud(500, 30);
var c6 = new Cloud(1000, 100);
var c7 = new Cloud(700, 5);
var c8 = new Cloud(1000, 0);
var c9 = new Cloud(900, 20);
var c10 = new Cloud(-30, 20);


//initializes the canvas
function setup() {
  can = createCanvas(1024, 720);
  
  background(bg); // clear the background
  // place text for intro
  textSize(72);
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
  frameRate(20);
  can.parent('windy-contain');

}


//creates animation
function draw() {
  if (permissionWW) {
    background(255);
    noStroke();

    if (state == -1) { //entry screen 
      background(bg);
      background(entry);
    }
    if (state === 0) { //options, chosen by mousePress
      background(bg);
      background(choices);
    }
    if (state == 1) { //menu and default screen
      background(bg);
      background(reg);
      fill(240);
      imageMode(CENTER);
      fill(255)
      textSize(11);
      text("Press the Left Arrow to Go Back", 920, height - 20);
      imageMode(CORNER);
      fill(0);
      textSize(12);
      text(query, 200, 190, 600, 66)
    }
    if (state == 2) { //regular queries
      background(bg);
      background(lat);
      fill(240);
      imageMode(CENTER);
      fill(255);
      textSize(12);
      text("Press the Left Arrow to Go Back", 920, height - 20);
      imageMode(CORNER);
      textSize(18);
      fill(0);
      text(latt, 200, 190, 275, 66);
      text(long, 500, 190, 275, 66);

    }
    if (wind && state == 3) { //by coordinates
      windmillScene();
      imageMode(CORNER);
      fill(255);
      textSize(12);
      text("Press the Left Arrow to Go Back", 920, height - 20);
      textSize(25);
      text(name1, 140, height - 50);
      text("WIND SPEED: " + wind + " mph", 140, height - 25);
    }
    if (state == 3 && time < 300 && !wind) {
      background(bg);
      textSize(50);
      text("LOADING...", width / 2, height / 2);
      time++;
    }
    if (state == 3 && !wind && time >= 300) {
      background(bg);
      fill(255, 0, 0);
      textSize(20);
      text("BAD INPUT OR NO RESPONSE FROM THE API. PRESS THE LEFT ARROW KEY TO GO BACK", width / 2, height / 2);
    }
  }
}

//handles keypresses for user input
function keyPressed() {
  enter = keyCode == ENTER;
  backspace = keyCode == BACKSPACE;
  tab = keyCode == TAB;


  if (state == -1) { //leaving entry screen
    state = 0;
  }
  if (keyCode == LEFT_ARROW) { //reset button
    reset();
  }
  if (keyCode == ENTER && state == 1) { //gets data if enter is pressed
    go = true;
    toggle = true; // reset toggle
    makeURL(query); // create a url based on the typed value
    loadJSON(encodeURI(url), gotData);
    state = 3;
    query = "";
    latt = "";
    long = "";
    longgo = false;
  }
  if (keyCode == BACKSPACE && state == 1) { // backspaces the query
    query = query.substring(0, query.length - 1);
  }
  if (state == 1 && !enter && !backspace) { //adds to input
    query = query + key;
  }
  if (state == 2 && keyCode == BACKSPACE && !(longgo)) { //adds to lattitude input
    latt = latt.substring(0, latt.length - 1);
  }
  if (state == 2 && keyCode == TAB && !(longgo)) { //initializes entry for longitude
    longgo = true;
  }
  if (state == 2 && keyCode == ENTER && longgo) { //gets data if enter is pressed for coordinates
    go = true;
    toggle = true; // reset toggle
    makeURL2(latt, long); // create a url based on the coordinates 
    loadJSON(encodeURI(url), gotData);
    state = 3;
    query = "";
    latt = "";
    long = "";
    longgo = false;
  }
  if (state == 2 && !enter && !tab && !longgo) { //adds to lattitude
    latt = latt + key;
  }
  if (longgo && keyCode == BACKSPACE && !tab) { //backspaces longitude
    long = long.substring(0, long.length - 1);
  }
  if (longgo && !backspace && !tab) { //adds to longitude
    long = long + key;
  }
}

//allows the user to click on menu options
function mousePressed() {
  if (state === 0 && between(mouseX, 200, 850)) {
    if (between(mouseY, 180, 280)) {
      option = 1;
      state = 1;
    }
    if (between(mouseY, 300, 390)) {
      option = 2;
      state = 1;
    }
    if (between(mouseY, 410, 510)) {
      option = 3;
      state = 2;
    }
    if (between(mouseY, 590, 690)) {
      option = 4;
      state = 1;
    }
  }
  else if (state > -1 && between(mouseX, 900, 1024) && between(mouseY(0, 100))) {
    state = 0;
  }
}

//returns a boolean if the given value is between min and max
function between(val, min1, max1) {
  return (min1 <= val) && (val <= max1);
}


//creates the windmill scene animation
function windmillScene() {
  imageMode(CORNER);
  background(bg); // clear the background
  showClouds()
  imageMode(CENTER);
  image(hills, width / 2, height - 224, width + 6, 447);
  image(base1, 250, 450, 225, 300);
  image(base1, 760, 450, 150, 200);
  image(base1, width / 2, 600, 375, 500);
  imageMode(CORNER);
  windmillRotation(windmill3, 250, 300, 200, 200);
  windmillRotation(windmill2, 760, 350, 150, 150);
  windmillRotation(windmill1, width / 2, 350, 400, 400);
  angle = (angle + wind / 4) % 360;
}

//rotates the windmill
function windmillRotation(pic, x, y, w2, h2) {
  push()
  translate(x, y);
  push();
  rotate(angle)
  translate(-x - w2 / 2 - 1, -y - h2 / 2 - 1);
  image(pic, x, y, w2, h2);
  pop();
  pop();
}


//pre loads the images
function preload() {
  bg = loadImage("https://68.media.tumblr.com/b8ffa636eedb78e1c72c2c01a4ffa827/tumblr_omcu0uoMii1w7y0hko7_r1_1280.png");
  windmill1 = loadImage("https://68.media.tumblr.com/80df72f00f8cfb6624e6728d9952783b/tumblr_omcu0uoMii1w7y0hko9_1280.png");
  windmill2 = loadImage("https://68.media.tumblr.com/92560fe208f272ad3b1628c4427b27ea/tumblr_omcu0uoMii1w7y0hko6_1280.png");
  windmill3 = loadImage("https://68.media.tumblr.com/a9c1fff4edd6323eae3a244234b5f18b/tumblr_omcu0uoMii1w7y0hko5_1280.png");
  base1 = loadImage("https://68.media.tumblr.com/41e9bdf516fda99465e95b186416d0d1/tumblr_on2rwveETN1w7y0hko1_1280.png");
  cloud1 = loadImage("https://68.media.tumblr.com/ae0253aa5aea677f5a5acc8a1fa79de5/tumblr_omcu0uoMii1w7y0hko4_250.png");
  cloud2 = loadImage("https://68.media.tumblr.com/05d5d7f03995780352ca0a085bd72ca9/tumblr_omcu0uoMii1w7y0hko1_250.png");
  hills = loadImage("https://68.media.tumblr.com/5e41ee7fc397815542537183d25a9a9e/tumblr_omcu0uoMii1w7y0hko3_1280.png");
  entry = loadImage("https://68.media.tumblr.com/57a54040806f5dccd28779a1b1bb8f26/tumblr_omdjo3iTEV1w7y0hko4_r1_1280.png");
  choices = loadImage("https://68.media.tumblr.com/79cf41f4d7c991361ec37909fae8b5f0/tumblr_omdjo3iTEV1w7y0hko3_1280.png");
  reg = loadImage("https://68.media.tumblr.com/8e3ff1b9d1d35f59b0970ca544966656/tumblr_omdjo3iTEV1w7y0hko2_1280.png");
  lat = loadImage("https://68.media.tumblr.com/67710a83470e0b7dfa8453a98fd2a06b/tumblr_omdjo3iTEV1w7y0hko1_1280.png");
}


// use the input to make a search query url
function makeURL(temp) {
  url = "https://api.apixu.com/v1/current.json?key=" + apiKey + "&q=" + temp;
  print(encodeURI(url));
}

//makes the url for lattiude and longitude
function makeURL2(latt1, long1) {
  url = "https://api.apixu.com/v1/current.json?key=8ea258023cad41ad8d4151428172404&q=" + latt1 + "," + long1;
  print(encodeURI(url));
}

//receives the data from the api
function gotData(data) {

  if (toggle) {
    var weather = data;

    // store weather data
    wind = Math.round(data.current.wind_mph);
    name1 = data.location.name;
    num = wind;

    toggle = false;
  }
}

//resets everything
function reset() {
  state = 0;
  option = 0;
  query = "";
  longgo = false;
  latt = "";
  long = "";
  url = "";
  wind = false;
  angle = 0;
  toggle = false;
  name1 = "";
  time = 0;
}








//to represent the qualities of a cloud
function Cloud(ax, ay) {
  
    this.xval = Math.floor(ax);
    this.yval = Math.floor(ay);
  
  this.updateX = function() {
    this.xval = this.xval + num/8;
  }
  
  this.getX = function() {
    return this.xval;
  }
  
  this.displayCloud = function() {
    image(cloud1, this.xval, this.yval);
  }
  
  this.displayCloud2 = function() {
    image(cloud2, this.xval, this.yval);
  }
    
  this.getY = function() {
    return this.yval;
  }
  
  this.backInBounds = function() {
    if (this.xval > 1024) {
      this.xval = -300;
    }
  }
  
}

//shows all the created clouds
function showClouds() {
    updateClouds(c1, true);
    updateClouds(c2, false);
    updateClouds(c3, true);
    updateClouds(c4, false);
    updateClouds(c5, true);
    updateClouds(c6, false);
    updateClouds(c7, true);
    updateClouds(c8, false);
    updateClouds(c9, true);
    updateClouds(c10, false);
}

//updates an individual cloud
function updateClouds(c, first) {
  if (first) {
    c.updateX();
    c.backInBounds();
    c.displayCloud();
  }
  else {
    c.updateX();
    c.backInBounds();
    c.displayCloud2();
  }
}