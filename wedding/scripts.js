const button = document.getElementById("startBtn");

button.addEventListener("click", function () {
  alert("The button clicked!!");
});

// send RSVP form data

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Extract the dynamic 'name' from the current URL
    const path = window.location.pathname;
    const name = path.split("/")[1]; // This assumes the URL structure is rsvp.inviteme.ai/name

    const formData = {
      Name: document.getElementById("name").value,
      NumofGuests: document.getElementById("no").value,
      Email: document.getElementById("email").value,
      Phone: document.getElementById("phone").value,
      dietary: document.getElementById("dietary").value,
      accomodation: document.getElementById("accomodation").value,
      Message: document.getElementById("message").value,
    };

    // Post to the dynamic wedding-rsvp route
    axios
      .post(`/wedding-rsvp/${name}`, formData)
      .then(function (response) {
        alert("Form submitted successfully!"); // Success alert
      })
      .catch(function (error) {
        alert("There was an error submitting the form. Please try again."); // Error alert
      });
  });
