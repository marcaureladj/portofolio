<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données JSON
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Extraire les données
    $name = htmlspecialchars($data['name']);
    $email = htmlspecialchars($data['email']);
    $message = htmlspecialchars($data['message']);
    
    // Destinataire
    $to = 'marcaureladj@gmail.com';
    
    // Sujet
    $subject = "Nouveau message de $name via le Portfolio";
    
    // Corps du message
    $mailContent = "Nom: $name\n";
    $mailContent .= "Email: $email\n\n";
    $mailContent .= "Message:\n$message";
    
    // En-têtes additionnels
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Envoi du mail
    $success = mail($to, $subject, $mailContent, $headers);
    
    if ($success) {
        echo json_encode([
            'success' => true,
            'message' => 'Votre message a été envoyé avec succès!'
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Une erreur est survenue lors de l\'envoi du message.'
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Méthode non autorisée'
    ]);
}
