faded = "";
moveit = "";
function preload(){
    faded = loadSound('faded.mp3');
    moveit = loadSound('moveit.mp3');
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWristX ="+ leftWristX + "LeftWristY ="+leftWristY );
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX ="+ rightWristX + "rightWristY ="+rightWristY );
    }
}

function modelloaded() {
    console.log("Model Is Loaded!");
}

function draw() {
    image(video, 0, 0, 600, 450);
}

