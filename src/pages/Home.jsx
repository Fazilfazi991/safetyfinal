import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Unsplash real photos (free to use, no auth needed)
const IMGS = {
  office:   'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  server:   'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
  fire:     'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
  cctv:     'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80',
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
}

function OIcon({ children, size = 44 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      border: '2px solid #f07c1f',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#f07c1f', fontSize: size * 0.42,
    }}>{children}</div>
  )
}

function CheckItem({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
      <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#f07c1f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="white"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
      </div>
      <span style={{ fontSize: 13, color: '#555' }}>{text}</span>
    </div>
  )
}

function ServiceCard({ img, title, desc, nav, path }) {
  const [h, setH] = useState(false)
  return (
    <motion.div variants={staggerItem} className="card" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      onClick={() => nav(path)}>
      <div style={{ height: 180, overflow: 'hidden', background: '#e0c090', position: 'relative' }}>
        {img ? (
          <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(40%) saturate(1.4) brightness(0.85)', transition: 'transform .3s', transform: h ? 'scale(1.04)' : 'scale(1)' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#c8860a,#e8a020)' }} />
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(200,100,0,.25), rgba(160,70,0,.55))' }} />
      </div>
      <div style={{ padding: '20px 22px 22px' }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{title}</h3>
        <p style={{ fontSize: 13, color: '#666', lineHeight: 1.6, marginBottom: 14 }}>{desc}</p>
        <span style={{ color: '#f07c1f', fontSize: 13, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4 }}>
          Learn More
          <span style={{ display: 'inline-block', transition: 'transform .2s', transform: h ? 'translateX(4px)' : 'none' }}>→</span>
        </span>
      </div>
    </motion.div>
  )
}

function BenefitCard({ icon, title, desc, color }) {
  return (
    <motion.div variants={staggerItem} className="benefit-card" style={{ 
      background: color, color: '#fff', borderRadius: 12, padding: '24px 20px', 
      textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
      boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: 32 }}>{icon}</div>
      <div style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.2 }}>{title}</div>
      <div style={{ fontSize: 13, opacity: 0.9 }}>{desc}</div>
    </motion.div>
  )
}

function FeatureItem({ icon, title, desc }) {
  return (
    <motion.div variants={staggerItem} style={{ 
      display: 'grid', gridTemplateColumns: '48px 1fr', gap: 16, padding: '20px 0', 
      borderBottom: '1px solid #efefef'
    }}>
      <div style={{ fontSize: 24, color: '#f07c1f' }}>{icon}</div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4, color: '#333' }}>{title}</div>
        <div style={{ fontSize: 13, color: '#777', lineHeight: 1.5 }}>{desc}</div>
      </div>
    </motion.div>
  )
}

function ContactCard({ title, icon, color, phone, email }) {
  return (
    <motion.div variants={staggerItem} style={{ 
      background: '#fff', border: `1px solid ${color}33`, borderRadius: 12, padding: '24px', 
      display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: 4, height: '100%', background: color }} />
      <div style={{ fontSize: 24, marginBottom: 4 }}>{icon}</div>
      <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{title}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <a href={`tel:${phone.replace(/\s+/g, '')}`} style={{ color: '#444', textDecoration: 'none', fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ color: '#f07c1f' }}>📞</span> {phone}
        </a>
        <a href={`mailto:${email}`} style={{ color: '#444', textDecoration: 'none', fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ color: '#f07c1f' }}>✉</span> {email}
        </a>
      </div>
    </motion.div>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', company:'', service:'IT Services', message:'' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = e => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); setSent(true) }, 1200) }

  if (sent) return (
    <div style={{ textAlign: 'center', padding: '48px 16px' }}>
      <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
      <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Enquiry Sent!</h3>
      <p style={{ color: '#666' }}>Thank you! Our team will contact you shortly.</p>
      <button className="btn btn-orange" style={{ marginTop: 24 }} onClick={() => setSent(false)}>Send Another</button>
    </div>
  )

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div className="form-row">
        <div className="form-group"><label>Full Name *</label><input name="name" required value={form.name} onChange={onChange} placeholder="Your name" /></div>
        <div className="form-group"><label>Email *</label><input type="email" name="email" required value={form.email} onChange={onChange} placeholder="your@email.com" /></div>
      </div>
      <div className="form-row">
        <div className="form-group"><label>Phone *</label><input name="phone" required value={form.phone} onChange={onChange} placeholder="+971 58 571 4969" /></div>
        <div className="form-group"><label>Company</label><input name="company" value={form.company} onChange={onChange} placeholder="Your company name" /></div>
      </div>
      <div className="form-group">
        <label>Service Type *</label>
        <select name="service" value={form.service} onChange={onChange}>
          <option>IT Services</option><option>Fire Protection</option>
          <option>Low Current Systems</option><option>Electrical Works</option>
          <option>Plumbing Works</option><option>Building Contracting</option>
        </select>
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea name="message" rows={4} value={form.message} onChange={onChange} placeholder="Tell us about your requirements..." />
      </div>
      <button type="submit" className="btn btn-orange" disabled={loading}
        style={{ width: '100%', justifyContent: 'center', padding: '13px', fontSize: 15, fontWeight: 600, opacity: loading ? .8 : 1 }}>
        {loading ? 'Sending...' : 'Send Enquiry'}
      </button>
    </form>
  )
}

export default function Home({ nav }) {
  return (
    <div style={{ overflow: 'hidden' }}>
      {/* ══ HERO ══ */}
      <section style={{ background: 'linear-gradient(135deg,#2d2d2d 0%,#3d2a1a 55%,#4a3010 100%)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 style={{ fontSize: 'clamp(28px,4.5vw,46px)', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 20 }}>
                Your Complete<br />
                <span style={{ color: '#f07c1f' }}>Technology</span> &amp;<br />
                <span style={{ color: '#f07c1f' }}>Safety</span> Partner
              </h1>
              <p style={{ color: 'rgba(255,255,255,.8)', fontSize: 15, lineHeight: 1.75, marginBottom: 32, maxWidth: 460 }}>
                Premier IT services and comprehensive Fire &amp; Safety solutions for businesses across all industries in Dubai.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button className="btn btn-orange" onClick={() => nav('/it-services')} style={{ padding: '12px 26px' }}>IT Services →</button>
                <button className="btn btn-outline-white" onClick={() => nav('/fire-safety')} style={{ padding: '12px 26px' }}>Fire &amp; Safety →</button>
              </div>
            </motion.div>
            <motion.div 
              style={{ display: 'flex', justifyContent: 'flex-end' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <div style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(240,124,31,.4)', borderRadius: 12, padding: '28px 24px', maxWidth: 260, backdropFilter: 'blur(8px)' }}>
                <div style={{ color: '#f07c1f', fontSize: 38, marginBottom: 12 }}>🛡</div>
                <h3 style={{ color: '#fff', fontSize: 17, fontWeight: 700, marginBottom: 10 }}>Trusted by Leading Companies</h3>
                <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 13, lineHeight: 1.7 }}>
                  Serving 200+ clients across retail, banking, healthcare, and more
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ INFO CARDS ══ */}
      <section style={{ padding: '40px 0', background: '#fff' }}>
        <div className="container">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" className="grid-3" viewport={{ once: true }}>
            {[
              { icon: '📋', title: 'Company', sub: 'Safety World Technical Services LLC', tag: 'Est. 2009' },
              { icon: '📍', title: 'Location', sub: 'Al Satwa, Dubai', tag: 'PO Box 5337' },
              { icon: '💼', title: 'Experience', sub: '15+ Years in Industry', tag: '500+ Projects' },
            ].map(c => (
              <motion.div key={c.title} variants={staggerItem} className="card" style={{ textAlign: 'center', padding: '28px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}><OIcon size={42}>{c.icon}</OIcon></div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{c.title}</div>
                <div style={{ fontSize: 13, color: '#555' }}>{c.sub}</div>
                <div style={{ fontSize: 12, color: '#f07c1f', marginTop: 6 }}>{c.tag}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section style={{ padding: '40px 0', background: '#f5f5f5' }}>
        <div className="container">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid-4">
            {[['🏅','15+','Years Experience'],['📈','500+','Projects Completed'],['👥','200+','Happy Clients'],['🕐','24/7','Support Available']].map(([ic,v,l]) => (
              <motion.div key={l} variants={staggerItem} className="card" style={{ textAlign: 'center', padding: '28px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}><OIcon size={42}>{ic}</OIcon></div>
                <div style={{ fontSize: 28, fontWeight: 800, lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 13, color: '#888', marginTop: 6 }}>{l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ WHY CHOOSE ══ */}
      <section className="section bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
            <h2 className="section-title">Why Choose Safety World?</h2>
            <p className="section-sub">We combine expertise, innovation, and customer commitment to deliver exceptional results</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid-4">
            {[
              ['🛡','Money Back Guarantee','100% satisfaction guaranteed or your money back'],
              ['👥','30 Min Free Consultation','Expert consultation to understand your needs'],
              ['⭐','24/7 Support','Round the clock support for peace of mind'],
            ].map(([ic,t,d]) => (
              <motion.div key={t} variants={staggerItem} className="card" style={{ textAlign: 'center', padding: '28px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}><OIcon size={44}>{ic}</OIcon></div>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 8 }}>{t}</div>
                <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>{d}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ OUR SERVICES ══ */}
      <section className="section bg-gray">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
            <h2 className="section-title">Our Services</h2>
            <p className="section-sub">Comprehensive solutions for both IT and Fire &amp; Safety needs</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid-2">
            <ServiceCard img={IMGS.office} title="IT Services" desc="Remote & onsite support, managed services, and cybersecurity" nav={nav} path="/it-services" />
            <ServiceCard img={IMGS.fire} title="Fire Protection" desc="Comprehensive fire safety systems and solutions" nav={nav} path="/fire-safety" />
            <ServiceCard img={IMGS.cctv} title="Low Current Systems" desc="Data, communication, and automation systems" nav={nav} path="/fire-safety" />
            <ServiceCard img={IMGS.server} title="Electrical Works" desc="Power installations and electrical infrastructure" nav={nav} path="/fire-safety" />
          </motion.div>
        </div>
      </section>

      {/* ══ MANAGED IT AMC SECTION ══ */}
      <section className="section bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
            <div style={{ width: 44, height: 4, background: '#0066cc', marginBottom: 20 }} />
            <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 16px' }}>Managed IT AMC Service Provider in Dubai</h2>
            <div style={{ maxWidth: 800, marginBottom: 48 }}>
              <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, marginBottom: 16 }}>
                Safety World has a team of highly experienced, friendly professionals working to provide cost-effective, secure, and scalable IT AMC in Dubai. With our fast and reliable IT AMC Services and Solutions, you can access a range of services, from outsourcing single element support to full infrastructure updates.
              </p>
              <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, marginBottom: 16 }}>
                Whether its system security, support, or maintenance, we tailor our IT AMC solutions (to scale and budget) for businesses everywhere in Dubai. Our clients from across the field — commercial, manufacturing, leisure, and public sector — use our IT specialists to regulate an efficient and proactive work environment.
              </p>
              <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8 }}>
                For almost a decade, Safety World has managed to offer professional and commercially viable IT AMC services in Dubai. These services are easy to use and provide full coverage for all your future IT AMC-related inquiries/issues.
              </p>
            </div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 64 }} className="fire-split">
            {/* Features list */}
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 32, color: '#0066cc' }}>Our IT AMC Service Features</h3>
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <FeatureItem icon="⏲️" title="Guaranteed 10-minute Response Time for Expert Support" desc="Our expert engineers work on your IT issues within 10 minutes" />
                <FeatureItem icon="🔔" title="24/7 Monitoring and Fully Managed IT Support" desc="Our professional team monitoring your IT network, to ensure lasting efficiency and quick solutions whenever required." />
                <FeatureItem icon="⚙️" title="Proactive Maintenance and Monitoring" desc="We proactively apply patches, updates and fixes in the background, so you don't have to wait for actual issues arise." />
                <FeatureItem icon="👨‍💼" title="IT Manager and Dedicated Engineer Support" desc="With our IT AMC solutions, a dedicated manager and engineer ensures that all your legal and regulatory requirements as well as responsibilities are met to avoid any future risk to you or your business." />
                <FeatureItem icon="🛡️" title="Cybersecurity and IT Policies" desc="We implement a system-side security strategy to protect your IT business network from security risks such as malware, spam, intrusion, etc." />
                <FeatureItem icon="📁" title="Data Backup and Recovery" desc="Our IT AMC solutions ensure year around backup and recovery services that are tailored to your business scale and data requirements." />
              </motion.div>
            </div>

            {/* Benefits and Similar Services */}
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 32, color: '#0066cc' }}>IT AMC Service Benefits</h3>
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <BenefitCard icon="🔒" title="Protect Your Data" desc="Ensure your data remains safe" color="#00c853" />
                <BenefitCard icon="📉" title="Minimize IT Issues" desc="Reduce system downtime" color="#ff5252" />
                <BenefitCard icon="🛡️" title="IT security Tightening" desc="Enhance security protocols" color="#ffab00" />
                <BenefitCard icon="💰" title="Reduce IT Costs" desc="Optimize your budget" color="#00b0ff" />
              </motion.div>

              <div style={{ marginTop: 40, background: '#007cc2', borderRadius: 12, padding: '32px 24px', color: '#fff' }}>
                <div style={{ width: 32, height: 3, background: '#fff', marginBottom: 12 }} />
                <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 24 }}>Similar Services</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  {[
                    ['🤝','IT AMC Contract'],['📄','Managed IT Services'],
                    ['🔄','Changing IT AMC Service Provider?'],['👥','IT Outsourcing'],
                    ['🏗️','Featured Industries'],['❓','Frequently Asked Questions']
                  ].map(([ic, t]) => (
                    <div key={t} style={{ display: 'flex', flexDirection: 'column', gap: 8, cursor: 'pointer' }}>
                      <div style={{ fontSize: 24 }}>{ic}</div>
                      <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.3 }}>{t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
            <h2 className="section-title">Trusted by Leading Companies</h2>
            <p className="section-sub">We have successfully served hundreds of clients across diverse industries</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid-6">
            {['Under Armour','Sharaf DG','Emirates NBD','Hugo Boss','H&M','In Flight Dubai','IBO Medical Care','ADIB Bank','Cello Music','Carters','Starbucks','Botanic Restaurant'].map(c => (
              <motion.div key={c} variants={staggerItem} style={{ border: '1px solid #e5e5e5', borderRadius: 6, padding: '12px 8px', textAlign: 'center', fontSize: 12, fontWeight: 500, color: '#444', cursor: 'default', transition: 'all .2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#f07c1f'; e.currentTarget.style.color = '#f07c1f' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e5e5'; e.currentTarget.style.color = '#444' }}
              >{c}</motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="section bg-gray">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
            <h2 className="section-title">How It Works</h2>
            <p className="section-sub">Our streamlined process ensures quick implementation and maximum results</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid-4">
            {[['01','Assessment','We analyze your current needs and requirements'],
              ['02','Planning','Create a customized solution tailored to you'],
              ['03','Implementation','Deploy the solution with minimal disruption'],
              ['04','Support','Ongoing 24/7 support and maintenance']].map(([n,t,d], i) => (
              <motion.div key={t} variants={staggerItem} className="card" style={{ padding: '28px 20px' }}>
                <div style={{ fontSize: 34, fontWeight: 800, color: '#f07c1f', opacity: .35, lineHeight: 1, marginBottom: 12 }}>{n}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span style={{ fontWeight: 700, fontSize: 15 }}>{t}</span>
                  {i < 3 && <div style={{ flex: 1, height: 2, background: '#f07c1f', opacity: .4 }} />}
                </div>
                <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>{d}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="section bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-sub">Real feedback from our satisfied clients</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid-3">
            {[
              ['"Safety World provided exceptional IT support that transformed our operations. Highly recommended!"','Ahmed Al Mansouri','Emirates NBD'],
              ['"Their fire safety solutions are top-notch. Professional team and excellent service."','Fatima Hassan','Under Armour'],
              ['"Outstanding support and quick response times. They truly care about their clients."','Mohammed Al Zaabi','Sharaf DG'],
            ].map(([text,name,co]) => (
              <motion.div key={name} variants={staggerItem} className="card">
                <div style={{ color: '#f07c1f', fontSize: 17, marginBottom: 12 }}>★★★★★</div>
                <p style={{ fontSize: 13, color: '#555', lineHeight: 1.7, marginBottom: 16 }}>{text}</p>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{name}</div>
                <div style={{ fontSize: 12, color: '#f07c1f' }}>{co}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ INDUSTRIES ══ */}
      <section className="section bg-gray">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-sub">Expertise across diverse sectors</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid-4">
            {['Real Estate','Government','Retail','Banking','Education','Oil & Gas','Hospitality','Healthcare','Insurance','Technology','Finance','Manufacturing'].map(ind => (
              <motion.div key={ind} variants={staggerItem} style={{ border: '1px solid #e5e5e5', borderRadius: 6, padding: '14px 16px', textAlign: 'center', fontSize: 13, fontWeight: 500, color: '#444', background: '#fff', transition: 'all .2s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#f07c1f'; e.currentTarget.style.color = '#f07c1f' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e5e5'; e.currentTarget.style.color = '#444' }}
              >{ind}</motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ QUICK CONTACT ══ */}
      <section className="section bg-white" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid-2">
            <ContactCard 
              title="IT Support Department" 
              icon="👨‍💻" color="#0066cc" 
              phone="+971 58 571 4969" 
              email="Support@safetyworld.ae" 
            />
            <ContactCard 
              title="Fire & Safety Department" 
              icon="🛡️" color="#f07c1f" 
              phone="+971 55 511 1643" 
              email="info@safetyworld.ae" 
            />
          </motion.div>
        </div>
      </section>

      {/* ══ CONTACT FORM ══ */}
      <section className="section bg-white">
        <div className="container" style={{ maxWidth: 640 }}>
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-sub">Ready to transform your business? Contact us today for a free consultation</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="form-wrap"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
