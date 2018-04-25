var x = 0;
var y = 0;
var xx = 0;
var carImage;

function preload(){
    carImage = loadImage("car.png");
}

/* This function is called once, when the page loads. Anything that you want to show up initially should be created here! To start out, try drawing some shapes. */
function setup() {
    var canvas = createCanvas(800, 525)
    canvas.parent('canvas-image');
    background(240, 240, 240)
}



/* This function is called over and over again by P5. Animation should happen here! */
function draw() {
    background("#7597ff");
    fill("#58d347")
    rect(0,350,900,400)
    fill("#97a398")
    rect(0,500,900,50)            
    fill("#37993d")
    ellipse(300, 375, 50, 30);
    ellipse(320, 400, 50, 30);
    ellipse(280, 400, 50, 30);
    ellipse(180, 410, 50, 30);
    ellipse(200, 435, 50, 30);
    ellipse(160, 435, 50, 30);

    ellipse(600, 375, 50, 30);
    ellipse(620, 400, 50, 30);
    ellipse(580, 400, 50, 30);
    ellipse(480, 410, 50, 30);
    ellipse(500, 435, 50, 30);
    ellipse(460, 435, 50, 30);
    

    fill("#f8fc2a")
    ellipse(770, 30, 100, 100);
    
    image(carImage, xx, 425,290,100)
    
    fill("#f2f2e8")
    x++;
    ellipse(x + 170, 160, 70, 50);
    ellipse(x + 220, 160, 70, 50);
    ellipse(x + 195, 130, 70, 50);
    
    ellipse(x + 370, 60, 70, 50);
    ellipse(x + 420, 60, 70, 50);
    ellipse(x + 395, 30, 70, 50);
    
    ellipse(x + 570, 150, 70, 50);
    ellipse(x + 620, 150, 70, 50);
    ellipse(x +595, 120, 70, 50);
}



function keyPressed() {
    if(keyCode === 37){
    xx-= 50;
    }
    else if(keyCode === 39){
    xx+= 50;
    }
}

