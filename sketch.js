function setup() {
  createCanvas(800, 800);
  background(0);
  jump_button = createButton('Make Him Jump!')
  jump_button.position(350, 600);
  jump_button.mousePressed(jump);
  jump_button.mouseReleased(not_jump);
}

function draw() {
  background(220);
}

function jump(){
  
}

function not_jump(){
  
}