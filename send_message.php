<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Sanitize user input
  $name = htmlspecialchars($_POST['name']);
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $message = htmlspecialchars($_POST['message']);

  // Set up email content and headers
  $to = "abateisking@gmail.com"; 
  $subject = "New Message from Contact Form";
  $body = "You have received a new message from the contact form.\n\n" .
          "Name: $name\n" .
          "Email: $email\n\n" .
          "Message:\n$message";

  $headers = "From: $email" . "\r\n" .
            "Reply-To: $email" . "\r\n" .
            "Content-Type: text/plain; charset=UTF-8";

  // Use a function like wp_mail or a mail server to send the email
  if (wp_mail($to, $subject, $body, $headers)) {
    // Redirect back to the previous page
    header("Location: " . $_SERVER['HTTP_REFERER']); 
    exit; 
  } else {
    // Display an error message
    echo "Failed to send message. Please try again later.";
  }
} else {
  echo "Invalid request method.";
}
?>