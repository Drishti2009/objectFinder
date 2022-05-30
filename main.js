var status = "";
objects = [];

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}

function modelLoaded(){
    console.log("Model is Loaded");
    status = true;
}

function start() {
    objectDetection = ml5.objectDetection('cocossd', modelLoaded);
    document.getElementById("detection_status").innerHTML = "Status = Detecting Objects";
    object_name = document.getElementById("object_name").value;

    if (label == object_name) {
        video.stop();
        objectDetection.detect(gotResults);
        document.getElementById("object_status").innerHTML = object_name + " found";
        var synth = window.speechSynthesis;
        var utterThis = SpeechSynthesisUtterance(object_name + " found");
        synth.speak(utterThis);
    } else {
        document.getElementById("object_status").innerHTML = object_name + " not found";
    }
}


function draw(){
    image(VIDEO, 0, 0, 480, 380);
    if(status != ""){
        for(i=0; i<objectDetection; i++){
            fill("#FF0000");
            nofill();
            stroke("#FF0000");
            percent = floor(object[1].confidence * 100);
            label = object[i].label;
            text(label+" "+percent+"%", object[i].x+15, object[i].y+15);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}

function gotResults(results, error){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}