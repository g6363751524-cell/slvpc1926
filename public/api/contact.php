<?php
header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method Not Allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON payload.']);
    exit;
}

$name = trim($data['name'] ?? '');
$phone = trim($data['phone'] ?? '');
$email = trim($data['email'] ?? '');
$propertyType = trim($data['propertyType'] ?? '');
$pestProblem = trim($data['pestProblem'] ?? '');
$serviceAddress = trim($data['serviceAddress'] ?? '');
$message = trim($data['message'] ?? '');
$preferredContact = trim($data['preferredContact'] ?? 'Phone Call');

$cleanPhone = preg_replace('/\D/', '', $phone);

// Server-side validation
if (empty($name)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please enter your full name.']);
    exit;
}

if (empty($cleanPhone) || strlen($cleanPhone) < 8) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please enter a valid phone number (at least 8-10 digits).']);
    exit;
}

if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please enter a valid email address.']);
    exit;
}

if (empty($propertyType)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please select your property type.']);
    exit;
}

if (empty($pestProblem)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please select the pest problem.']);
    exit;
}

if (empty($serviceAddress)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please provide your service locality or address in Bangalore.']);
    exit;
}

// Generate reference ID and record timestamp
$referenceId = 'SLV-' . rand(100000, 999999);
$timestamp = date('c');

// Secure server-side storage (protect directory)
$storageDir = __DIR__ . '/../../.data';
if (!is_dir($storageDir)) {
    @mkdir($storageDir, 0750, true);
}
$logFile = $storageDir . '/callbacks.jsonl';
$record = json_encode([
    'id' => $referenceId,
    'timestamp' => $timestamp,
    'name' => htmlspecialchars($name, ENT_QUOTES, 'UTF-8'),
    'phone' => $phone,
    'email' => htmlspecialchars($email, ENT_QUOTES, 'UTF-8'),
    'propertyType' => htmlspecialchars($propertyType, ENT_QUOTES, 'UTF-8'),
    'pestProblem' => htmlspecialchars($pestProblem, ENT_QUOTES, 'UTF-8'),
    'serviceAddress' => htmlspecialchars($serviceAddress, ENT_QUOTES, 'UTF-8'),
    'message' => htmlspecialchars($message, ENT_QUOTES, 'UTF-8'),
    'preferredContact' => htmlspecialchars($preferredContact, ENT_QUOTES, 'UTF-8')
]) . "\n";
@file_put_contents($logFile, $record, FILE_APPEND | LOCK_EX);

// Email notification
$to = 'contact@slvpestcontrol.com';
$subject = "New Callback Request: $pestProblem - $name ($referenceId)";
$emailBody = "New callback request submitted on slvpestcontrol.com:\n\n"
    . "Reference ID: $referenceId\n"
    . "Name: $name\n"
    . "Phone: $phone\n"
    . "Email: $email\n"
    . "Property Type: $propertyType\n"
    . "Pest Problem: $pestProblem\n"
    . "Service Address: $serviceAddress\n"
    . "Preferred Contact: $preferredContact\n"
    . "Notes: $message\n"
    . "Timestamp: $timestamp\n";
$headers = "From: web-inquiry@slvpestcontrol.com\r\n"
    . "Reply-To: " . (!empty($email) ? $email : 'contact@slvpestcontrol.com') . "\r\n"
    . "X-Mailer: PHP/" . phpversion();
@mail($to, $subject, $emailBody, $headers);

echo json_encode([
    'success' => true,
    'message' => 'Callback request registered successfully.',
    'referenceId' => $referenceId,
    'timestamp' => $timestamp
]);
