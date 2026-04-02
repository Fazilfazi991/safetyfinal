import React from 'react'

const Logo = ({ nav }) => (
  <div onClick={() => nav('/')} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
    <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg,#f07c1f,#d96a10)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8 6 6 9 6 12a6 6 0 0012 0c0-3-2-6-6-10z" fill="white"/>
        <path d="M12 8c-2 2-3 4-3 5.5a3 3 0 006 0C15 12 14 10 12 8z" fill="rgba(255,210,120,0.85)"/>
      </svg>
    </div>
    <span style={{ fontWeight: 700, fontSize: 15, color: '#fff' }}>Safety World</span>
  </div>
)

export default function Footer({ nav }) {
  return (
    <>
      {/* Orange CTA banner — swapped per page via prop, default here */}
      <section className="footer-cta">
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for a free 30-minute consultation with our experts</p>
          <div className="footer-cta-btns">
            <a href="tel:+97158571449" className="btn btn-outline-white" style={{ padding: '12px 28px' }}>
              Call Now: +971 58 571 4496
            </a>
            <a href="mailto:support@safetyworld.ae" className="btn btn-outline-white" style={{ padding: '12px 28px' }}>
              Email Us
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div>
              <Logo nav={nav} />
              <p>Your complete technology and safety partner in Dubai, providing premium IT services and comprehensive Fire &amp; Safety solutions.</p>
              <div className="footer-socials">
                {['f','ig','in','tw'].map(s => (
                  <div key={s} className="footer-social">{s}</div>
                ))}
              </div>
            </div>

            {/* IT Services */}
            <div>
              <h4>IT Services</h4>
              {['Remote IT Support','Onsite IT Support','IT Managed Services','Cyber Security','Cloud Services'].map(t => (
                <button key={t} className="footer-link" onClick={() => nav('/it-services')}>{t}</button>
              ))}
            </div>

            {/* Fire & Safety */}
            <div>
              <h4>Fire &amp; Safety</h4>
              {['Low Current Systems','Fire Protection','Electrical Works','Plumbing Works','Building Contracting'].map(t => (
                <button key={t} className="footer-link" onClick={() => nav('/fire-safety')}>{t}</button>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4>Contact Us</h4>
              <div className="footer-contact-item">
                <span className="ic">📞</span>
                <a href="tel:+97158571449" style={{ color: '#aaa', textDecoration: 'none' }}>+971 58 571 4496</a>
              </div>
              <div className="footer-contact-item">
                <span className="ic">✉</span>
                <a href="mailto:support@safetyworld.ae" style={{ color: '#aaa', textDecoration: 'none' }}>support@safetyworld.ae</a>
              </div>
              <div className="footer-contact-item">
                <span className="ic">📍</span>
                <span>Level 38, Media One Tower<br />Dubai Media City<br />PO BOX 454845</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Safety World. All rights reserved.</span>
            <div>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
