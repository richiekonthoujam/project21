function setup() {
  createCanvas(1600,400);
  speed=random(220,321);
  weight=random(30,50);
  thicness=random(20,80);
  bullet=createSprite(50,200,50,50);
  bullet.velocityX=speed
  bullet.shapeColor='white'
  wall=createSprite(1500,200,thicness,200)
}

function draw() {
  background(0);  
  if (wall.x-bullet.x<bullet.width/2+wall.width/2){
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thicness*thicness*thicness)
    if(damage>10){
      wall.shapeColor='red'
    }
    
    if(damage<10){
      wall.shapeColor='green'
    }
  }
  drawSprites();
}