<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
    $email = htmlspecialchars(strip_tags(trim($_POST['email'])));
    $phone = htmlspecialchars(strip_tags(trim($_POST['phone'])));
    $message = htmlspecialchars(strip_tags(trim($_POST['message'])));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email.";
        exit;
    }

    if (empty($name) || empty($message) || empty($email)) {
        echo "Name, email, and a brief message are required.";
        exit;
    }

    $to = "recipient@example.com"; 
    $subject = "New Contact Form Submission from $name";

    $headers = "From: $name <$email>" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $body = "You have received a new message from $name via the contact form - Creative Craftsmanship.\n\n".
            "Name: $name\n".
            "Email: $email\n".
            "Phone: $phone\n".
            "Message:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your message has been submitted. We look forward to speaking with you!";
    } else {
        echo "Oops! Looks like we couldn't send your message. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>