const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

// opens the nav and closes it
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
});


// close the sliding menu after selecting service 
navLinks.forEach(link => {
    link.addEventListener('click', ()=> {
        document.body.classList.remove('nav-open');
    })
})
