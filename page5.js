img = "";
status = "";

function preload(){
    img = loadImage('fruit-basket.jpg');

}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
    image(img, 0, 0, 640, 420);
     
    fill("#004ffa");
    text("Fruit Basket", 310, 115);
    noFill();
    stroke("#004ffa");
    rect(290, 100, 320, 300);
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}


function back() {
    window.location = "index.html";
}