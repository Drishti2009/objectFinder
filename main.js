var status = "";

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}

function start(){
    objectDetection = ml5.objectDetection('cocossd', modelLoaded);
    document.getElementById("detection_status").innerHTML = "Status = Detecting Objects";
    object_name = document.getElementById("object_name").value;
}

function modelLoaded(){
    console.log("Model is Loaded");
    status = true;
}

function draw(){
    image(VIDEO, 0, 0, 480, 380);
}
