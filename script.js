
var btn = document.getElementById("btn")
var photo = document.getElementById("d2")
var photo2 = document.getElementById("d3")
var photo3 = document.getElementById("d4")
var photo4 = document.getElementById("br")
var photo5 = document.getElementById("lb")
var b4 = document.getElementById("b4");
var tri = document.getElementById("tri");
var tria = document.getElementById("tria");
var one = document.getElementById("one");
var body = document.getElementById("body");
var sound = document.getElementById("sound")

var value = 0 

btn.addEventListener("click" ,function() {
    if(value!==0){
        sound.play();
        setTimeout(() => {
            photo.style.transform = "rotatey(-80deg)"
    photo.style.transitionDuration= "0.5s"

    photo2.style.transform = "rotatey(-80deg)"
    photo2.style.transitionDuration= "0.5s"
    btn.style.opacity=0 
    b4.style.opacity=1 
    
    b4.style.transitionDuration="1.3s"
    b5.style.height="1236px"
    b5.style.marginTop="-248px"
    b5.style.transitionDuration="1s"
    b5.style.opacity=1
    body.style.transform="scale(3.2)"
    body.style.transitionDuration="1s"   
    
    // sound1.duration=1s
       }, 1000);
       one.style.opacity=1
    setTimeout(() => {
        one.style.opacity=0
    }, 950);

    setTimeout(() => {
        photo3.style.opacity=0 
    }, 700);
    
    setTimeout(() => {
         tri.style.height="50px"
         tri.style.width="3000px"
         tri.style.opacity=1
         tri.style.transitionDuration="1.3s"
         tria.style.width="3000px"
         tria.style.height="50px"
         tria.style.opacity=1
         tria.style.transitionDuration="1.3s"
         trib.style.width="3000px"
         trib.style.height="50px"
         trib.style.opacity=1
         trib.style.transitionDuration="1.3s"
         tric.style.width="3000px"
         tric.style.height="50px"
         tric.style.opacity=1
         tric.style.transitionDuration="1.3s"
    }, 1100);

    photo3.style.transform = "rotate(360deg)"
    photo3.style.transitionDuration="1s"
    btn.style.opacity=.3
    console.log(value)
    
    value = 0
    }

    else{    
        btn.style.color="Red"

    photo.style.transform = "rotatey(0deg)"
    photo.style.transitionDuration="0.5s"
    photo.style.transitionDelay=".1s"

    photo2.style.transform = "rotatey(0deg)"
    photo2.style.transitionDuration="0.5s"
    photo2.style.transitionDelay=".1s"
    one.style.opacity=0

    photo3.style.transform = "rotate(0deg)"
    photo3.style.transitionDuration="1s"
    photo3.style.opacity=1
    b4.style.opacity=0
    tri.style.opacity=0
    tri.style.height="10px"
    tri.style.width="500px"
    tria.style.width="500px"
    tria.style.opacity=0
    tria.style.height="10px"
    trib.style.width="500px"
    trib.style.opacity=0
    trib.style.height="10px"
    tric.style.width="500px"
    tric.style.opacity=0
    tric.style.height="10px"
    b5.style.height="900px"
    b5.style.marginTop="-128px"
    b5.style.opacity=0
    body.style.transform="scale(1.0)"
        value = 1
    }

})


// btn.onclick = function() {
//     var x = document.getElementById('one');
   
//     if (x.style.display !== 'none') {
//         setTimeout(() => {
//             x.style.display = 'block';
           
            
//         }, 800);

     
//     }
//     else {
//         setTimeout(() => {
//             x.style.display = 'none';
            
//         }, 900);
       
//     }
// };





// btn.onclick = function() {
//     var x = document.getElementById('one');
//     if (x.style.display !== 'none') {
//         setTimeout(() => {
//             x.style.display = 'none';
//         }, 1200);
            
      
       
//     }
//     else {
//         setTimeout(() => {
//             x.style.display = 'block';
//     }, 500);
//     }
// };