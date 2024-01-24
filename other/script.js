
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





function sprawdzHaslo() {
  var haslo = prompt("Wprowadź hasło:");

  if (haslo === "130823") {
      wyswietlZawartosc();
  } else {
      alert("Błędne hasło. Spróbuj ponownie.");
      sprawdzHaslo();
  }
}

function wyswietlZawartosc() {
  document.getElementById("haslo").style.display = "block";
  hideFullscreen();
}