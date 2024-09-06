document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const path = window.location.pathname;
    const name = path.split("/")[1]; // Extracts 'yididiya' from URL

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
      subdomain: name, // Pass the extracted name as subdomain
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/wedding-rsvp", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        alert("Form submitted successfully!");
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    };
    xhr.onerror = function () {
      alert("There was an error submitting the form. Please try again.");
    };
    xhr.send(JSON.stringify(formData));
  });
