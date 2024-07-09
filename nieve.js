
document.getElementById('musica-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    var audio = document.getElementById("myAudio");
    audio.currentTime = 0; 
    audio.play();


    document.querySelectorAll('.container_letra span').forEach(span => {
        span.style.display = 'none'; 
    });
});
var audio = document.getElementById("myAudio");

audio.addEventListener('timeupdate', function() {
    var currentTime = Math.floor(audio.currentTime);

    
    for (var i = 1; i <= 6; i++) {
        document.getElementById("parrafo" + i).style.display = 'none';
    }

    if (currentTime >= 0 && currentTime < 32) {
        document.getElementById("parrafo1").style.display = 'block';
    } else if (currentTime >= 32 && currentTime < 44) {
        document.getElementById("parrafo2").style.display = 'block';
    } else if (currentTime >= 44 && currentTime < 64) {
        document.getElementById("parrafo3").style.display = 'block';
    } else if (currentTime >= 64 && currentTime < 70) {
        document.getElementById("parrafo4").style.display = 'block';
    } else if (currentTime >= 70 && currentTime < 83) {
        document.getElementById("parrafo5").style.display = 'block';
    } else if (currentTime >= 83 && currentTime < 110) {
        document.getElementById("parrafo6").style.display = 'block';
    }
       

   
    for (var j = 1; j <= 6; j++) {
        if (currentTime >= (j - 1) * 10 && currentTime < j * 10) {
            document.getElementById("parrafo" + j).classList.add('highlight');
        } else {
            document.getElementById("parrafo" + j).classList.remove('highlight');
        }
    }
});
const body = document.querySelector('body')

const crearNieve = () => {


    let copo = document.createElement("i")
    let x = innerWidth * Math.random() - 36;
    let size = (Math.random() * 8) + 2
    let z = Math.round(Math.random())
    let delay = Math.random() * 4
    let anima = (Math.random() * 9) + 4

    copo.style.left = x + "px"
    copo.style.width = size + "px"
    copo.style.height = size + "px"
    copo.style.zIndex = z
    copo.style.animationDelay = delay + "s"
    copo.style.animationDuration = anima + "s"

    body.appendChild(copo)

    setTimeout(() => {
        copo.remove()
    }, anima * 900)

}

setInterval(crearNieve, 100)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var target = this.getAttribute('data-target');
        window.location.href = target;
    });
});

