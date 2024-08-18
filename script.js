document.getElementById('download-cv-btn').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = './AhsanurResume.pdf';
    link.download = 'AhsanurResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.getElementById('mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('showing');
});

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        const navLinks = document.querySelector('nav ul');
        if (navLinks.classList.contains('showing')) {
            navLinks.classList.remove('showing');
        }
    });
});

