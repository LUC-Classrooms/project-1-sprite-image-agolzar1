/**
 * Project 1 - Interactive Image
 * Name: Ariana Golzar
 * Completion date: 2/20
 * The image is a cow with black spots, black ears,and a pink nose.
 * The cow rotates but when you click the mouse, the nose turns grey and the cow stops rotating. 
 * Citation: Getting started with p5.js
 */

// Global Variables go here
var x = 300 // horizontal location 
var y = 200; // vertical location 
var a = 0; //rotation angle
var Nose = (255,192,203);

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas

}

function draw(){
  // this function runs again and again (60x per second)
  background(200); //light gray background

x = width/4; // initial location
y = height/4; // initial location 
if (mouseIsPressed){
  Nose = (200); // grey
} else {
  Nose = color(255, 192 , 203); // original color pink
} 
  // add your image drawing code here
  push (); //create new drawing layer

  translate (x,y); // shift ot origin point of (0,0)
  rotate (a);

 //head 
strokeWeight (4);
fill(255);
ellipse (x , y , 240 , 270);

 //nose
fill (Nose);
ellipse (x , y + 75 , 160 , 120)

 //left eye 
strokeWeight (2);
fill (0);
ellipse (x - 35 , y - 45 , 40 , 40);

 //right eye
ellipse (x + 30  , y - 45 , 40 , 40);

 //top right circle on left eye
fill(204);
ellipse (x - 30 , y - 50 , 15 , 15);

 //top right circle on left eye
ellipse (x + 35 , y - 50 , 15 , 15);

 //middle circle on left eye
ellipse (x - 45 , y - 40 , 12 , 12);

 //middle right circle on right eye
ellipse (x + 20 , y - 40 , 12, 12);

 //bottom circle on left eye
ellipse (x - 30 , y - 35 , 10 , 10);

 //bottom circle on right eye
ellipse (x + 35 , y - 35 , 10 , 10);

 //right nostril
fill (0);
ellipse (x + 30 , y + 75 , 20 , 30);

 //left nostril
ellipse ( x - 30  , x + 25 , 20 , 30);

//left ear
fill (0);
triangle (50 , 20 , 90 , -20 , -5 , 5);

//right ear
fill (0);
triangle (210 , -20 , 310 , 15 , 250 , 25);

//left spot
strokeWeight (45);
point (50 , 100);

//upper right spot
strokeWeight (40);
point (240 , 50);

//middle spot
strokeWeight (35);
point (160 , -20);

//lower right spot
strokeWeight(35);
point (245 , 150);

pop();
a += 0;

/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
  if(mouseIsPressed){
   a+= 0;
  } else {
   a+= 0.01;
  }
}
