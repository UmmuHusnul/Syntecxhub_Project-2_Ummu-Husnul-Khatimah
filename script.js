// ===== Smooth Scroll (custom) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Navbar Scroll Effect =====
const nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (!nav) return;

    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#111';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        nav.style.backgroundColor = '#1a1a1a';
        nav.style.boxShadow = 'none';
    }
});

// ===== Mobile Menu =====
const side = document.getElementById("sidemenu");

function openmenu() {
    side.style.right = "0";
}

function closemenu() {
    side.style.right = "-200px";
}

// ===== Contact Form (Google Sheet) =====
const scriptURL = 'https://script.google.com/macros/s/AKfycbzcY-DXr4rabj5VedDytz-c0tBHTKXT7q33CCC27p_KbkX8f64wYyTRd-iQ2cTA1W4c/exec';
const form = document.forms['submit-google-sheet'];
const msg = document.getElementById("msg");

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();

        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form),
            mode: 'no-cors'
        });

        msg.innerHTML = "Message sent successfully!";
        msg.style.color = "#4caf50";

        setTimeout(() => {
            msg.innerHTML = "";
        }, 4000);

        form.reset();
    });
}
