let sec = 60;
    let min = 4;
    const simple_fn = function() {
        const seconds = document.getElementById('sec');
        seconds.innerText = `${sec}s`;
        sec -= 1;
        const minutes = document.getElementById('min');
        minutes.innerText = `${min}m`;

        if (sec < 0) {
            min -= 1;
            if (min < 0) {
                clearInterval(interval_id);
            }
            sec = 5;
            
        }
    }
    const interval_id = setInterval(simple_fn, 1000);
    const stop = function() {
        clearInterval(interval_id);
    }
const stop_btn = document.getElementById('stop');
stop_btn.addEventListener('click', stop);

        


        