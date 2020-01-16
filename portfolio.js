const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const body = document.getElementsByTagName("body")[0];
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    body.style.overflow = 'hidden';
};

span.onclick = function() {
    modal.style.display = "none";
    body.style.removeProperty('overflow');
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        body.style.removeProperty('overflow');
    }
};


const nav = document.querySelector('.top-bottom-button');
const skills = document.getElementById('skills');

function checkPosition() {
    let skillsY = skills.offsetTop;
    let windowY = window.scrollY;
    console.log('skillsY', skillsY);
    console.log('windowY', windowY);
    if (windowY < skillsY) {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
}

window.addEventListener('scroll', checkPosition);
