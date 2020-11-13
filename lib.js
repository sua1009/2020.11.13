function over2(obj){
    obj.src="./images/bogus.jpg";
}

function out2(obj){
    obj.src="./images/merry2.png";
}

// var img4 = document.getElementById("img4");
// img4.addEventListener("mouseover", function() {
//     img4.src = "./images/bogus.jpg"
// });

// img4.addEventListener("mouseout", function() {
//     img4.src= "./images/burger.jpg"
// });

var img4 = document.getElementById("img4");
img4.addEventListener("mouseover", over3);

img4.addEventListener("mouseout",out3);

function over3 () {
    img4.src = "./images/bogus.jpg"
}

function out3 () {
    img4.src= "./images/burger.jpg"
}