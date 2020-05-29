function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
	}

function startTimer() {
    setInterval(displayNextImage, 1000);
          }

var images = [], x = -1;
    images[0] = "images/home2.png";
    images[1] = "images/home3.png";
    images[2] = "images/home4.png";