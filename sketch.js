let button, button2;
let sFlag = true;
function setup() {
  createCanvas(400, 400);
  button=createButton('원');
  button.position(0,0);
  button.size(100,50);
  button.style('font-size','20px');
  button.style('color','red');
    button.mousePressed(circleB);
  
  button2=createButton('사각형');
  button2.position(100,0);
  button2.size(100,50);
  button2.style('font-size','20px');
  button2.style('color','orange');
  button.mousePressed(changeFlag);
}
function changeFlag(){
  
  sFlag = false;
}
function circleB(){
 

 
}
function draw() {
  background(220);  


  r=random(0,255);
  g=random(0,255);
  b=random(0,255);
  fill(r,g,b);
    if(sFlag){
      ellipse(mouseX,mouseY,40);
    }
    else{
      rect(mouseX,mouseY,40);
    
    // rectBt();  
  
    }
}