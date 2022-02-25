function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

    posenet=ml5.poseNet(video, modelLoaded);
}

function draw(){
    console.log('Posenet is initialised!');
    poseNet.on('pose',gotPoses);
}