function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas= createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#969A97');
    textSize(10);
fill('#F90093');
}
function textSize(){
    text('Hezekiah',57,80);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference=floor(leftWristX - rightWristX);
    }
}