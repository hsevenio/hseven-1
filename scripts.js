const form = document.querySelector('.form');
const hider = document.querySelector('.hider');

var toggleForm = function() {
    // if (form.style.display === 'none') {
    //     form.style.display = 'block';
    //     gsap.to(form, {opacity:'100%', top: '55%', duration: 0.4});
    //     hider.style.display = 'block';
    // } else {
    //     gsap.from(form, {opacity:'100%', duration: 0.3});
    //     setTimeout(function() {
    //         form.style.top = '99%';
    //         form.style.display = 'none';
    //         hider.style.display = 'none';
    //     }, 1000);
        
    // }

    form.classList.toggle('is-open');
    hider.classList.toggle('is-open')
}

const button = document.querySelector('.button');
var toggleBlue = function() {
    var tl = new gsap.timeline();
    tl.to(button, {duration: 0.2, borderTopColor: '#0077FF'}, "-=.0.3")
      .to(button, {duration: 0.2, borderLeftColor: '#0077FF'}, "-=0.3")
      .to(button, {duration: 0.2, borderRightColor: '#0077FF'}, "-=0.3")
      .to(button, {duration: 0.2, borderBottomColor: '#0077FF'}, "-=0.3")
      .to(button, {backgroundColor: '#00234B', duration: 0.3}, "-=0.3")
      .to(button, {duration: 0.2, borderTopColor: 'white'}, "+=0.5")
      .to(button, {backgroundColor: 'black', duration: 0.3}, "-=0.3")
      .to(button, {duration: 0.2, borderRightColor: 'white'}, "-=0.3")
      .to(button, {duration: 0.2, borderLeftColor: 'white'}, "-=0.3")
      .to(button, {duration: 0.2, borderBottomColor: 'white'}, "-=0.3");
}

const contacts = document.querySelector('.contacts-popup');
const hiderc = document.querySelector('.hiderc');
var toggleContacts = function() {
    // if (contacts.style.display === 'none') {
    //     contacts.style.display = 'block';
    //     gsap.to(contacts, {opacity:'100%', top: '55%', duration: 0.4});
    //     hiderc.style.display = 'block';
    // } else {
    //     gsap.from(contacts, {opacity:'100%', duration: 0.3});
    //     setTimeout(function() {
    //         contacts.style.top = '99%';
    //         contacts.style.display = 'none';
    //         hiderc.style.display = 'none';
    //     }, 1000);
        
    // }
    contacts.classList.toggle('is-open');
    hiderc.classList.toggle('is-open')
}