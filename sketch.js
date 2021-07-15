var rabbit,rabbitImg;
var rabbit2,rab2Img;
var garden,gardenImg;
var bird,birdFly;
var sitBird,sitImg;
var apple,appleImg;
var leaf1,leaf1Img;
var leaf2,leaf2Img;
var applesEat;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit2.png");
  appleImg = loadImage("apple.png");
  rab2Img = loadImage("rabbitRun.gif");
  birdFly = loadImage("bird.gif");
  sitImg = loadImage("tenor.gif");
  leaf1Img = loadImage("leaf.png");
  leaf2Img = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// create background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(280,350,30,30);
rabbit.addAnimation("rabRun",rabbitImg);
rabbit.scale =0.2;

//create bad rabbit
rabbit2=createSprite(350,300,10,10);
rabbit2.addImage("bad_rab",rab2Img);
rabbit2.scale=0.2;
rabbit2.velocityX=-3

//create bird flying
bird=createSprite(50,170);
bird.addImage(birdFly);
bird.scale=0.5;
bird.velocityX=3;

//tenor bird
sitBird=createSprite(370,90);
sitBird.addImage("tenor",sitImg);
sitBird.scale=0.2;

 
applesEat=createGroup();


}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  

  //move rabbit with mouse cursor
  rabbit.x=World.mouseX

  //if condition for bird
  if(bird.x>=410){
    bird.x=-10;
  }

  if (applesEat.isTouching(rabbit))
  {
      applesEat.destroyEach();
  }

  //if condition for rabbit to come again and again
  if(rabbit2.x<=80){
    rabbit2.x=410;
  }

  //increase deoth of rabbit
  rabbit.depth=rabbit2.depth;
  rabbit.depth+=1;

  leaves1();
  leaves2();
  apples();
  drawSprites();
}

//create function apples
function apples(){

  if(frameCount % 100===0){
   
    //create apple
    
    apple=createSprite(Math.round(random(0,400)),10,5,500);
    applesEat.add(apple);
    apple.addImage(appleImg);
    apple.scale=0.06;
    apple.velocityY=3;

  }
}

//create function leaves1
function leaves1(){
  if(frameCount % 150===0){
    leaf1=createSprite(Math.round(random(0,400)),8,5,300);
    leaf1.addImage(leaf1Img);
    leaf1.scale=0.1;
    leaf1.velocityY=2;

  }

}

//create function leaves2
function leaves2(){
  if(frameCount % 120===0){
    leaf1=createSprite(Math.round(random(0,400)),20,5,300);
    leaf1.addImage(leaf2Img);
    leaf1.scale=0.06;
    leaf1.velocityY=2.5;

  }

}

