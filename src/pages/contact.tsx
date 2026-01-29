import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/layout.module.css';
import formStyles from '../styles/contact.module.css';

const EMAIL = 'dan.dacut@urios.edu.ph';
const PHONE_E164 = '+639626535330';
const PHONE_WA = '639626535330';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY || '');
  }, []);

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const templateParams = {
        to_email: EMAIL,
        from_email: fromEmail,
        name: name,
        message: message,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_TEMPLATE_ID || '',
        templateParams
      );

      setStatus('success');
      setName('');
      setFromEmail('');
      setMessage('');
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };


  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <h1>Contact</h1>
        <p className={styles.lead}>Send me a message directly.</p>

        <div className={formStyles.contactContainer}>
          <section className={formStyles.infoCard} aria-labelledby="direct-contact-heading">
            <h2 id="direct-contact-heading">Direct contact</h2>
            <ul className={formStyles.infoList}>
              <li>
                <a href={`tel:${PHONE_E164}`}>+63 962 653 5330</a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
            </ul>
          </section>

          <section className={formStyles.formCard} aria-labelledby="message-form-heading">
            <h2 id="message-form-heading">Send a message</h2>
            <form className={formStyles.form} onSubmit={handleSendEmail}>
              <div className={formStyles.group}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className={formStyles.group}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={fromEmail}
                  onChange={(e) => setFromEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>

              <div className={formStyles.group}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

                            <div className={formStyles.actions}>
  <button type="submit" className={styles.contactBtn} disabled={status === 'loading'}>
    {status === 'loading' ? 'Sending...' : 'Send Message'}
  </button>
</div>
{status === 'success' && (
  <p style={{ marginTop: 8, color: '#22c55e' }}>✓ Thanks! Your message was sent successfully.</p>
)}
{status === 'error' && (
  <p style={{ marginTop: 8, color: '#fca5a5' }}>✗ Failed to send message. Please try again or email me at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
)}
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;









