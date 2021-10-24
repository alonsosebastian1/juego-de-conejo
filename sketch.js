var garden,rabbit;
var gardenImg,rabbitImg;
 var apple,appleImage;
var leaf,leafImage;
var grass,grassImage;
var rand;
var obstacle;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png");
  grassImage = loadImage("grass.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
   garden.depth = rabbit.depth;
  rabbit.depth = rabbit.depth + 1;
    if(mouseX){
    rabbit.x = mouseX;
  }
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
 spawnObstacles();
  spawnObstacles2();
  spawnObstacles3();
  spawnObstacles4();
}
function spawnObstacles(){
   if(frameCount % 90 === 0){
    obstacle = createSprite(80,70,20,30);
    obstacle.velocityY = 4;
     
 rand = Math.round(random(1,3));
 switch(rand){
      case 1: obstacle.addImage(appleImage);
     break;
        case 2: obstacle.addImage(leafImage);
     break;
      case 3: obstacle.addImage(grassImage);
     break;
        }
     obstacle.scale = 0.1;
     obstacle.lifetime = 300;
      garden.depth = obstacle.depth;
  obstacle.depth = obstacle.depth + 100;
     }
  
  }      
function spawnObstacles2(){
   if(frameCount % 80 === 0){
    obstacle = createSprite(160,70,20,30);
    obstacle.velocityY = 3;
     
 rand = Math.round(random(1,3));
 switch(rand){
      case 1: obstacle.addImage(appleImage);
     break;
        case 2: obstacle.addImage(leafImage);
     break;
      case 3: obstacle.addImage(grassImage);
     break;
        }
     obstacle.scale = 0.1;
     obstacle.lifetime = 300;
    garden.depth = obstacle.depth;
  obstacle.depth = obstacle.depth + 100;
     }
  }
function spawnObstacles3(){
   if(frameCount % 100 === 0){
    obstacle = createSprite(240,70,20,30);
    obstacle.velocityY = 2;
     
 rand = Math.round(random(1,3));
 switch(rand){
      case 1: obstacle.addImage(appleImage);
     break;
        case 2: obstacle.addImage(leafImage);
     break;
     case 3: obstacle.addImage(grassImage);
     break;
        }
     obstacle.scale = 0.1;
     obstacle.lifetime = 300;
      garden.depth = obstacle.depth;
  obstacle.depth = obstacle.depth + 100;
     }
  }
function spawnObstacles4(){
   if(frameCount % 100 === 0){
    obstacle = createSprite(350,70,20,30);
    obstacle.velocityY = 2;
     
 rand = Math.round(random(1,3));
 switch(rand){
      case 1: obstacle.addImage(appleImage);
     break;
        case 2: obstacle.addImage(leafImage);
     break;
     case 3: obstacle.addImage(grassImage);
     break;
        }
     obstacle.scale = 0.1;
     obstacle.lifetime = 300;
      garden.depth = obstacle.depth;
  obstacle.depth = obstacle.depth + 100;
     }
  }