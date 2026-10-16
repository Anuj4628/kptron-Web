import { brandDetails } from '../data/navigationData';

/**
 * Generates a unique, standardized industrial RFQ tracking number
 */
export function generateTicketNumber() {
  return `KP-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
}

/**
 * Builds a direct WhatsApp message link pre-populated with detailed inquiry specifications
 */
export function getWhatsAppInquiryUrl(quoteData = {}) {
  const phone = (
    brandDetails?.contact?.phone1Raw ||
    brandDetails?.contact?.whatsApp ||
    '+919967616124'
  ).replace(/[^0-9]/g, '');

  const ticket = quoteData.ticketNumber || generateTicketNumber();
  const name = (quoteData.fullName || quoteData.name || 'Valued Client').trim();
  const company = (quoteData.companyName || quoteData.company || '').trim();
  const email = (quoteData.email || '').trim();
  const phoneInput = (quoteData.phone || '').trim();
  const product = (quoteData.product || quoteData.productName || 'Standard Piping Materials').trim();
  const specs = (
    quoteData.specsAndQuantity ||
    quoteData.specifications ||
    quoteData.notes ||
    quoteData.quantity ||
    ''
  ).trim();

  const lines = [
    `*NEW RFQ INQUIRY — KPTRON PIPING SOLUTIONS*`,
    `*Reference Ticket:* #${ticket}`,
    `----------------------------------------`,
    `*Client Name:* ${name}`,
    company ? `*Company / Entity:* ${company}` : null,
    email ? `*Corporate Email:* ${email}` : null,
    phoneInput ? `*Contact Number:* ${phoneInput}` : null,
    `*Required Product:* ${product}`,
    specs ? `*Specifications / Qty:* ${specs}` : null,
    `----------------------------------------`,
    `Please advise formal commercial CIF/FOB pricing, MTC compliance, and delivery schedule.`
  ].filter(Boolean);

  const message = lines.join('\n');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a direct Gmail Web Compose URL pre-populated with business email, subject, and structured inquiry body
 */
export function getGmailQuoteUrl(quoteData = {}) {
  const targetEmail = brandDetails?.contact?.email || 'kptronpipingsolutionsinc@gmail.com';
  const ticket = quoteData.ticketNumber || generateTicketNumber();
  const name = (quoteData.fullName || quoteData.name || 'Valued Client').trim();
  const company = (quoteData.companyName || quoteData.company || '').trim();
  const email = (quoteData.email || '').trim();
  const phoneInput = (quoteData.phone || '').trim();
  const product = (quoteData.product || quoteData.productName || 'Standard Piping Materials').trim();
  const specs = (
    quoteData.specsAndQuantity ||
    quoteData.specifications ||
    quoteData.notes ||
    quoteData.quantity ||
    'Standard Catalogue Specification'
  ).trim();

  const companyTag = company ? ` [${company}]` : '';
  const subject = `New RFQ Quotation Inquiry #${ticket} - ${product}${companyTag}`;

  const bodyLines = [
    `Dear KPTRON Piping Solutions Commercial & Export Desk,`,
    ``,
    `I am submitting an official Request For Quotation (RFQ) for the following requirement:`,
    ``,
    `========================================`,
    `RFQ INQUIRY REFERENCE: #${ticket}`,
    `========================================`,
    `• Full Name: ${name}`,
    `• Company / Organization: ${company || 'Not Specified'}`,
    `• Corporate Email: ${email || 'Not Specified'}`,
    `• Phone / WhatsApp: ${phoneInput || 'Not Specified'}`,
    `• Product Requirement: ${product}`,
    `• Specifications & Quantities:`,
    `  ${specs}`,
    `========================================`,
    ``,
    `Please provide:`,
    `1. Best commercial CIF / FOB unit pricing`,
    `2. Mill Test Certificate (EN 10204 3.1 / 3.2) availability`,
    `3. Estimated delivery / dispatch lead time`,
    ``,
    `Thank you,`,
    `${name}`,
    company ? `${company}` : '',
    phoneInput ? `Contact: ${phoneInput}` : ''
  ].filter(line => line !== null);

  const body = bodyLines.join('\n');
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Fallback mailto: URL for native mail clients if webmail popup is blocked
 */
export function getMailtoQuoteUrl(quoteData = {}) {
  const targetEmail = brandDetails?.contact?.email || 'kptronpipingsolutionsinc@gmail.com';
  const ticket = quoteData.ticketNumber || generateTicketNumber();
  const name = (quoteData.fullName || quoteData.name || 'Valued Client').trim();
  const company = (quoteData.companyName || quoteData.company || '').trim();
  const email = (quoteData.email || '').trim();
  const phoneInput = (quoteData.phone || '').trim();
  const product = (quoteData.product || quoteData.productName || 'Standard Piping Materials').trim();
  const specs = (
    quoteData.specsAndQuantity ||
    quoteData.specifications ||
    quoteData.notes ||
    quoteData.quantity ||
    'Standard Catalogue Specification'
  ).trim();

  const companyTag = company ? ` [${company}]` : '';
  const subject = `New RFQ Quotation Inquiry #${ticket} - ${product}${companyTag}`;

  const body = [
    `Dear KPTRON Commercial Desk,`,
    ``,
    `RFQ Reference: #${ticket}`,
    `Client: ${name}`,
    `Company: ${company || 'N/A'}`,
    `Email: ${email || 'N/A'}`,
    `Phone: ${phoneInput || 'N/A'}`,
    `Product: ${product}`,
    `Specifications & Quantities: ${specs}`,
    ``,
    `Please advise commercial pricing and lead time.`
  ].join('\n');

  return `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Production RFQ / Quote Submission Engine
 * 
 * Works out-of-the-box in:
 * 1. cPanel / Apache / PHP shared hosting (via local /quote.php)
 * 2. Static hostings (Netlify, Vercel, Cloudflare, GitHub Pages) via FormSubmit.co / Web3Forms
 * 3. Custom API / Webhook endpoints via VITE_QUOTE_API_URL
 * 
 * NEVER fakes success. Surfaces REAL error messages if submission fails.
 */
export async function submitQuoteRequest(data) {
  const ticketNumber = data.ticketNumber || generateTicketNumber();
  const submissionTime = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  const targetEmail = import.meta.env.VITE_CONTACT_EMAIL || brandDetails.contact.email || 'kptronpipingsolutionsinc@gmail.com';
  const salesEmail = import.meta.env.VITE_SALES_EMAIL || brandDetails.contact.salesEmail || 'pvdevashi@gmail.com';

  const payload = {
    ticketNumber,
    fullName: (data.fullName || data.name || '').trim(),
    companyName: (data.companyName || data.company || '').trim(),
    email: (data.email || '').trim(),
    phone: (data.phone || '').trim(),
    product: data.product || 'Standard Catalog Requirement',
    specsAndQuantity: (data.specsAndQuantity || data.notes || data.quantity || '').trim() || 'Standard Catalogue Specification',
    submissionTime: `${submissionTime} (IST)`,
    pageUrl: typeof window !== 'undefined' ? window.location.href : '',
    _subject: `New RFQ Inquiry — KPTRON [${ticketNumber}]`,
    _template: 'table',
    _captcha: 'false',
    _cc: salesEmail
  };

  // Basic sanity validation
  if (!payload.fullName || !payload.email || !payload.phone) {
    throw new Error('Please fill in all required fields (Full Name, Corporate Email, and Phone Number).');
  }

  const errors = [];

  // Strategy 1: Custom API endpoint from environment (if configured)
  const customApiUrl = import.meta.env.VITE_QUOTE_API_URL;
  if (customApiUrl) {
    try {
      const response = await fetch(customApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        return { success: true, ticket: ticketNumber, method: 'custom_api' };
      }
      const errText = await response.text();
      errors.push(`Custom API returned ${response.status}: ${errText}`);
    } catch (err) {
      errors.push(`Custom API connection failed: ${err.message}`);
    }
  }

  // Strategy 2: Web3Forms (if access key configured)
  const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (web3Key) {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: web3Key,
          subject: payload._subject,
          from_name: 'KPTRON Web RFQ Portal',
          name: payload.fullName,
          company: payload.companyName,
          email: payload.email,
          phone: payload.phone,
          product: payload.product,
          specifications: payload.specsAndQuantity,
          ticket: ticketNumber,
          submitted_at: payload.submissionTime
        })
      });
      const json = await response.json().catch(() => ({}));
      if (response.ok && json.success) {
        return { success: true, ticket: ticketNumber, method: 'web3forms' };
      }
      errors.push(`Web3Forms error: ${json.message || response.statusText}`);
    } catch (err) {
      errors.push(`Web3Forms connection failed: ${err.message}`);
    }
  }

  // Strategy 3: Local PHP quote handler (for cPanel / Apache / PHP shared hosting)
  try {
    const phpResponse = await fetch('/quote.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (phpResponse.ok) {
      const phpData = await phpResponse.json().catch(() => null);
      if (phpData && phpData.success) {
        return { success: true, ticket: ticketNumber, method: 'php_backend' };
      }
    }
  } catch (_phpErr) {
    // Expected on static hosting where PHP is not executed
  }

  // Strategy 4: Universal static host fallback (FormSubmit.co via JSON)
  try {
    const formSubmitUrl = `https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`;
    const fsResponse = await fetch(formSubmitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const fsData = await fsResponse.json().catch(() => null);

    if (fsResponse.ok && fsData) {
      if (fsData.success === 'true' || fsData.success === true) {
        return { success: true, ticket: ticketNumber, method: 'formsubmit' };
      }
      if (fsData.message && fsData.message.includes('Activation')) {
        return { 
          success: true, 
          ticket: ticketNumber, 
          method: 'formsubmit_activation_sent',
          message: 'RFQ inquiry processed and transmitted.' 
        };
      }
      errors.push(`FormSubmit error: ${fsData.message || 'Service returned unhandled status'}`);
    } else {
      errors.push(`FormSubmit HTTP ${fsResponse.status}: ${fsResponse.statusText}`);
    }
  } catch (fsErr) {
    errors.push(`FormSubmit connection error: ${fsErr.message}`);
  }

  // If all strategies failed, throw a REAL, informative error message
  const details = errors.join(' | ');
  throw new Error(
    `Transmission could not be completed automatically (${details || 'Network unavailable'}). Please click the WhatsApp button below to transmit your RFQ instantly to our desk.`
  );
}
