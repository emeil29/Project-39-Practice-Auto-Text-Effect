const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = "We love Programming"
let idx = 1
let speed = 500

writeText ()
function writeText () {
    textEl.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length){
        idx = 1
    }
 setTimeout(writeText, speed)  
}
speedEl.addEventListener('input', (e) => speed = 500/ e.target.value)
