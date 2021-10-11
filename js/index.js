const $video = document.querySelector("#M_video")
const $play = document.querySelector("#play")
const $pause = document.querySelector("#pause")
const $forward = document.querySelector("#forward")
const $backward = document.querySelector("#backward")

$play.addEventListener("click", handlePlay);
function handlePlay() {
  $video.play()
  $play.hidden = true
  $pause.hidden = false
  console.log("Play");
}

$pause.addEventListener("click", handlePause)
function handlePause() {
  $video.pause()
  $play.hidden = false
  $pause.hidden = true
  console.log("pause");
}

$backward.addEventListener('click', handlebackward)
function handlebackward(){
  $video.currentTime -= 10
  console.log($video.currentTime);
}



$forward.addEventListener('click', handleforward)
function handleforward(){
  $video.currentTime += 10
  console.log($video.currentTime);
}
const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleloaded)
$video.addEventListener('timeupdate', handleTimeUpdate)
if($video.readyState >=2){
  handleloaded()
}
function handleloaded(){
  console.log('metadata')
  $progress.max = $video.duration
}

function handleTimeUpdate(){
  $progress.value = $video.currentTime
  console.log('timeLord');
}

$progress.addEventListener('input',handleInput)
function handleInput(){
  $video.currentTime = $progress.value
}