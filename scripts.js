document.addEventListener('DOMContentLoaded', function() {
    // Update current time in milliseconds
    function updateCurrentTime() {
        const timeElement = document.querySelector('[data-testid="test-user-time"]');
        if (timeElement) {
            timeElement.textContent = Date.now().toString();
        }
    }

        updateCurrentTime();
})

