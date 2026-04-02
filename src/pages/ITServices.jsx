import React from 'react'
import { motion } from 'framer-motion'

const IMGS = {
  homeUser:   'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80',
  smb:        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  enterprise: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
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
    <div style={{ width: size, height: size, borderRadius: '50%', border: '2px solid #f07c1f', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f07c1f', fontSize: size * 0.42 }}>
      {children}
    </div>
  )
}

function IconServiceCard({ icon, title, desc }) {
  return (
    <motion.div variants={staggerItem} className="card" style={{ padding: '22px 20px' }}>
      <div style={{ marginBottom: 12 }}><OIcon size={40}>{icon}</OIcon></div>
      <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 13, color: '#888', lineHeight: 1.55 }}>{desc}</div>
    </motion.div>
  )
}

function Segment({ img, imgRight, title, desc, checks, services }) {
  return (
    <div style={{ marginBottom: 64 }}>
      {/* Title + image row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: imgRight ? '1fr 1fr' : '1fr 1fr',
        gap: 48, alignItems: 'center', marginBottom: 32,
      }}
        className="split-segment"
      >
        {/* Text side */}
        <motion.div 
          style={{ order: imgRight ? 0 : 1 }}
          initial={{ opacity: 0, x: imgRight ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: 800, marginBottom: 14 }}>{title}</h2>
          <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75, marginBottom: 20 }}>{desc}</p>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {checks.map(c => <CheckItem key={c} text={c} />)}
          </motion.div>
        </motion.div>
        {/* Image side */}
        <motion.div 
          style={{ order: imgRight ? 1 : 0 }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div style={{ borderRadius: 12, overflow: 'hidden', height: 260 }}>
            <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </motion.div>
      </div>
      {/* Service icon cards */}
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid-3">
        {services.map(s => <IconServiceCard key={s.title} {...s} />)}
      </motion.div>
    </div>
  )
}

export default function ITServices({ nav }) {
  return (
    <div style={{ overflow: 'hidden' }}>
      {/* ══ HERO ══ */}
      <section style={{ background: 'linear-gradient(135deg,#2d2d2d,#3d2a1a,#4a3010)', padding: '72px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(240,124,31,.15) 0%, transparent 65%)' }} />
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
            style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.15 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Premium <span style={{ color: '#f07c1f' }}>IT Services</span> for Every Need
          </motion.h1>
          <motion.p 
            style={{ color: 'rgba(255,255,255,.8)', fontSize: 15, maxWidth: 520, lineHeight: 1.75, marginBottom: 32 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive IT support and services tailored for every business size — from home users to large enterprises
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

      {/* ══ SEGMENTS ══ */}
      <section className="section bg-white">
        <div className="container">

          {/* FOR HOME USERS */}
          <Segment
            img={IMGS.homeUser}
            imgRight={true}
            title="For Home Users"
            desc="Reliable IT support and smart home solutions for your personal computing needs. Whether you need quick troubleshooting or comprehensive home automation, we've got you covered."
            checks={['Expert technicians available 24/7', 'Remote and onsite support options']}
            services={[
              { icon: '🎧', title: 'Remote IT Support', desc: 'Quick troubleshooting and support from anywhere' },
              { icon: '👨‍💻', title: 'Onsite IT Support', desc: 'Professional technicians at your location' },
              { icon: '🏠', title: 'Home Automation', desc: 'Smart home setup and configuration' },
              { icon: '🔒', title: 'Home Security', desc: 'Security installations and monitoring' },
              { icon: '📶', title: 'WiFi Setup', desc: 'Optimised network installation' },
              { icon: '🖨️', title: 'Printer & Peripherals', desc: 'Installation and troubleshooting' },
            ]}
          />

          <hr style={{ border: 'none', borderTop: '1px solid #eee', marginBottom: 64 }} />

          {/* FOR SMB */}
          <Segment
            img={IMGS.smb}
            imgRight={false}
            title="For Small & Medium Businesses"
            desc="Scalable IT solutions designed to grow with your business. We provide comprehensive support that keeps your operations running smoothly."
            checks={['Dedicated account managers', 'Proactive monitoring and maintenance', 'Cloud and security solutions']}
            services={[
              { icon: '🎧', title: 'Remote IT Assistance', desc: '24/7 remote assistance for your business' },
              { icon: '🏢', title: 'Onsite IT Support', desc: 'Dedicated on-site technical support' },
              { icon: '📋', title: 'IT Managed Plans', desc: 'Comprehensive IT maintenance plans' },
              { icon: '☁️', title: 'Cloud Services', desc: 'Secure cloud infrastructure solutions' },
              { icon: '⚙️', title: 'IT Managed Services', desc: 'Complete IT management and monitoring' },
              { icon: '🛡', title: 'Cyber Security', desc: 'Advanced threat protection and compliance' },
            ]}
          />

          <hr style={{ border: 'none', borderTop: '1px solid #eee', marginBottom: 64 }} />

          {/* FOR ENTERPRISES */}
          <Segment
            img={IMGS.enterprise}
            imgRight={true}
            title="For Enterprises"
            desc="Enterprise-grade IT infrastructure and strategy consulting. We handle complex IT environments with precision and expertise."
            checks={['Strategy, planning and advisory', 'Enterprise-scale infrastructure', 'Dedicated support teams']}
            services={[
              { icon: '⚙️', title: 'IT Managed Services', desc: 'Enterprise-grade IT management' },
              { icon: '👥', title: 'IT Outsourcing', desc: 'Complete IT operations outsourcing' },
              { icon: '📊', title: 'IT Consultancy', desc: 'Strategic IT planning and consulting' },
              { icon: '🔒', title: 'Enterprise Security', desc: 'Enterprise security infrastructure' },
              { icon: '☁️', title: 'Cloud Infrastructure', desc: 'Comprehensive data security solutions' },
              { icon: '🗄️', title: 'Data Centre', desc: 'Secure data centre infrastructure' },
            ]}
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
              ['👥','30 Minute Free','Expert guidance tailored to your specific needs'],
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
            Ready to Upgrade Your IT Infrastructure?
          </h2>
          <p style={{ color: 'rgba(255,255,255,.9)', fontSize: 15, marginBottom: 32 }}>
            Contact us for a free 30-minute consultation with our IT experts
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
