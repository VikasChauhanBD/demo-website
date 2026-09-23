import React from "react";
import "./Policies.css";

function ShippingAndDeliveryPolicy() {
  return (
    <div className="main-container">
      <h1>Shipping & Delivery Policy</h1>
      <h5 className="main-para">
        Effective Date: 25 April <br />
        <br />
        Thank you for visiting Pharma, a brand owned and operated by SABRSHUKR
        COCARE PRIVATE LIMITED. This Shipping & Delivery Policy outlines the
        terms and conditions related to the shipment and delivery of products
        purchased through our website{" "}
        <a href="https://www.Pharma.com" target="_blank" rel="noreferrer">
          https://www.Pharma.com
        </a>{" "}
        or any of its domain pages.
      </h5>

      <h2>1. General</h2>
      <p>
        <ul>
          <li>
            We aim to ensure that your order is delivered in a timely and secure
            manner.
          </li>
          <li>
            All orders are subject to availability and confirmation of payment.
          </li>
          <li>
            Delivery timelines may vary based on location, courier service, and
            external factors.
          </li>
        </ul>
      </p>
      <br />
      <br />

      <h2>2. Shipping Locations</h2>
      <p>
        <ul>
          <li>We currently offer shipping within India.</li>
          <li>International shipping may not be available at this time.</li>
        </ul>
      </p>
      <br />
      <br />

      <h2>3. Estimated Delivery Time</h2>
      <p>
        <ul>
          <li>
            Metro cities usually receive orders within 7-10 working days
            (excluding Saturday and Sunday) after dispatch; other areas may take
            up to 14 working days.
          </li>
          <li>
            Delivery times may vary depending on your location and external
            factors like holidays, weather, or courier delays.
          </li>
        </ul>
      </p>
      <br />
      <br />

      <h2>4. Shipping Charges</h2>
      <p>
        <ul>
          <li>
            Shipping charges (if any) will be displayed at the time of checkout
            and may be charged separately.
          </li>
          <li>
            We may occasionally offer free shipping as part of special offers or
            promotions.
          </li>
        </ul>
      </p>
      <br />
      <br />

      <h2>5. Order Tracking</h2>
      <p>
        Once your order is shipped, you may receive a tracking ID via email or
        SMS, if tracking is available with the chosen courier service.
      </p>
      <br />
      <br />

      <h2>6. Delays and Issues</h2>
      <p>
        While we strive for timely deliveries, we are not liable for delays
        caused by courier partners, weather conditions, or other unforeseen
        circumstances. If your order is delayed beyond a reasonable period,
        please contact us for assistance.
        <br />
        For any issues related to book delivery (incorrect items, missing items,
        misprints, etc.), students must report the concern within 36 hours of
        delivery.
      </p>
      <br />
      <br />

      <h2>7. Damaged or Lost Items</h2>
      <p>
        If you receive a damaged package or your order is lost in transit,
        please contact us within 48 hours of delivery (or expected delivery)
        with your order details and evidence (if applicable).
      </p>
      <br />
      <br />

      <h2>8. Contact Us</h2>
      <div className="contact-section">
        <p className="company-name">SABRSHUKR COCARE PRIVATE LIMITED</p>

        <div className="contact-row">
          <span className="contact-icon">📧</span>
          <span>
            Email: <a href="mailto:support@Pharma.com">support@Pharma.com</a>
          </span>
        </div>

        <div className="contact-row">
          <span className="contact-icon">📞</span>
          <span>
            Phone: <a href="tel:7428581909">7428581909</a> (Only For Calling)
          </span>
        </div>

        <div className="contact-row">
          <span className="contact-icon">🌐</span>
          <span>
            Website:{" "}
            <a href="https://www.Pharma.com" target="_blank" rel="noreferrer">
              https://www.Pharma.com
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ShippingAndDeliveryPolicy;
