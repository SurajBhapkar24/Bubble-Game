var Timer = 60;
var hitval = 0;
var score = 0;
 function makeBubble (){
    var clutter = "";
    for( var i=1; i<=152; i++){
        var rn = Math.floor(Math.random()*10)
        clutter += ` <div class="bubble">${rn}</div>`;

    }
    document.querySelector("#pbtm").innerHTML = clutter;
 
 }

 
 function getNewhit(){
    hitval = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitval;

 }

 
 function runTimer (){
    var timerint = setInterval (function(){
        if( Timer > 0){
            Timer--;
            document.querySelector("#Timerval").textContent = Timer;
        }else {
        clearInterval ( timerint);
        document.querySelector("#pbtm").innerHTML = `<h1>Game over</h1>`
        }
    },1000);
}
 
function increaseScore () {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum===hitval){
        increaseScore();
        makeBubble();
        getNewhit();
    }
});



   
getNewhit();
runTimer();
 makeBubble ();
 increaseScore ();