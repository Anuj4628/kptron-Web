import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { brandDetails } from '../../data/navigationData';
import './TopContactBar.css';


export default function TopContactBar() {
  const { contact } = brandDetails;

  return (
    <div className="top-contact-bar" aria-label="KPTRON Quick Contact and Verification">
      <div className="top-contact-container">
        {/* Certification & City */}
        <div className="top-contact-left">
          <span className="top-cert-badge">AN ISO 9001:2015 CERTIFIED COMPANY</span>
          <span className="top-bar-divider" aria-hidden="true">•</span>
          <span className="top-location">MUMBAI, INDIA</span>
        </div>

        {/* Contact Links (Email & Phones) */}
        <div className="top-contact-right">
          {/* Email */}
          <a
            href={`mailto:${contact.email}`}
            className="top-contact-item"
            title="Email KPTRON Piping Solutions"
          >
            <Mail size={13} className="top-icon email-icon" aria-hidden="true" />
            <span className="contact-text email-text">{contact.email}</span>
          </a>

          <span className="top-bar-divider" aria-hidden="true">|</span>

          {/* Phone 1 */}
          <a
            href={`tel:${contact.phone1Raw}`}
            className="top-contact-item"
            title="Call Mobile Export Desk"
          >
            <Phone size={13} className="top-icon" aria-hidden="true" />
            <span className="contact-text">{contact.phone1}</span>
          </a>

          <span className="top-bar-divider" aria-hidden="true">|</span>

          {/* Phone 2 */}
          <a
            href={`tel:${contact.phone2Raw}`}
            className="top-contact-item"
            title="Call Office Line"
          >
            <Phone size={13} className="top-icon" aria-hidden="true" />
            <span className="contact-text">{contact.phone2}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
