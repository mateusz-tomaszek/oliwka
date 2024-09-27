        // Blokowanie Ctrl + A
        document.addEventListener('keydown', function (event) {
            if (event.ctrlKey && event.key === 'a') {
                event.preventDefault();
            }
        });

        // Blokowanie menu kontekstowego (prawy przycisk myszy)
        document.addEventListener('contextmenu', function (event) {
            event.preventDefault();
        });









function updateTime() {
    const p1 = document.getElementById("p1");
    p1.textContent = `test`;
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    p1.textContent = `${hours}:${minutes}`;
}

updateTime();
setInterval(updateTime, 5000); 









const buttons = document.querySelectorAll('.btn1');
    const actDiv = document.querySelector('.act');
    const actText = document.getElementById('actp');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            const name = button.getAttribute('data-name');
            actText.innerHTML = name; // Ustawienie nazwy w p
            actDiv.style.opacity = 1; // Pokazuje div
            actText.style.opacity = 1; // Pokazuje tekst w p
        });

        button.addEventListener('mouseout', () => {
            actDiv.style.opacity = 0; // Ukrywa div
            actText.style.opacity = 0; // Ukrywa tekst w p
        });
    });





    document.getElementById('avatar').addEventListener('mouseenter', function() {
        // Zanikanie elementu nothover1
        const nothover = document.getElementById('nothover1');
        const hover = document.getElementById('hover1');
        
        nothover.style.opacity = '0'; // Zmieniamy opacity na 0
        setTimeout(function() {
            nothover.style.display = 'none'; // Po zniknięciu ukrywamy element
            hover.style.display = 'flex'; // Pokazujemy drugi element
            setTimeout(function() {
                hover.style.opacity = '1'; // Po chwili zmieniamy opacity na 1, aby był widoczny
            }, 50); // Mała przerwa przed zmianą opacity
        }, 200); // Czekamy tyle, ile trwa transition (0.5s = 500ms)
    });

    document.getElementById('avatar').addEventListener('mouseleave', function() {
        // Zanikanie elementu hover1 i powrót do nothover1
        const nothover = document.getElementById('nothover1');
        const hover = document.getElementById('hover1');
        
        hover.style.opacity = '0'; // Zmieniamy opacity na 0 dla elementu hover1
        setTimeout(function() {
            hover.style.display = 'none'; // Po zniknięciu ukrywamy element
            nothover.style.display = 'flex'; // Pokazujemy ponownie nothover1
            setTimeout(function() {
                nothover.style.opacity = '1'; // Zmieniamy opacity na 1, aby był widoczny
            }, 50); // Mała przerwa przed zmianą opacity
        }, 200); // Czekamy tyle, ile trwa transition (0.5s = 500ms)
    });

