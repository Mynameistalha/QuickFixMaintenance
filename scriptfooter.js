// JavaScript for adding dynamic hover and 3D effect
document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('.site-footer');
    const innerContent = document.querySelector('.site-footer__inner');

    // Mouse movement effect for 3D depth
    footer.addEventListener('mousemove', function (e) {
        const { clientX: x, clientY: y } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        innerContent.style.transform = `rotateY(${deltaX * 10}deg) rotateX(${deltaY * -10}deg)`;
    });

    footer.addEventListener('mouseleave', function () {
        innerContent.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});
