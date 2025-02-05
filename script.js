let messageIndex = 0;
function handleYesClick() {
    window.location.href = "yes_page.html";
}
function moveButton() {
    let noButton = document.querySelector('.no-button');
    let yesButton = document.querySelector('.yes-button');
    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    let button = document.getElementById("noButton");
            let maxX = window.innerWidth - button.offsetWidth - 20; // Prevent going off-screen
            let maxY = window.innerHeight - button.offsetHeight - 20;
            
            let newX = Math.random() * maxX;
            let newY = Math.random() * maxY;

            button.style.left = `${newX}px`;
            button.style.top = `${newY}px`;
}