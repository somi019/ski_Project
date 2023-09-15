
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}




function startTimer(){
    var counter = 20;
var ind=0;
var g=0;
var k=0;
var niz1=[1,1,1,1,1,1,1,1,1];
var niz2=[2,2,2,2,2,2,2,2,2];

setInterval( function(){
    
    counter--;
    
    if( counter >= 0 ){
        id = document.getElementById("count");
        id.innerHTML = counter;
    }

    if( counter === 0 ){
        var images = document.querySelectorAll('#text div');
images.forEach(element => {
    
    if(element.id.length==5){niz1[g]=element.id.charAt(4)
        console.log(niz1[g]);
        g++;    
    }
        else {
            niz2[k]=element.id.charAt(3)
        console.log(niz2[k]);
        k++;
        }   
});

if(niz1.toString() == niz2.toString()){
        alert("BRAVO MAJSTORE");
    }
      else  {alert("NIJE DOBRO MAJSTORE!");}
    }
}, 1000);

}