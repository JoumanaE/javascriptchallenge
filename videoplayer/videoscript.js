/* Get our elements */ 

const player = document.querySelecto('.player'); 
const video = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled'); 
const toggle = player.querySelector('.toggle'); 
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider'); 

/* build our functions*/ 

function togglePlay(){
    const method = video.paused ? 'play': 'pause';
    video[method]();  
    }

    function updateButton() {
        const icon = this.pause ? '►' : '❚ ❚';
        console.log(icon); 
        toggle.textContent = icon; 
       
    }

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton); 

toggle.addEventListener('click', togglePlay); 

