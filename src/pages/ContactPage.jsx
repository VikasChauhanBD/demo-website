import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./ContactPage.css";

function ContactPage() {
  return (
    <main className="contact-page">
      <Helmet>
        <title>Contact Us - Pharma</title>
        <meta
          name="description"
          content="Contact Pharmacology by Dr. GRG for course, account, payment, delivery and privacy enquiries."
        />
      </Helmet>

      <header className="contact-heading">
        <span className="contact-eyebrow">PHARMACOLOGY BY DR. GRG</span>
        <h1>Contact Us</h1>
        <p>
          Have a question about your learning journey? Get in touch for help
          with courses, your account, payments or workbook deliveries.
        </p>
      </header>

      <div className="contact-grid">
        <section className="contact-card" aria-labelledby="support-heading">
          <h2 id="support-heading">Student support</h2>
          <p>For course enquiries, app access, payments and delivery assistance.</p>
          <a className="contact-email" href="mailto:support@pharmacologybydrgrg.com">
            support@pharmacologybydrgrg.com
          </a>
          <p className="contact-note">
            Include your registered email and relevant order details. For
            technical issues, include your device model and a description of
            the problem so we can help you.
          </p>
          <a className="contact-button" href="mailto:support@pharmacologybydrgrg.com">
            Email support
          </a>
        </section>

        <section className="contact-card" aria-labelledby="privacy-heading">
          <h2 id="privacy-heading">Privacy &amp; grievances</h2>
          <p>For privacy questions, personal data requests and complaints.</p>
          <p className="contact-officer">Dr. Gobind Rai Garg</p>
          <a className="contact-email" href="mailto:drgobind@conceptualphysiotherapy.com">
            drgobind@conceptualphysiotherapy.com
          </a>
          <a className="contact-phone" href="tel:+918800222014">+91 88002 22014</a>
          <Link className="contact-policy" to="/privacy-policy">Read our Privacy Policy →</Link>
        </section>
      </div>

      <section className="contact-help" aria-labelledby="help-heading">
        <div>
          <h2 id="help-heading">Looking for a quick answer?</h2>
          <p>Find answers to common questions and help with video playback.</p>
        </div>
        <div className="contact-help-links">
          <Link to="/faqs">Browse FAQs →</Link>
          <Link to="/troubleshooting">Video troubleshooting →</Link>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
