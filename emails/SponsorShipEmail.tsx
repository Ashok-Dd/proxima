// emails/SponsorshipEmail.tsx
import * as React from 'react';

interface SponsorshipEmailProps {
  title: string;
  fullName: string;
  email: string;
  organisation: string;
  phone: string;
  city: string;
  country: string;
  sponsorshipType: string;
}

export const SponsorshipEmail: React.FC<SponsorshipEmailProps> = ({
  title,
  fullName,
  email,
  organisation,
  phone,
  city,
  country,
  sponsorshipType,
}) => (
  <html>
    <head>
      <style>
        {`
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-row { margin: 15px 0; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #2563eb; }
          .label { font-weight: bold; color: #2563eb; margin-bottom: 5px; }
          .value { color: #1f2937; }
          .footer { text-align: center; margin-top: 30px; padding: 20px; color: #6b7280; font-size: 14px; }
        `}
      </style>
    </head>
    <body>
      <div className="container">
        <div className="header">
          <h1 style={{ margin: 0 }}>🎉 New Sponsorship Request</h1>
          <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Someone is interested in becoming a sponsor!</p>
        </div>
        
        <div className="content">
          <div className="info-row">
            <div className="label">Contact Person</div>
            <div className="value">{title} {fullName}</div>
          </div>

          <div className="info-row">
            <div className="label">Email Address</div>
            <div className="value">{email}</div>
          </div>

          <div className="info-row">
            <div className="label">Organisation</div>
            <div className="value">{organisation}</div>
          </div>

          <div className="info-row">
            <div className="label">Phone Number</div>
            <div className="value">{phone}</div>
          </div>

          <div className="info-row">
            <div className="label">Location</div>
            <div className="value">{city}, {country}</div>
          </div>

          <div className="info-row" style={{ borderLeft: '4px solid #16a34a' }}>
            <div className="label" style={{ color: '#16a34a' }}>Sponsorship Type</div>
            <div className="value" style={{ fontSize: '18px', fontWeight: 'bold' }}>{sponsorshipType}</div>
          </div>
        </div>

        <div className="footer">
          <p>This email was sent from your Sponsorship Interest Form.</p>
          <p>Please respond to the sponsor at: <strong>{email}</strong></p>
        </div>
      </div>
    </body>
  </html>
);