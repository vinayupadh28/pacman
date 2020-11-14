var bgImage,bg
var pacman, monster1, monster2, monster3, monster4
var monster1Image,monster2Image,monster3Image,monster4Image
var wall1, wall2, wall3, wall4, wall5, wall6
var border1, border2, border3, border4, border5, border6, border7, border8, border9, border10
var border11, border12, border13, border14, border15, border16, border17, border18, border19, border20
var line1, line2, line3, line4, line5, line6, line7, line8, line9, line10 
var food=[]
var gameOver
var foodGroup


function preload(){
pacmanImage = loadImage("Images/pacman.png")
monster1Image = loadImage("Images/blue square.jpg")
monster2Image = loadImage("Images/green trapizoid.png")
monster3Image = loadImage("Images/red triangle.png")
monster4Image = loadImage("Images/purple octogon.png")
gameOver = loadImage("Images/gameOver.png")
}

function setup(){
  createCanvas(600,800)
  //bg = createSprite(300,400)
//  bg.addImage(bgImage)
//  bg.scale = 2.75
  pacman = createSprite(300,598,100,10);
  pacman.addImage(pacmanImage)
  pacman.scale = 0.1;

foodGroup = new Group();

monster1 = createSprite(345,400,10,10)
monster2 = createSprite(315,400,10,10)
monster3 = createSprite(275,400,10,10)
monster4 = createSprite(245,400,10,10)

monster1.addImage(monster1Image)
monster2.addImage(monster2Image)
monster3.addImage(monster3Image)
monster4.addImage(monster4Image)

monster1.scale = 0.03;
monster2.scale = 0.06;
monster3.scale = 0.04;
monster4.scale = 0.03;

 //Walls
 stroke("yellow")
  wall1 = createSprite(229,388,10,90)
  wall1.shapeColor="red"
  wall2 = createSprite(299,428,150,10) 
  wall2.shapeColor="red"
  wall3 = createSprite(371,388,10,90)
  wall3.shapeColor="red"
  wall4 = createSprite(248,348,30,10)
  wall4.shapeColor="red"
  wall5 = createSprite(348,348, 30,10)
  wall5.shapeColor="red"
  wall6 = createSprite(300,347, 90,10)
  wall6.shapeColor="red"
// Top and Bottom
  stroke("yellow")
  border1 = createSprite(200,75,800,10)
  border1.shapeColor="blue"
  border2 = createSprite(200,750,800,10)
  border2.shapeColor="blue"
// Marks
  border3 = createSprite(0,500,210,10)
  border4 = createSprite(0,620,100,10)
  border5 = createSprite(600,620,100,10)
  border6 = createSprite(600,500,210,10)
  border7 = createSprite(0,280,210,10)
  border8 = createSprite(0,360,210,10)
  border9 = createSprite(0,420,210,10)
  border10 = createSprite(600,420,210,10)
  border11 = createSprite(600,280,210,10)
  border12 = createSprite(600,360,210,10)
  border13 = createSprite(145,687,195,10)
  border14 = createSprite(455,687,195,10)
  line1 = createSprite(165,655,10,70)
  line2 = createSprite(430,655,10,70)
  line3 = createSprite(107,325,10,85)
  line4 = createSprite(107,456,10,85)
  line5 = createSprite(500,456,10,85)
  line6 = createSprite(500,324,10,85)
  line7 = createSprite(300,120,10,85)

//Left and Right
  border15 = createSprite(5,410,10,677)
  border15.shapeColor="blue"
  border16 = createSprite(595,410,10,677)
  border16.shapeColor="blue"

//Setting Velocity
monster1.setVelocity(2,5)
monster2.setVelocity(2,5)
monster3.setVelocity(2,5)
monster4.setVelocity(2,5)

for (x=20;x<600;x=x+30){
  for (y=70;y<700;y=y+30){
    var a = createSprite(x,y,5,5);
    foodGroup.add(a);
    food.push(a);
  }
}
}


function draw(){
  background ("black");
  wall6.visible = false;
  
  pacman.setVelocity(0,0)
  if (keyDown("up")) {
    pacman.setVelocity(0,-2)
  }
  if (keyDown("down")) {
    pacman.setVelocity(0,2)
  }
  if (keyDown("left")) {
    pacman.setVelocity(-2,0)
  }

  if (keyDown("right")) {
    pacman.setVelocity(2,0)
  }
objectSide(pacman)
objectSide(monster1)
objectSide(monster2)
objectSide(monster3)
objectSide(monster4)
monster1.bounce(monster2)
monster1.bounce(monster3)
monster1.bounce(monster4)
monster2.bounce(monster3)
monster2.bounce(monster4)
monster3.bounce(monster4)
pacman.bounceOff(wall6)

if (monster1.isTouching(pacman)||monster2.isTouching(pacman)||monster3.isTouching(pacman)||monster4.isTouching(pacman)){
  pacman.visible=false;
  monster1.setVelocity(0,0)
  monster2.setVelocity(0,0)
  monster3.setVelocity(0,0)
  monster4.setVelocity(0,0)
  var b = createSprite(300,400)
  b.addImage(gameOver)
}
if (foodGroup.isTouching(pacman)){
  console.log(food.findIndex(findPosition))
  console.log(food);
}
 drawSprites(); 
 
  
}
 function objectSide(object){
 var edges = createEdgeSprites()
 object.bounceOff(edges)
 object.bounceOff(wall1)
 object.bounceOff(wall2)
 object.bounceOff(wall3)
 object.bounceOff(wall4)
 object.bounceOff(wall5)
 object.bounceOff(border1)
 object.bounceOff(border2)
 object.bounceOff(border3)
 object.bounceOff(border4)
 object.bounceOff(border5)
 object.bounceOff(border5)
 object.bounceOff(border6)
 object.bounceOff(border7)
 object.bounceOff(border8)
 object.bounceOff(border9)
 object.bounceOff(border10)
 object.bounceOff(border11)
 object.bounceOff(border12)
 object.bounceOff(border13)
 object.bounceOff(border14)
 object.bounceOff(line1)
 object.bounceOff(line2)
 object.bounceOff(line3)
 object.bounceOff(line4)
 object.bounceOff(line5)
 object.bounceOff(line6)
 object.bounceOff(line7)

}
function findPosition(sprite){
  console.log(sprite.x,sprite.y)
  return sprite.x=== pacman.x && sprite.y === pacman.y

}