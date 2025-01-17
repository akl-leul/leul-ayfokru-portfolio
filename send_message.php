<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Sanitize user input to prevent XSS attacks
  $name = htmlspecialchars($_POST['name']);
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $message = htmlspecialchars($_POST['message']);

  // Set recipient email address
  $to = "abateisking@gmail.com";

  // Set email subject and body
  $subject = "New Message from Contact Form";
  $body = "You have received a new message from the contact form.\n\n" .
          "Name: $name\n" .
          "Email: $email\n\n" .
          "Message:\n$message";

  // Set email headers
  $headers = "From: $email \r\n" .
            "Reply-To: $email \r\n" .
            "Content-Type: text/plain; charset=UTF-8";

  // Send email using the mail function (configure your server if needed)
  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully!"; // Display success message on form submission
  } else {
    echo "Failed to send message. Please try again later."; // Display error message
  }
}
?>