var ball;
var database;
var position;

function setup(){
  createCanvas(500,500);
  database = firebase.database()

  ball = createSprite(250,250,20,20);
  ball.shapeColor = "rgb(63, 196, 116)"

  var hypnoticBallPosition = database.ref('ball/position');
  hypnoticBallPosition.on("value", readPosition);

}

function draw(){
  background("white");
  
  if(keyDown("right")){
    writePosition(5,0);
  }
  if(keyDown("left")){
   writePosition(-5,0);
  }
  if(keyDown("up")){
    writePosition(0,-5);
  }
  if(keyDown("down")){
    writePosition(0,+5);
  }


  drawSprites();
  
}

function readPosition(data){
  position = data.val();

  ball.x = position.x;
  ball.y = position.y;
}
function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

