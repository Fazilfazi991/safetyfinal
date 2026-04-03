import logo from '../assets/logo.png'

const Logo = ({ nav }) => (
  <div onClick={() => nav('/')} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', marginBottom: 20 }}>
    <img src={logo} alt="Safety World Dubai" style={{ height: 44, width: 'auto' }} />
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
              {['Remote IT Support','Onsite IT Support','IT Managed Services','Structured Cabling','Cyber Security','Cloud Services'].map(t => (
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
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#f07c1f', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>IT Support</div>
                <div className="footer-contact-item" style={{ marginBottom: 4 }}>
                  <span className="ic">📞</span>
                  <a href="tel:971585714969" style={{ color: '#aaa', textDecoration: 'none' }}>+971 58 571 4969</a>
                </div>
                <div className="footer-contact-item">
                  <span className="ic">✉</span>
                  <a href="mailto:Support@safetyworld.ae" style={{ color: '#aaa', textDecoration: 'none' }}>Support@safetyworld.ae</a>
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#f07c1f', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Fire & Safety</div>
                <div className="footer-contact-item" style={{ marginBottom: 4 }}>
                  <span className="ic">📞</span>
                  <a href="tel:971555111643" style={{ color: '#aaa', textDecoration: 'none' }}>+971 55 511 1643</a>
                </div>
                <div className="footer-contact-item">
                  <span className="ic">✉</span>
                  <a href="mailto:info@safetyworld.ae" style={{ color: '#aaa', textDecoration: 'none' }}>info@safetyworld.ae</a>
                </div>
              </div>

              <div>
                <div className="footer-contact-item">
                  <span className="ic">📍</span>
                  <span>Level 38, Media One Tower<br />Dubai Media City, PO BOX 454845</span>
                </div>
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
