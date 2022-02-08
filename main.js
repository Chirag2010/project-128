
music_1="";
music_2="";
leftWristX=0;
leftWristY=0;
RightWristX=0;
RightWristY=0;
function preload(){
    music_1=loadSound("music.mp3");
    music_2=loadSound("music2.mp3");
}
function setup(){
        canvas=createCanvas(600,500)
        canvas.center();
    
        video=createCapture(VIDEO);
        video.hide();

        poseNet=ml5.poseNet(video, modelLoaded);
        poseNet.on("pose", getPoses);
}
function draw(){
    image(video, 0, 0, 600, 500);
}
function modelLoaded(){
    console.log("PoseNet is Initialized")
}
function getPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristY=results[0].pose.leftWrist.y;
        leftWristX=results[0].pose.leftWrist.x;
        console.log("leftWristY ="+leftWristY+"leftWristX ="+leftWristX);
        RightWristX=results[0].pose.rightWrist.x;
        RightWristY=results[0].pose.rightWrist.y;
        console.log("RightWristX ="+RightWristX+"RightWristY ="+RightWristY);
    }
}
