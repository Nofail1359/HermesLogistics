window.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger'),
        btnMob = document.getElementById('req');



    btnMob.addEventListener('click', () => {
        hamburger.classList.remove('hamburger_active');
        wrapper.classList.remove('wrapper_active');
    })

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        wrapper.classList.toggle('wrapper_active');
        toggleHidden()
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            wrapper.classList.toggle('wrapper_active');
            toggleHidden()
        })
    })



})






function toggleHidden() {
    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = ''
    } else {
        document.body.style.overflow = 'hidden'
    }
}

