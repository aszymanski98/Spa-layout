document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click', (e) => {
  document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});

document.getElementsByClassName('mobile-close')[0].addEventListener('click', (e) => {
  document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});

$('.multiple-items').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    }
  }, ]
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const contactMsg = document.getElementById('contact-message');
  let contactFields = document.getElementsByClassName('contact-field');
  let allFields = false;
  contactMsg.classList.remove('success');
  
  for (let index of contactFields) {
      if (index.value.trim() === '') {
          allFields = false;
          index.classList.add('error');
      } else {
          allFields = true;
          index.classList.remove('error');
      }
  }

  if (allFields) {
    contactMsg.classList.remove('error');
    contactMsg.classList.add('success');
    contactMsg.innerText = 'Your message has been sent!';
  } else {
      contactMsg.classList.add('error');
      contactMsg.innerText = 'Fill in the marked fields!';
  }
})

