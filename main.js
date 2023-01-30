filter_color=""
function setup(){
    canvas= createCanvas(640,480)
    canvas.position(100,250)
    video= createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video, 0, 0, 640, 480)
tint(filter_color)
}
function apply_filter(){
filter_color=document.getElementById("filter_color").value;
}
function take_snapshot() {
save("Mypicture.png")
}