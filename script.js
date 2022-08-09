document.getElementById("ndryshopermbajtje").onclick=function() {
  var x=document.getElementById("permbajteja");//Merr elementin
  x.innerHTML="You will stay at home spending time asleep!";//Ndrysho kontentin
  x.style.color="#ff0000"; //Ndrysho ngjyrën
}
mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; 
}
