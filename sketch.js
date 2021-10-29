var caixa

function setup() {
  createCanvas(400,400);
caixa = createSprite(200,200,20,20)
caixa.shapeColor="blue"

}

function draw() 
{
  background("red");
if (keyDown("right_arrow")){
caixa.x = caixa.x +10


}
if (keyDown("left_arrow")) {
 caixa.x = caixa.x -10
  
}








  drawSprites()
}




