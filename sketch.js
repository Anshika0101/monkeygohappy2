//start coding:

//create variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground
var survivalTime

function preload(){
  
  //load animations and images
  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  //creating groups
  FoodGroup= new Group()
  obstacleGroup= new Group()
  
}



function setup() {
  
  //creating canvas
  createCanvas(670, 400);
  
  score=0
  survivalTime=0
  
  //creating sprites for ground and monkey
  ground=createSprite(0,400,1500,10)
  
   monkey=createSprite(90,370,10,10)
  
  //adding animation for monkey
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1
  
  
  

  }
function draw() {
  //creating background
  background("green")
  
  //(adding condition) anytime space key will be pressed the monkey should jump
  if(keyDown("space")&&monkey.y >= 350){
    monkey.velocityY=-10
  }
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(ground)
  
  
  ground.velocityX = -7 
 ground.x = ground.width/2;
    
 if(World.frameCount%200===0){
    fruits()
 }
  
  if(World.frameCount%300===0){
    stones()
 }
 
  //(adding condition) whenever the monkey will touch the fruit/foodGroup, the fruit should destroy
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
    score=score+1
      }
  
 
 drawSprites()
  fill("white") 
  text("Score: "+ score, 500,50);
  
  fill("black")
  
  //setting the survival time for the monkey
  var survivalTime=Math.round(getFrameRate()/1);
  text("Survival Time: "+ survivalTime,350,50)
  
}

function fruits(){
  //creating sprite for banana
  banana=createSprite(670,Math.round(random(170,230)),10,10)
  //adding image for banana
  banana.addImage(bananaImage)
  //setting the size of banana
  banana.scale=0.1
  //giving velocity to the banana
  banana.velocityX=-3
  //adding banana in our foodGroup
  FoodGroup.add(banana)
}

function stones(){
  //creating sprite for stones/obstacles
  obstacle=createSprite(670,380,10,10)
  //adding obstacle's image
  obstacle.addImage(obstaceImage)
  //giving elocity to obstacles
  obstacle.velocityX=-4
  //setting the size of obstacles
  obstacle.scale=0.2
  //adding obstacle in our obstacleGroup
  obstacleGroup.add(obstacle)
  
   //adjusting depth
  obstacle.depth = monkey.depth;
  monkey.depth = monkey.depth +1;
}







