let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active'); 
};

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});

// JavaScript code to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent the form from submitting the usual way
   
   // Get the values from the form inputs
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const phone = document.getElementById('phone').value;
   const message = document.getElementById('message').value;

   // Create the data object to send
   const data = {
     name: name,
     email: email,
     phone: phone,
     message: message
   };

   // The URL of your Lambda function trigger
   const lambdaUrl = ' https://p082p0zfh4.execute-api.us-east-1.amazonaws.com/default/london-solutions-store-quotes';

   // Use fetch() to send a POST request
   console.log(data); // Add this before sending the fetch request
   fetch(lambdaUrl, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json' // Make sure the request is in JSON format
     },
     body: JSON.stringify(data) // Convert the data object to JSON
   })
   .then(response => {
     if (response.ok) {
       return response.json(); // Parse JSON response
     } else {
       throw new Error('Error sending message.');
     }
   })
   .then(data => {
     // Show an alert for successful submission
     alert('Message sent successfully!');
     
     // Optionally, clear the form fields after success
     document.getElementById('contactForm').reset();
   })
   .catch(error => {
     // Show an alert for errors
     alert('Error sending message. Please try again.');
   });
 });