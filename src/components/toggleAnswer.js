export function initializeToggleButtons() {
    const toggleButtons = document.querySelectorAll('.toggle-answer');

    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const answer = button.nextElementSibling;
            answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
        });
    });
}
