var interval

function start(){
  var timeInput= parseInt(document.getElementById("timeInput").value)
  var h1 = document.getElementById("time")
  
  interval = setInterval(function(){
    if (timeInput == 0){
     sonds() 
      stop()
    }

    else if(timeInput <10){
        document.querySelector("#time").style.color="red"
    }
    else if(timeInput > 10){
        document.querySelector("#time").style.color="white"
    }
    
        h1.innerHTML=timeInput
    timeInput--
    
    
  },1000)
}

function stop(){
  clearInterval(interval)
  
}

function sonds(){
    setTimeout(function(){
        var audio = new Audio('audio/audio.mp3');
    audio.play()

    },1000)

}