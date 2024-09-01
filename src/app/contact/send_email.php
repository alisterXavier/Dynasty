<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    // Email information
    $to = "xavieralister13@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission from " . $name;

    // Compose email body
    $body = "You have received a new message from your website contact form.\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    // Set headers
    $headers = "From: no-reply@yourdomain.com\r\n"; // Replace with a valid "From" address on your domain
    $headers .= "Reply-To: $email\r\n"; // Set the user's email as the "Reply-To" address
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "There was an error sending your message. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>
