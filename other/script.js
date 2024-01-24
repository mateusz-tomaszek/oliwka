
function showFullscreen(imageSrc) {
  var fullscreenContainer = document.getElementById('fullscreenContainer');
  var fullscreenImage = document.getElementById('fullscreenImage');
  
  fullscreenImage.src = imageSrc;
  fullscreenContainer.style.display = 'block';
}

function hideFullscreen() {
  var fullscreenContainer = document.getElementById('fullscreenContainer');
  
  fullscreenContainer.style.display = 'none';
}
