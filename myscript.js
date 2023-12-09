function refreshPage(){
    window.location.reload();
} 

let images = document.querySelectorAll('.mySlides');
let currentIndex = 0;

function nextSlide() {
  if (currentIndex < images.length) {
    images[currentIndex].style.display = 'none';
    currentIndex++;
  }
}

let link = document.querySelectorAll('.myLinks')
let currentNum = 0;

function nextLink() {
  if (currentNum < link.length) {
    link[currentNum].style.display = 'none';
    currentNum++;
  }
}




      

let sites = document.querySelectorAll('.theLis')
let num = 0;

function removeLink() {
  if (num < sites.length) {
    sites[num].style.display = 'none';
    num++;
  }
}



