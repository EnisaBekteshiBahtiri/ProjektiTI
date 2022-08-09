var i = 0; // pika fillestare
var images = []; // vargu i img

images[0] = 'images/discover_img/g-1.jpg';
images[1] = 'images/discover_img/g-2.jpg';
images[2] = 'images/discover_img/g-3.jpg';
images[3] = 'images/discover_img/g-4.jpg';
images[4] = 'images/discover_img/g-5.jpg';
images[5] = 'images/discover_img/p-3.jpg';
images[6] = 'images/discover_img/p-5.jpg';

// nderrimi i img
function changeImg() {
  document.slide.src = images[i];

  // kushi if per ndryshim
  if (i < images.length - 1) {
    i++;
  } else {
    // nese nuk plotesohet te kthehet prap ne 0
    i = 0;
  }

  // te kryhet funksioni X-here per kohen e dhene
  setTimeout('changeImg()', 3000);
}

// te kryhet funksioni athere kur te hapet faqja
window.onload = changeImg;
