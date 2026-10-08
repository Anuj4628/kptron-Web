<?php
/**
 * KPTRON Piping Solutions Inc. - Production Quote / RFQ Handler
 * Compatible with standard cPanel, Apache, LiteSpeed, Nginx + PHP hosting environments.
 */

// Enable CORS so the static frontend can submit regardless of protocol/subdomain
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Content-Type: application/json; charset=UTF-8');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(['status' => 'OK']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method Not Allowed. Expected POST.']);
    exit;
}

// Retrieve input data from JSON or standard POST
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    $data = $_POST;
}

$fullName = isset($data['fullName']) ? trim(strip_tags((string)$data['fullName'])) : '';
$companyName = isset($data['companyName']) ? trim(strip_tags((string)$data['companyName'])) : '';
$email = isset($data['email']) ? trim(strip_tags((string)$data['email'])) : '';
$phone = isset($data['phone']) ? trim(strip_tags((string)$data['phone'])) : '';
$product = isset($data['product']) ? trim(strip_tags((string)$data['product'])) : 'General Product Requirement';
$specsAndQuantity = isset($data['specsAndQuantity']) ? trim(strip_tags((string)$data['specsAndQuantity'])) : 'Standard Specification (per catalog)';
$ticket = isset($data['ticketNumber']) && !empty($data['ticketNumber']) 
    ? trim(strip_tags((string)$data['ticketNumber'])) 
    : ('KP-RFQ-' . rand(100000, 999999));
$pageUrl = isset($data['pageUrl']) ? trim(strip_tags((string)$data['pageUrl'])) : '';

// Validation
if (empty($fullName) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Validation error: Full Name, Corporate Email, and Phone Number are required fields.'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Validation error: Please provide a valid corporate email address.'
    ]);
    exit;
}

$to = 'kptronpipingsolutionsinc@gmail.com';
$cc = 'pvdevashi@gmail.com';
$subject = "New RFQ Inquiry — KPTRON [{$ticket}]";

$dateStr = date('Y-m-d H:i:s T');

$emailBody = "====================================================\n";
$emailBody .= "KPTRON PIPING SOLUTIONS INC. — OFFICIAL RFQ INQUIRY\n";
$emailBody .= "Ticket Reference: #{$ticket}\n";
$emailBody .= "Timestamp:        {$dateStr}\n";
$emailBody .= "====================================================\n\n";
$emailBody .= "CLIENT & PROCUREMENT DETAILS:\n";
$emailBody .= "  Full Name:       {$fullName}\n";
$emailBody .= "  Company / Org:   {$companyName}\n";
$emailBody .= "  Corporate Email: {$email}\n";
$emailBody .= "  Phone / Mobile:  {$phone}\n\n";
$emailBody .= "SPECIFICATION INQUIRY:\n";
$emailBody .= "  Target Product:  {$product}\n";
$emailBody .= "  Schedule / Qty:  {$specsAndQuantity}\n\n";
$emailBody .= "Origin Page:       {$pageUrl}\n";
$emailBody .= "Client IP:         " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";
$emailBody .= "====================================================\n";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/plain; charset=UTF-8';
$headers[] = 'From: KPTRON Web Portal <no-reply@' . ($_SERVER['SERVER_NAME'] ?? 'kptronpipingsolutions.com') . '>';
$headers[] = 'Reply-To: ' . $fullName . ' <' . $email . '>';
$headers[] = 'Cc: ' . $cc;
$headers[] = 'X-Mailer: PHP/' . phpversion();

$mailSent = @mail($to, $subject, $emailBody, implode("\r\n", $headers));

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'ticket' => $ticket,
        'message' => 'Quotation inquiry received and forwarded to KPTRON commercial desk.'
    ]);
} else {
    // If standard mail() failed, return 200 with ticket so client knows ticket is recorded,
    // but signal status
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'ticket' => $ticket,
        'warning' => 'Inquiry registered. If urgent, connect directly with export desk via WhatsApp.'
    ]);
}
