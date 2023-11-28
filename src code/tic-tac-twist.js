//Global Variable
let turnNum = 1;
let sceneNum = 1;

let box1Clicked = "";
let box2Clicked = "";
let box3Clicked = "";
let box4Clicked = "";
let box5Clicked = "";
let box6Clicked = "";
let box7Clicked = "";
let box8Clicked = "";
let box9Clicked = "";

let win = "";
let isEraser = false;
let xErases = 0;
let oErases = 0;

let xEraserCounter; 
let oEraserCounter; 

let startX = 0;
let startY = 0;
let winPossibility = 0;

function preload() {

  board = loadImage("images/board.png");
  x = loadImage("images/x.png");
  o = loadImage("images/o.png");
  eI = loadImage("images/eraser.png");
  bolt = loadImage("images/bolt.png");
  boltDown = loadImage("images/boltDown.png");
  boltDiagaRight = loadImage("images/boltDiagaRight.png");
  boltDiagaLeft = loadImage("images/boltDiagaLeft.png");
  font = loadFont("fonts/PermanentMarker-Regular.ttf");
}

function setup() {
  let sketch = createCanvas(900, 600);
  sketch.parent("mycanvas");
}// end setup

function draw() {

  if (sceneNum == 1) {

    scene1();
  } else if (sceneNum == 2) {

    scene2();
  } else if (sceneNum == 3) {

    scene3();
  }


}


function scene1() {
  background(245, 245, 220);
  textSize(80);
  textFont(font);
  fill(255, 0, 0);

  text("Tic-Tac-Twist", 165, 80);

  textSize(50);
  text("Click Anywhere to Begin", 145, 165);

  textSize(40);
  text("X Goes First", 325, 210);

  textSize(30);
  text("Special Rule: ", 340, 310);

  textSize(25);
  text("Just like regular Tic Tac Toe, with a Twist...", 165, 340);

  text("YOU CAN USE YOUR TURN TO EITHER MAKE YOUR OWN MOVE", 70, 450);
  text("OR ERASE THE OPPONENTS", 270, 480);

  text("MAXIMUM 5 ERASES PER PLAYER", 230, 550);
}



function scene2() {
  background(245, 245, 220);
  

  //create board
  imageMode(CORNER);
  noTint();
  image(board, 140, 10, 600, 600);



  //eraser counter
  strokeWeight(1);
  xEraserCounter = 5 - xErases;
  oEraserCounter = 5 - oErases;
  textSize(20);
  text("X Erases Left:", 5, 20);
  text("O Erases Left:", 750, 20);
  textSize(30);
  text(xEraserCounter, 45, 50);
  text(oEraserCounter, 810, 50);
  



  //hover
  imageMode(CENTER);
  tint(255, 100);

  if ((turnNum % 2 == 0) && turnNum <= 9 && isEraser == true && oEraserCounter != 0) {
    tint(255, 200);
    image(eI, mouseX, mouseY, 150, 150);

  } else if ((turnNum % 2 == 0) && turnNum <= 9 && isEraser == false) {
    
    tint(255, 100);
    image(o, mouseX, mouseY, 150, 150);

  } else if ((turnNum % 2 != 0) && turnNum <= 9 && isEraser == true && xEraserCounter != 0) {
    
    tint(255, 200);
    image(eI, mouseX, mouseY, 150, 150);

  } else if ((turnNum % 2 != 0) && turnNum <= 9 && isEraser == false) {
    
    tint(255, 100);
    image(x, mouseX, mouseY, 150, 150);

  }




  //print x's and o's
  imageMode(CORNER);
  noTint();

  //box 1 print
  if (box1Clicked == "o") {
    image(o, 180, 45, 150, 150);
  }
  else if (box1Clicked == "x") {
    image(x, 165, 40, 150, 150);
  }


  //box 2 print
  if (box2Clicked == "o") {
    image(o, 380, 45, 150, 150);
  }
  else if (box2Clicked == "x") {
    image(x, 365, 40, 150, 150);
  }


  //box 3 print
  if (box3Clicked == "o") {
    image(o, 580, 45, 150, 150);
  }
  else if (box3Clicked == "x") {
    image(x, 565, 40, 150, 150);
  }


  //box 4 print
  if (box4Clicked == "o") {
    image(o, 180, 245, 150, 150);
  }
  else if (box4Clicked == "x") {
    image(x, 165, 240, 150, 150);
  }


  //box 5 print
  if (box5Clicked == "o") {
    image(o, 380, 245, 150, 150);
  }
  else if (box5Clicked == "x") {
    image(x, 365, 240, 150, 150);
  }

  //box 6 print
  if (box6Clicked == "o") {
    image(o, 580, 245, 150, 150);
  }
  else if (box6Clicked == "x") {
    image(x, 565, 240, 150, 150);
  }


  //box 7 print
  if (box7Clicked == "o") {
    image(o, 185, 440, 150, 150);
  }
  else if (box7Clicked == "x") {
    image(x, 170, 440, 150, 150);
  }


  //box 8 print
  if (box8Clicked == "o") {
    image(o, 380, 440, 150, 150);
  }
  else if (box8Clicked == "x") {
    image(x, 365, 440, 150, 150);
  }


  //box 9 print
  if (box9Clicked == "o") {
    image(o, 580, 440, 150, 150);
  }
  else if (box9Clicked == "x") {
    image(x, 565, 440, 150, 150);
  }
  //end printing x's and o's



  //ending the game  
  if ((box1Clicked == box2Clicked) && (box2Clicked == box3Clicked) && box1Clicked != "") {

    win = box1Clicked.toUpperCase();
    turnNum = 10;
    winPossibility = 1

  } else if ((box4Clicked == box5Clicked) && (box5Clicked == box6Clicked) && box4Clicked != "") {

    win = box4Clicked.toUpperCase();
    turnNum = 10;
    winPossibility = 2;

  } else if ((box7Clicked == box8Clicked) && (box8Clicked == box9Clicked) && box7Clicked != "") {

    win = box7Clicked.toUpperCase();
    turnNum = 10;
    winPossibility = 3;

  } else if ((box1Clicked == box4Clicked) && (box4Clicked == box7Clicked) && box1Clicked != "") {

    win = box1Clicked.toUpperCase();
    turnNum = 10;
    winPossibility = 4;

  } else if ((box2Clicked == box5Clicked) && (box5Clicked == box8Clicked) && box2Clicked != "") {

    win = box2Clicked.toUpperCase();
    turnNum = 10;
    winPossibility = 5;

  } else if ((box3Clicked == box6Clicked) && (box6Clicked == box9Clicked) && box3Clicked != "") {

    win = box3Clicked.toUpperCase();
    turnNum = 10;
    winPossibility = 6;

  } else if ((box1Clicked == box5Clicked) && (box5Clicked == box9Clicked) && box1Clicked != "") {

    win = box1Clicked.toUpperCase();
    turnNum = 10;
    winPossibility = 7;

  } else if ((box3Clicked == box5Clicked) && (box5Clicked == box7Clicked) && box3Clicked != "") {

    win = box3Clicked.toUpperCase();
    turnNum = 10;
    winPossibility = 8;

  } else if (turnNum == 10) {
    sceneNum++;
  }


  //draw line
  strokeWeight(20);
  stroke(255,0,0);

  //win possibility 1
  if(winPossibility == 1){
    if(startX == 0){
      startX = 150;
      startY = 110; 
    } 
    line(150, 110, startX, startY);
    if(startX < 725){
      
      image(bolt, startX, startY - 25, 100, 66);
      startX += 3;
      
    } else{
      sceneNum++;
    } 
  }

  
  //win possibility 2
  if(winPossibility == 2){
    if(startX == 0){
      startX = 150;
      startY = 310; 
    } 
    line(150, 310, startX, startY);
    if(startX < 725){
      
      image(bolt, startX, startY - 25, 100, 66)
      startX += 3;
      
    } else{
      sceneNum++;
    } 
  }


  //win possibility 3
  if(winPossibility == 3){
    if(startX == 0){
      startX = 150;
      startY = 510; 
    } 
    line(150, 510, startX, startY);
    if(startX < 725){

      image(bolt, startX, startY - 25, 100, 66)
      startX += 3;

    } else{
      sceneNum++;
    } 
  }


  
  //win possibility 4
  if(winPossibility == 4){
    if(startX == 0){
      startX = 248;
      startY = 25; 
    } 
    line(248, 25, startX, startY);
    if(startY < 575){
      
      image(boltDown, startX - 25, startY + 7.5, 66, 100)
      startY += 2;

    } else{
      sceneNum++;
    } 
  }


  //win possibility 5
  if(winPossibility == 5){
    if(startX == 0){
      startX = 448;
      startY = 25; 
    } 
    line(448, 25, startX, startY);
    if(startY < 575){

      image(boltDown, startX - 25, startY + 7.5, 66, 100)
      startY += 2;

    } else{
      sceneNum++;
    } 
  }


  //win possibility 6
  if(winPossibility == 6){
    if(startX == 0){
      startX = 648;
      startY = 25; 
    } 
    line(648, 25, startX, startY);
    if(startY < 575){

      image(boltDown, startX - 25, startY + 7.5, 66, 100)
      startY += 2;

    } else{
      sceneNum++;
    } 
  }


  //win possibility 7
  if(winPossibility == 7){
    if(startX == 0){
      startX = 165;
      startY = 35; 
    } 
    line(165, 35, startX, startY);
    if(startX < 725){

      image(boltDiagaRight, startX, startY, 150, 100)
      startY += 2;
      startX += 2;

    } else{
      sceneNum++;
    } 
  }


  
  //win possibility 8
  if(winPossibility == 8){
    if(startX == 0){
      startX = 720;
      startY = 35; 
    } 
    line(720, 35, startX, startY);
    if(startX > 150){

      image(boltDiagaLeft, startX - 140, startY, 150, 100)
      startY += 2;
      startX -= 2;

    } else{
      sceneNum++;
    } 
  }
  
}

//mouse hover to change to eraser
function mouseMoved() {


  //box 1 eraser
  if ((turnNum % 2 == 0) && box1Clicked == "x" && win == "" && mouseX > 150 && mouseX < 325 && mouseY > 25 && mouseY < 210) {
    isEraser = true;

  } else if ((turnNum % 2 != 0) && box1Clicked == "o" && win == "" && mouseX > 150 && mouseX < 325 && mouseY > 25 && mouseY < 210) {

    isEraser = true;

  }




  //box 2 eraser

  else if ((turnNum % 2 == 0) && box2Clicked == "x" && win == "" && mouseX > 365 && mouseX < 510 && mouseY > 25 && mouseY < 210) {

    isEraser = true;

  } else if ((turnNum % 2 != 0) && box2Clicked == "o" && win == "" && mouseX > 365 && mouseX < 510 && mouseY > 25 && mouseY < 210) {

    isEraser = true;

  }




  //box 3 eraser
  else if ((turnNum % 2 == 0) && box3Clicked == "x" && win == "" && mouseX > 580 && mouseX < 695 && mouseY > 25 && mouseY < 210) {

    isEraser = true;

  } else if ((turnNum % 2 != 0) && box3Clicked == "o" && win == "" && mouseX > 580 && mouseX < 695 && mouseY > 25 && mouseY < 210) {

    isEraser = true;

  }




  //box 4 eraser
  else if ((turnNum % 2 == 0) && box4Clicked == "x" && win == "" && mouseX > 150 && mouseX < 325 && mouseY > 240 && mouseY < 395) {

    isEraser = true;

  } else if ((turnNum % 2 != 0) && box4Clicked == "o" && win == "" && mouseX > 150 && mouseX < 325 && mouseY > 240 && mouseY < 395) {

    isEraser = true;

  }



  //box 5 eraser
  else if ((turnNum % 2 == 0) && box5Clicked == "x" && win == "" && mouseX > 365 && mouseX < 510 && mouseY > 240 && mouseY < 395) {

    isEraser = true;

  } else if ((turnNum % 2 != 0) && box5Clicked == "o" && win == "" && mouseX > 365 && mouseX < 510 && mouseY > 240 && mouseY < 395) {

    isEraser = true;

  }



  //box 6 eraser
  else if ((turnNum % 2 == 0) && box6Clicked == "x" && win == "" && mouseX > 580 && mouseX < 695 && mouseY > 240 && mouseY < 395) {

    isEraser = true;

  } else if ((turnNum % 2 != 0) && box6Clicked == "o" && win == "" && mouseX > 580 && mouseX < 695 && mouseY > 240 && mouseY < 395) {

    isEraser = true;

  }



  //box 7 eraser
  else if ((turnNum % 2 == 0) && box7Clicked == "x" && win == "" && mouseX > 150 && mouseX < 325 && mouseY > 455 && mouseY < 580) {

    isEraser = true;

  } else if ((turnNum % 2 != 0) && box7Clicked == "o" && win == "" && mouseX > 150 && mouseX < 325 && mouseY > 455 && mouseY < 580) {

    isEraser = true;

  }




  //box 8 eraser
  else if ((turnNum % 2 == 0) && box8Clicked == "x" && win == "" && mouseX > 365 && mouseX < 510 && mouseY > 455 && mouseY < 580) {

    isEraser = true;

  } else if ((turnNum % 2 != 0) && box8Clicked == "o" && win == "" && mouseX > 365 && mouseX < 510 && mouseY > 455 && mouseY < 580) {

    isEraser = true;

  }



  //box 9 eraser
  else if ((turnNum % 2 == 0) && box9Clicked == "x" && win == "" && mouseX > 580 && mouseX < 695 && mouseY > 455 && mouseY < 580) {

    isEraser = true;

  } else if ((turnNum % 2 != 0) && box9Clicked == "o" && win == "" && mouseX > 580 && mouseX < 695 && mouseY > 455 && mouseY < 580) {

    isEraser = true;

  }


//else don't show eraser image
  else {

    isEraser = false;

  }

}




//winning scene
function scene3() {
  strokeWeight(1);
  background(245, 245, 220);
  textSize(80);
  textFont(font);
  fill(255, 0, 0);
  text("Press 'r' To Restart", 50, 350);

  if (win != "") {

    text(win + " has won", 270, 270);

  } else {

    text("Tie Game", 280, 270);

  }
}




function mousePressed() {

  //box 1
  if ((turnNum % 2 == 0) && box1Clicked == "" && win == "" && mouseX > 150 && mouseX < 325 && mouseY > 25 && mouseY < 210) {
    box1Clicked = "o";
    turnNum++;
  }
  else if ((turnNum % 2 != 0) && sceneNum == 2 && box1Clicked == "" && win == "" && mouseX > 150 && mouseX < 325 && mouseY > 25 && mouseY < 210) {
    box1Clicked = "x";
    turnNum++;
  }

  //box 1 erase
  else if ((turnNum % 2 == 0) && box1Clicked == "x" && oErases < 5 && win == "" && mouseX > 150 && mouseX < 325 && mouseY > 25 && mouseY < 210) {
    box1Clicked = "";
    turnNum--;
    isEraser = false;
    oErases++;
  }
  else if ((turnNum % 2 != 0) && box1Clicked == "o" && xErases < 5 && win == "" && mouseX > 150 && mouseX < 325 && mouseY > 25 && mouseY < 210) {
    box1Clicked = "";
    turnNum--;
    isEraser = false;
    xErases++;
  }





  //box 2
  if ((turnNum % 2 == 0) && box2Clicked == "" && win == "" && mouseX > 365 && mouseX < 510 && mouseY > 25 && mouseY < 210) {
    box2Clicked = "o";
    turnNum++;
  }
  else if ((turnNum % 2 != 0) && sceneNum == 2 && box2Clicked == "" && win == "" && mouseX > 365 && mouseX < 510 && mouseY > 25 && mouseY < 210) {
    box2Clicked = "x";
    turnNum++;
  }

  //box 2 erase
  else if ((turnNum % 2 == 0) && box2Clicked == "x" && oErases < 5 && win == "" && mouseX > 365 && mouseX < 510 && mouseY > 25 && mouseY < 210) {
    box2Clicked = "";
    turnNum--;
    isEraser = false;
    oErases++;
  }
  else if ((turnNum % 2 != 0) && box2Clicked == "o" && xErases < 5 && win == "" && mouseX > 365 && mouseX < 510 && mouseY > 25 && mouseY < 210) {
    box2Clicked = "";
    turnNum--;
    isEraser = false;
    xErases++;
  }





  //box 3
  if ((turnNum % 2 == 0) && box3Clicked == "" && win == "" && mouseX > 580 && mouseX < 695 && mouseY > 25 && mouseY < 210) {
    box3Clicked = "o";
    turnNum++;
  }
  else if ((turnNum % 2 != 0) && sceneNum == 2 && box3Clicked == "" && win == "" && mouseX > 580 && mouseX < 695 && mouseY > 25 && mouseY < 210) {
    box3Clicked = "x";
    turnNum++;
  }

  //box 3 erase
  else if ((turnNum % 2 == 0) && box3Clicked == "x" && oErases < 5 && win == "" && mouseX > 580 && mouseX < 695 && mouseY > 25 && mouseY < 210) {
    box3Clicked = "";
    turnNum--;
    isEraser = false;
    oErases++;
  }
  else if ((turnNum % 2 != 0) && box3Clicked == "o" && xErases < 5 && win == "" && mouseX > 580 && mouseX < 695 && mouseY > 25 && mouseY < 210) {
    box3Clicked = "";
    turnNum--;
    isEraser = false;
    xErases++;
  }





  //box 4
  if ((turnNum % 2 == 0) && box4Clicked == "" && win == "" && mouseX > 150 && mouseX < 325 && mouseY > 240 && mouseY < 395) {
    box4Clicked = "o";
    turnNum++;
  }
  else if ((turnNum % 2 != 0) && sceneNum == 2 && box4Clicked == "" && win == "" && mouseX > 150 && mouseX < 325 && mouseY > 240 && mouseY < 395) {
    box4Clicked = "x";
    turnNum++;
  }

  //box 4 erase
  else if ((turnNum % 2 == 0) && box4Clicked == "x" && oErases < 5 && win == "" && mouseX > 150 && mouseX < 325 && mouseY > 240 && mouseY < 395) {
    box4Clicked = "";
    turnNum--;
    isEraser = false;
    oErases++;
  }
  else if ((turnNum % 2 != 0) && box4Clicked == "o" && xErases < 5 && win == "" && mouseX > 150 && mouseX < 325 && mouseY > 240 && mouseY < 395) {
    box4Clicked = "";
    turnNum--;
    isEraser = false;
    xErases++;
  }






  //box 5
  if ((turnNum % 2 == 0) && box5Clicked == "" && win == "" && mouseX > 365 && mouseX < 510 && mouseY > 240 && mouseY < 395) {
    box5Clicked = "o";
    turnNum++;
  }
  else if ((turnNum % 2 != 0) && sceneNum == 2 && box5Clicked == "" && win == "" && mouseX > 365 && mouseX < 510 && mouseY > 240 && mouseY < 395) {
    box5Clicked = "x";
    turnNum++;
  }

  //box 5 erase
  else if ((turnNum % 2 == 0) && box5Clicked == "x" && oErases < 5 && win == "" && mouseX > 365 && mouseX < 510 && mouseY > 240 && mouseY < 395) {
    box5Clicked = "";
    turnNum--;
    isEraser = false;
    oErases++;
  }
  else if ((turnNum % 2 != 0) && box5Clicked == "o" && xErases < 5 && win == "" && mouseX > 365 && mouseX < 510 && mouseY > 240 && mouseY < 395) {
    box5Clicked = "";
    turnNum--;
    isEraser = false;
    xErases++;
  }





  //box 6
  if ((turnNum % 2 == 0) && box6Clicked == "" && win == "" && mouseX > 580 && mouseX < 695 && mouseY > 240 && mouseY < 395) {
    box6Clicked = "o";
    turnNum++;
  }
  else if ((turnNum % 2 != 0) && sceneNum == 2 && box6Clicked == "" && win == "" && mouseX > 580 && mouseX < 695 && mouseY > 240 && mouseY < 395) {
    box6Clicked = "x";
    turnNum++;
  }

  //box 6 erase
  else if ((turnNum % 2 == 0) && box6Clicked == "x" && oErases < 5 && win == "" && mouseX > 580 && mouseX < 695 && mouseY > 240 && mouseY < 395) {
    box6Clicked = "";
    turnNum--;
    isEraser = false;
    oErases++;
  }
  else if ((turnNum % 2 != 0) && box6Clicked == "o" && xErases < 5 && win == "" && mouseX > 580 && mouseX < 695 && mouseY > 240 && mouseY < 395) {
    box6Clicked = "";
    turnNum--;
    isEraser = false;
    xErases++;
  }






  //box 7
  if ((turnNum % 2 == 0) && box7Clicked == "" && win == "" && mouseX > 150 && mouseX < 325 && mouseY > 455 && mouseY < 580) {
    box7Clicked = "o";
    turnNum++;
  }
  else if ((turnNum % 2 != 0) && sceneNum == 2 && box7Clicked == "" && win == "" && mouseX > 150 && mouseX < 325 && mouseY > 455 && mouseY < 580) {
    box7Clicked = "x";
    turnNum++;
  }

  //box 7 erase
  else if ((turnNum % 2 == 0) && box7Clicked == "x" && oErases < 5 && win == "" && mouseX > 150 && mouseX < 325 && mouseY > 455 && mouseY < 580) {
    box7Clicked = "";
    turnNum--;
    isEraser = false;
    oErases++;
  }
  else if ((turnNum % 2 != 0) && box7Clicked == "o" && xErases < 5 && win == "" && mouseX > 150 && mouseX < 325 && mouseY > 455 && mouseY < 580) {
    box7Clicked = "";
    turnNum--;
    isEraser = false;
    xErases++;
  }





  //box 8
  if ((turnNum % 2 == 0) && box8Clicked == "" && win == "" && mouseX > 365 && mouseX < 510 && mouseY > 455 && mouseY < 580) {
    box8Clicked = "o";
    turnNum++;
  }
  else if ((turnNum % 2 != 0) && sceneNum == 2 && box8Clicked == "" && win == "" && mouseX > 365 && mouseX < 510 && mouseY > 455 && mouseY < 580) {
    box8Clicked = "x";
    turnNum++;
  }

  //box 8 erase
  else if ((turnNum % 2 == 0) && box8Clicked == "x" && oErases < 5 && win == "" && mouseX > 365 && mouseX < 510 && mouseY > 455 && mouseY < 580) {
    box8Clicked = "";
    turnNum--;
    isEraser = false;
    oErases++;
  }
  else if ((turnNum % 2 != 0) && box8Clicked == "o" && xErases < 5 && win == "" && mouseX > 365 && mouseX < 510 && mouseY > 455 && mouseY < 580) {
    box8Clicked = "";
    turnNum--;
    isEraser = false;
    xErases++;
  }





  //box 9
  if ((turnNum % 2 == 0) && box9Clicked == "" && win == "" && mouseX > 580 && mouseX < 695 && mouseY > 455 && mouseY < 580) {
    box9Clicked = "o";
    turnNum++;
  }
  else if ((turnNum % 2 != 0) && sceneNum == 2 && box9Clicked == "" && win == "" && mouseX > 580 && mouseX < 695 && mouseY > 455 && mouseY < 580) {
    box9Clicked = "x";
    turnNum++;
  }

  //box 9 erase
  else if ((turnNum % 2 == 0) && box9Clicked == "x" && oErases < 5 && win == "" && mouseX > 580 && mouseX < 695 && mouseY > 455 && mouseY < 580) {
    box9Clicked = "";
    turnNum--;
    isEraser = false;
    oErases++;
  }
  else if ((turnNum % 2 != 0) && box9Clicked == "o" && xErases < 5 && win == "" && mouseX > 580 && mouseX < 695 && mouseY > 455 && mouseY < 580) {
    box9Clicked = "";
    turnNum--;
    isEraser = false;
    xErases++;
  }





  //scene switch 1 to 2
  if (sceneNum == 1) {
    sceneNum++;
  }


}



function keyPressed() {



  //restart game 
  if (key === 'r' && sceneNum == 3) {

    sceneNum = 2;
    turnNum = 1;


    box1Clicked = "";
    box2Clicked = "";
    box3Clicked = "";
    box4Clicked = "";
    box5Clicked = "";
    box6Clicked = "";
    box7Clicked = "";
    box8Clicked = "";
    box9Clicked = "";

    win = "";

    xErases = 0;
    oErases = 0;
    
    startX = 0;
    startY = 0;
    winPossibility = 0;

  }


}

