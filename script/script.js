// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function () {
    const top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

//scripts form
const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#mail')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:relizondo2911@hotmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('msg')}`)
    $buttonMailto.click()
}

//scrooll reveal
ScrollReveal().reveal('.bgimage');
ScrollReveal().reveal('.card-body', { delay: 500 });
ScrollReveal().reveal('.card', { delay: 500 });


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
