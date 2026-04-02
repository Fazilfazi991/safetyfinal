import React from 'react'
import { motion } from 'framer-motion'

const IMGS = {
  lowCurrent:   'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80',
  fireProt:     'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
  electrical:   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  plumbing:     'https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=600&q=80',
  hvac:         'https://images.unsplash.com/photo-1621905235292-0574925504ee?w=600&q=80',
  building:     'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
}

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
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

function CheckItem({ text }) {
  return (
    <motion.div variants={staggerItem} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
      <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#f07c1f', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </div>
      <span style={{ fontSize: 13, color: '#555' }}>{text}</span>
    </motion.div>
  )
}

function OIcon({ children, size = 40 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', border: '2px solid #f07c1f', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f07c1f', fontSize: size * 0.45 }}>
      {children}
    </div>
  )
}

function ServiceSection({ icon, title, desc, checks, img, imgRight, bg }) {
  return (
    <div style={{ marginBottom: 64 }}>
      {/* Header label */}
      <motion.div 
        style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
        }}
      >
        <OIcon size={36}>{icon}</OIcon>
        <h2 style={{ fontSize: 'clamp(18px,3vw,24px)', fontWeight: 800 }}>{title}</h2>
      </motion.div>

      {/* Split layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 48,
        alignItems: 'center',
      }} className="fire-split">
        {/* Text */}
        <motion.div 
          style={{ order: imgRight ? 0 : 1 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: imgRight ? -30 : 30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
          }}
        >
          <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75, marginBottom: 20 }}>{desc}</p>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {checks.map(c => <CheckItem key={c} text={c} />)}
          </motion.div>
        </motion.div>
        {/* Image */}
        <motion.div 
          style={{ order: imgRight ? 1 : 0 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } }
          }}
        >
          <div style={{ borderRadius: 12, overflow: 'hidden', height: 260, background: bg || '#ddd' }}>
            <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={e => { e.target.style.display = 'none' }} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function FireSafety({ nav }) {
  return (
    <div style={{ overflow: 'hidden' }}>
      {/* ══ HERO ══ */}
      <section style={{ background: 'linear-gradient(135deg,#2d1a0a,#3d2010,#4a2808)', padding: '72px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(240,124,31,.18) 0%, transparent 65%)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <motion.button 
            className="back-btn" 
            onClick={() => nav('/')}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            ← Back to Home
          </motion.button>
          <motion.h1 
            style={{ fontSize: 'clamp(26px,5vw,52px)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.15 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Comprehensive <span style={{ color: '#f07c1f' }}>Fire &amp; Safety</span><br />Solutions
          </motion.h1>
          <motion.p 
            style={{ color: 'rgba(255,255,255,.8)', fontSize: 15, maxWidth: 540, lineHeight: 1.75, marginBottom: 32 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Professional MEP (Mechanical, Electrical, Plumbing) and fire safety services for residential and commercial properties
          </motion.p>
          <motion.button 
            className="btn btn-orange" 
            style={{ padding: '12px 28px', fontSize: 15 }} 
            onClick={() => nav('/')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get Started Today →
          </motion.button>
        </div>
      </section>

      {/* ══ OUR SERVICES ══ */}
      <section className="section bg-white">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
            <h2 className="section-title">Our Services</h2>
            <p className="section-sub">Complete MEP and fire safety solutions for every project</p>
          </motion.div>

          {/* Low Current */}
          <ServiceSection
            icon="📡" title="Low Current Systems"
            desc="Complete low current infrastructure including structured cabling, emergency lighting, CCTV, fire alarm, and building automation systems."
            checks={['Data & Communications','Fire Alarm Systems','Lighting Control Systems','Video and Audio Intercom','Smart Home Automation','Multi-Cable AV & Data Cabling','Emergency/Exit Lighting','CCTV Systems']}
            img={IMGS.lowCurrent} imgRight={true}
            bg="linear-gradient(135deg,#2a4a3a,#1a3a2a)"
          />

          <hr style={{ border: 'none', borderTop: '1px solid #eee', marginBottom: 64 }} />

          {/* Fire Protection */}
          <ServiceSection
            icon="🔥" title="Fire Protection System"
            desc="Comprehensive fire safety infrastructure designed to protect lives and property. All systems are compliant with UAE Civil Defence standards."
            checks={['Fire Suppression Systems','Fire Extinguishers','Fire Alarm System','Fire Hydrant Systems','Automatic Sprinkler Systems','Dry and Wet Risers']}
            img={IMGS.fireProt} imgRight={false}
            bg="linear-gradient(135deg,#4a1a0a,#6a2a10)"
          />

          <hr style={{ border: 'none', borderTop: '1px solid #eee', marginBottom: 64 }} />

          {/* Electrical Works */}
          <ServiceSection
            icon="⚡" title="Electrical Works"
            desc="Professional electrical installation and maintenance services for commercial and residential buildings across the UAE."
            checks={['Power Distribution','Cable Installation','Switchboard Setup','Lighting Installation','Emergency Power Systems','Electrical Safety Inspections']}
            img={IMGS.electrical} imgRight={true}
            bg="linear-gradient(135deg,#2a3a4a,#1a2a3a)"
          />

          <hr style={{ border: 'none', borderTop: '1px solid #eee', marginBottom: 64 }} />

          {/* Plumbing Works */}
          <ServiceSection
            icon="🔧" title="Plumbing Works"
            desc="Complete plumbing solutions for residential and commercial properties. From installation to maintenance."
            checks={['Water Supply Systems','Drainage Systems','Pipe Installation','Water Tank Setup','Maintenance & Repairs','Emergency Plumbing']}
            img={IMGS.plumbing} imgRight={false}
            bg="linear-gradient(135deg,#1a3a4a,#0a2a3a)"
          />

          <hr style={{ border: 'none', borderTop: '1px solid #eee', marginBottom: 64 }} />

          {/* Air Conditioning & HVAC */}
          <ServiceSection
            icon="❄️" title="Air Conditioning & HVAC"
            desc="Climate control and ventilation systems for optimal comfort. Installation, servicing, and emergency support for all AC and HVAC needs."
            checks={['AC Installation','HVAC Systems','Ventilation Design','Ductwork Installation','Maintenance Services','Emergency AC Solutions']}
            img={IMGS.hvac} imgRight={true}
            bg="linear-gradient(135deg,#1a2a4a,#0a1a3a)"
          />

          <hr style={{ border: 'none', borderTop: '1px solid #eee', marginBottom: 64 }} />

          {/* Building Contracting */}
          <ServiceSection
            icon="🏗️" title="Building Contracting"
            desc="Comprehensive construction and contracting services. From fit-out to full renovation and new construction projects."
            checks={['General Construction','Renovation & Refurbishment','Interior Finishing','Project Management','Quality Assurance','On-time Delivery']}
            img={IMGS.building} imgRight={false}
            bg="linear-gradient(135deg,#3a2a1a,#2a1a0a)"
          />
        </div>
      </section>

      {/* ══ WHY CHOOSE ══ */}
      <section className="section bg-gray">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
            <h2 className="section-title">Why Choose Safety World?</h2>
            <p className="section-sub">We combine expertise, innovation, and customer commitment to deliver exceptional results</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid-4">
            {[
              ['🛡','Money Back Guarantee','100% satisfaction guaranteed or your money back'],
              ['🕐','One Month Free Trial','Experience our services risk free for 30 days'],
              ['👥','30 Minute Free Consultation','Expert guidance tailored to your specific needs'],
              ['⭐','24/7 Support','Round the clock monitoring and support'],
            ].map(([ic,t,d]) => (
              <motion.div key={t} variants={staggerItem} className="card" style={{ textAlign: 'center', padding: '28px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
                  <OIcon size={44}>{ic}</OIcon>
                </div>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 8 }}>{t}</div>
                <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>{d}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section style={{ background: 'linear-gradient(135deg,#f07c1f,#e8680a)', padding: '56px 24px', textAlign: 'center' }}>
        <motion.div className="container" style={{ maxWidth: 600, margin: '0 auto' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <h2 style={{ fontSize: 'clamp(22px,4vw,32px)', fontWeight: 800, color: '#fff', marginBottom: 10 }}>
            Ready to Secure Your Property?
          </h2>
          <p style={{ color: 'rgba(255,255,255,.9)', fontSize: 15, marginBottom: 32 }}>
            Contact us today for a free consultation with our fire safety &amp; MEP experts
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+97158571449" className="btn btn-outline-white" style={{ padding: '12px 28px' }}>Call: +971 58 571 4496</a>
            <a href="mailto:support@safetyworld.ae" className="btn btn-outline-white" style={{ padding: '12px 28px' }}>Email Us</a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
