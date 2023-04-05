let bg_color;
let jumping = false;

//IMGs
let jumper;
let stander;
let trampoline;

//Information
let time_jumped = 0;

function preload(){
jumper = loadImage("Jumping.png");
stander = loadImage("Standing.png");
trampoline = loadImage("Trampoline.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg_color = color(255,255,255);
  textSize(width / 3);
  textAlign(CENTER, CENTER);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  noStroke();
  fill(bg_color)
  square(0,0,2000);

  textSize(32);
  fill(0,0,0);
  text("*Epilepsy Warning*", windowWidth/2, windowHeight/5.8);
  text("Press the mouse to help him jump!", windowWidth/2, windowHeight/4.8);
  text("Times Jumped: " + time_jumped, windowWidth/2, windowHeight/4);

  image(trampoline, windowWidth/2.3, windowHeight/3, windowWidth/6, windowHeight/3);

  if(jumping == false){
    image(stander, windowWidth/2.3, windowHeight/3, windowWidth/6, windowHeight/3);
  }

  if(jumping == true){
    image(jumper, windowWidth/2.3, windowHeight/4, windowWidth/6, windowHeight/3);
  }
}

function mousePressed(){
  bg_color = color(random(255), random(255), random(255));
  jumping = true;
  time_jumped++;
}

function mouseReleased(){
  bg_color = color(255,255,255);
  jumping = false;
}