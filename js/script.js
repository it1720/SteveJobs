// načtení header
window.addEventListener('load', function () {
  const header = document.getElementById('header');
  header.classList.add('fade');
  // velikost okna pro iframe
  var iframe = document.getElementById('video');
  var width = '300px';
  var height = '360px';
  if (media.matches) {
    iframe.style.width = width;
    iframe.style.height = height;
  } else {
    iframe.style.width = '1080px';
    iframe.style.height = '720px';
  }
});

// když se zmeni sirka stranky, zmenit velikost okna pro iframe
function changeVid(media) {
  var iframe = document.getElementById('video');
  var width = '300px';
  var height = '360px';
  if (media.matches) {
    iframe.style.width = width;
    iframe.style.height = height;
  } else {
    iframe.style.width = '1080px';
    iframe.style.height = '720px';
  }
}
const media = window.matchMedia("(max-width: 767px)");
media.addListener(changeVid);

// header - podle Y schova nebo ukaze okno
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (window.scrollY >= 0 && window.scrollY < 750) {
    header.classList.add('fade');
  }
  if (window.scrollY > 750) {
    header.classList.remove('fade');
  }
});

// section - podle Y schova nebo ukaze okno
window.addEventListener('scroll', function () {
  const education = document.getElementById('education');
  if (window.scrollY > 750) {
    education.classList.add('fade');
  }
  if (window.scrollY < 750 || window.scrollY > 1600) {
    education.classList.remove('fade');
  }
});

// projects - podle Y schova nebo ukaze okno
// pro ruzne projekty, neschovava celou sekci
window.addEventListener('scroll', function () {
  const projects = document.getElementById('projects');
  const first_child = projects.children[1];
  const h = projects.children[0];
  const project = document.getElementsByClassName('project-content');
  if (window.scrollY > 1600) {
    project[0].classList.add('fade');
    h.classList.add('fade');
  }
  if (window.scrollY < 1600 || window.scrollY > 2200) {
    project[0].classList.remove('fade');
    h.classList.remove('fade');
  }
  if (window.scrollY > 2200) {
    project[1].classList.add('fade');
  }
  if (window.scrollY < 2200 || window.scrollY > 3200) {
    project[1].classList.remove('fade');
  }
  if (window.scrollY > 3200) {
    project[2].classList.add('fade');
  }
  if (window.scrollY < 3200 || window.scrollY > 4000) {
    project[2].classList.remove('fade');
  }
});

// memorial - podle Y schova nebo ukaze okno
window.addEventListener('scroll', function () {
  const education = document.getElementById('memorial');
  if (window.scrollY > 4000) {
    education.classList.add('fade');
  }
  if (window.scrollY > 5000 || window.scrollY < 4000) {
    education.classList.remove('fade');
  }
});

// contacs-form - podle Y schova nebo ukaze okno
window.addEventListener('scroll', function () {
  const education = document.getElementById('contact-form');
  if (window.scrollY > 5000) {
    education.classList.add('fade');
  }
  else {
    education.classList.remove('fade');
  }
});


// validace formulare pri stlaceni tlacitka submit
var form = document.getElementById('form');
form.addEventListener('submit', function (event) {
  // Zabraneni refresh stranky pri submit
  event.preventDefault();
  var firstname = document.getElementById('firstname');
  var lastname = document.getElementById('lastname');
  var email = document.getElementById('email');
  var telephone = document.getElementById('telnumber');
  var text = document.getElementById('message');
  var formmessage = document.getElementById('form-message');
  var error = "Red columns cannot be empty!";
  var success = "Your message has been sent!";
  // kontrola prazdnych hodnot
  if (firstname.value == "") {
    firstname.classList.add("bad-form");
    formmessage.classList.add("form-message");
    formmessage.innerText = error;
  }
  else {
    firstname.classList.remove("bad-form");
  }
  if (lastname.value == "") {
    lastname.classList.add("bad-form");
    formmessage.classList.add("form-message");
    formmessage.innerText = error;
  } else {
    lastname.classList.remove("bad-form");
  }
  if (email.value == "") {
    email.classList.add("bad-form");
    formmessage.classList.add("form-message");
    formmessage.innerText = error;
  }
  else {
    email.classList.remove("bad-form");
  }
  if (telephone.value == "") {
    telephone.classList.add("bad-form");
    formmessage.classList.add("form-message");
    formmessage.innerText = error;
  } else {
    telephone.classList.remove("bad-form");
  }
  if (text.value == "") {
    text.classList.add("bad-form");
    formmessage.classList.add("form-message");
    formmessage.innerText = error;
  } else {
    text.classList.remove("bad-form");
  }
  // Byly zadany vsechny hodnoty
  if (firstname.value != "" && lastname.value != "" && email.value != "" && telephone.value != "" && text.value != "") {
    // Odstraneni cerveneho ramecku
    if (formmessage.innerText == error) {
      formmessage.classList.remove("form-message");
      setTimeout(function () {
        formmessage.classList.add("form-message");
        formmessage.innerText = success;
        // Po 1s se objevi nova zprava
      }, 1000);
    }
    else {
      formmessage.classList.add("form-message");
      formmessage.innerText = success;
    }
    // Vynulovani hodnot
    firstname.value = "";
    lastname.value = "";
    email.value = "";
    telephone.value = "";
    text.value = "";
    // Po 3s zmizi zprava
    setTimeout(function () {
      formmessage.classList.remove("form-message");
    }, 3000);
  }
});