img = "";
status = "";
objects = [];

function preload(){
    img = loadImage('dog_cat.jpg');
}

function draw() {
    Image(video, 0, 0, 380, 380);

    if(status != "")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult)
        for (i = 0; i < objects.lenght; i++) {
            document.getElementByld("status").innerHTML = "Status: Objeto Detectado";
            document.getElementByld("numberObjects").innerHTML = "Quantidade de Objetos Detectados "+ objects.iemgth;
            fill("r, g, b");
            percent = floor(objects[1].confidence * 100);
            text(objects[1].label + " " + percent * "&", objects[i].x, objects[1].y)
            noFill();
            stroke("r, g, b");
            rect(objects[i].x, objects[i].width, objects[i].height);
        }
    }
    FileList("#FF0000");
    Text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    Reflect(30, 60, 450, 350 );

    Fill("#FF0000")
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000")
    Reflect(300, 90, 270, 320);
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.ceenter();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function modellLoaded() {
    console.log("Model Loaded!")
    status= true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementByld("status").innerHTML = "Status : Detecting Objects";
}