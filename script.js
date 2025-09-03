// Initialize EmailJS
(function(){
  emailjs.init("PFogrIKjE82zlxh6w"); // Your Public Key
})();

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  emailjs.sendForm("service_rg9nsx7", "template_8k9u1qu", this)
    .then(() => { alert("Message sent successfully!"); }, 
          (err) => { alert("Failed to send message: " + JSON.stringify(err)); });
});
