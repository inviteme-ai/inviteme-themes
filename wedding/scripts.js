
// send RSVP form data
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
   event.preventDefault();

    // Extract the dynamic 'name' from the current URL
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
fetch(`http://localhost:3000/wedding-rsvp/${name}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
})
  .then((response) => response.json())
  .then((data) => {
    // Handle the response from the server
    if (data.success) {
      alert("Form submitted successfully!");
    } else {
      alert("Error submitting form.");
    }
  })
  .catch((error) => {
    alert("There was an error submitting the form. Please try again.");
    console.error(error);
  });
  });

  function pathName(){
    // Extract subdomain from URL and set it in the hidden form field
    const urlParts = window.location.pathname.split("/");
    const subdomain = urlParts[1]; // 'yididiya' in this case
    document.getElementById("subdomain").value = subdomain;
    console.log(subdomain);
  }

  pathName();