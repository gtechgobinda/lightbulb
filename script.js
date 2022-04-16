let btn = document.getElementById('toggleBtn');
document.addEventListener('click', toggleBulb);

function toggleBulb(e) {
    if(btn.textContent.includes('On')){
        bulb.src = "/light on.png"
        btn.textContent="Turn Off"
    }else{
        bulb.src = "/light off.png"
        btn.textContent="Turn On"
    }
    
}