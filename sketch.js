var thickness, wall;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet = createSprite(50, 200, 50, 10);
  speed = createSprite;
  weight = createSprite;
  thickness = createSprite;
  thickness = random(22.83);
  speed = random(223,321);
  bullet.velocityX = speed;
  weight = random(30,52)
}

function draw() {
  background(255,255,255);  


  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    }

    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(bullet,wall){
  
    bulletRightEdge = bullet.x + bullet.width;
    wallLeftEdge = wall.x;
    if(bulletRightEdge >= wallLeftEdge){
      return true
    }
    return false;
}
