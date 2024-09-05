const button = document.getElementById("startBtn");

button.addEventListener("click", function () {
  alert("The button clicked!!");
});

// send RSVP form data

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Extract the dynamic 'name' from the current URL
    const path = window.location.pathname;
    const name = path.split("/")[1];

    const response = document.querySelector(
      'input[name="response"]:checked'
    ).value;

    const formData = {
      Name: document.getElementById("name").value,
      NumofGuests: document.getElementById("no").value,
      Email: document.getElementById("email").value,
      Phone: document.getElementById("phone").value,
      dietary: document.getElementById("dietary").value,
      accomodation: document.getElementById("accomodation").value,
      Message: document.getElementById("message").value,
      response: response,
    };

    // Post to the dynamic wedding-rsvp route
    axios
      .post(`/wedding-rsvp/${name}`, formData)
      .then(function (response) {
        alert("Form submitted successfully!"); 
      })
      .catch(function (error) {
        alert("There was an error submitting the form. Please try again."); 
      });
  });
