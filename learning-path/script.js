document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            // Remove active class from all panels
            removeActiveClasses();
            
            // Add active class to clicked panel
            panel.classList.add('active');
        });
    });

    function removeActiveClasses() {
        panels.forEach(panel => {
            panel.classList.remove('active');
        });
    }
});
