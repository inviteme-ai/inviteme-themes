const button = document.getElementById("startBtn");

button.addEventListener("click", function () {
  alert("The button clicked!!");
});

// send RSVP form data

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const formData = {
      Name: document.getElementById("name").value,
      NumofGuests: document.getElementById("no").value,
      Email: document.getElementById("email").value,
      Phone: document.getElementById("phone").value,
      dietary: document.getElementById("dietary").value,
      accomodation: document.getElementById("accomodation").value,
      Message: document.getElementById("message").value,
    };

    axios
      .post("/wedding-rsvp/<%= customer.OrderId %>", formData)
      .then(function (response) {
        console.log("Form submitted successfully", response);
        alert("Form submitted successfully!");
      })
      .catch(function (error) {
        console.error("There was an error submitting the form", error);
        alert("There was an error submitting the form. Please try again.");
      });
  });
