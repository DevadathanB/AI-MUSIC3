function setup() {
    video = createCapture(VIDEO);
    canvas = createCanvas(500, 400);
    video.hide();
    canvas.position(390, 200);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 500, 400);
}

function preload() {
    song = loadSound("music.mp3");
}

function modelloaded() {
    console.log("Model Loaded!");
}