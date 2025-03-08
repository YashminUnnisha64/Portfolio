window.onload = function () {
    emailjs.init("1XHvLez5nzqw2Ykv9"); // Your actual EmailJS Public Key
};

function sendemail(event) {
    event.preventDefault(); // Prevent form from refreshing

    // Get form input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phonenumber = document.getElementById("PhoneNum").value.trim();
    let message = document.getElementById("Message").value.trim();

    // Ensure all required fields are filled
    if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        return;
    }

    // Create the template parameters object
    let templateParams = {
        to_name: "YashminUnnisha", // Receiver's name
        from_name: name, // Sender's name
        from_email: email, // Sender's email
        from_phonenumber: phonenumber, // Sender's phone number
        message: message // Message
    };

    // Send email using EmailJS
    emailjs.send("service_76ighpc", "template_80n2717", templateParams)
        .then(function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully!");
            document.getElementById("contact-Form").reset(); // Reset form after sending
        })
        .catch(function (error) {
            console.error("FAILED...", error);
            alert("Failed to send message. Please try again.");
        });
}

// Attach event listener to form submission
document.getElementById("contact-Form").addEventListener("submit", sendemail);
