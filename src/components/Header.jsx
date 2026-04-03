import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

const NAV = [
  { label: 'Home', path: '/', page: 'home' },
  { label: 'IT Services', path: '/it-services', page: 'it' },
  { label: 'Fire & Safety', path: '/fire-safety', page: 'fire' },
]

export default function Header({ nav, page }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 860)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const Logo = () => (
    <div onClick={() => { nav('/'); setMenuOpen(false) }}
      style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', flexShrink: 0 }}>
      <img src={logo} alt="Safety World Dubai" style={{ height: 56, width: 'auto' }} />
    </div>
  )

  return (
    <header style={{
      background: '#fff',
      borderTop: '3px solid #f07c1f',
      borderBottom: '1px solid #e5e5e5',
      position: 'sticky', top: 0, zIndex: 100,
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 80, gap: 16,
      }}>
        <Logo />

        {/* Desktop nav */}
        {!mobile && (
          <nav style={{ display: 'flex', gap: 2 }}>
            {NAV.map(n => (
              <button key={n.page} onClick={() => nav(n.path)} style={{
                padding: '7px 15px', fontSize: 14,
                fontWeight: page === n.page ? 600 : 400,
                color: page === n.page ? '#f07c1f' : '#444',
                background: 'none', border: 'none', cursor: 'pointer',
                borderRadius: 4, transition: 'color .15s', fontFamily: 'Inter,sans-serif',
              }}
              onMouseEnter={e => { if (page !== n.page) e.target.style.color = '#f07c1f' }}
              onMouseLeave={e => { if (page !== n.page) e.target.style.color = '#444' }}
              >{n.label}</button>
            ))}
          </nav>
        )}

        {/* Desktop contact */}
        {!mobile && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end', flexShrink: 0 }}>
            {/* IT Group */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#f07c1f', textTransform: 'uppercase', letterSpacing: '0.05em' }}>IT Support:</span>
              <a href="tel:971585714969" style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#444', fontSize: 12, textDecoration: 'none', fontWeight: 500 }}>
                <span style={{ color: '#f07c1f', fontSize: 13 }}>📞</span> +971 58 571 4969
              </a>
              <a href="mailto:Support@safetyworld.ae" style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#444', fontSize: 12, textDecoration: 'none', fontWeight: 500 }}>
                <span style={{ color: '#f07c1f', fontSize: 13 }}>✉</span> Support@safetyworld.ae
              </a>
            </div>
            {/* Safety Group */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#f07c1f', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Fire & Safety:</span>
              <a href="tel:971555111643" style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#444', fontSize: 12, textDecoration: 'none', fontWeight: 500 }}>
                <span style={{ color: '#f07c1f', fontSize: 13 }}>📞</span> +971 55 511 1643
              </a>
              <a href="mailto:info@safetyworld.ae" style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#444', fontSize: 12, textDecoration: 'none', fontWeight: 500 }}>
                <span style={{ color: '#f07c1f', fontSize: 13 }}>✉</span> info@safetyworld.ae
              </a>
            </div>
          </div>
        )}

        {/* Mobile hamburger */}
        {mobile && (
          <button onClick={() => setMenuOpen(o => !o)} style={{
            fontSize: 22, color: '#333', background: 'none', border: 'none',
            cursor: 'pointer', padding: 4, lineHeight: 1,
          }}>{menuOpen ? '✕' : '☰'}</button>
        )}
      </div>

      {/* Mobile dropdown */}
      {mobile && menuOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #eee', padding: '8px 20px 20px' }}>
          {NAV.map(n => (
            <button key={n.page} onClick={() => { nav(n.path); setMenuOpen(false) }} style={{
              display: 'block', width: '100%', textAlign: 'left',
              padding: '13px 0', fontSize: 15,
              fontWeight: page === n.page ? 600 : 400,
              color: page === n.page ? '#f07c1f' : '#333',
              background: 'none', border: 'none',
              borderBottom: '1px solid #f0f0f0',
              cursor: 'pointer', fontFamily: 'Inter,sans-serif',
            }}>{n.label}</button>
          ))}
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ borderBottom: '1px solid #f0f0f0', pb: 8, mb: 4 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#f07c1f', textTransform: 'uppercase', mb: 6 }}>IT Support</div>
              <a href="tel:971585714969" style={{ color: '#444', fontSize: 14, display: 'flex', gap: 8, mb: 6 }}>
                <span style={{ color: '#f07c1f' }}>📞</span> +971 58 571 4969
              </a>
              <a href="mailto:Support@safetyworld.ae" style={{ color: '#444', fontSize: 14, display: 'flex', gap: 8 }}>
                <span style={{ color: '#f07c1f' }}>✉</span> Support@safetyworld.ae
              </a>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#f07c1f', textTransform: 'uppercase', mb: 6 }}>Fire & Safety</div>
              <a href="tel:971555111643" style={{ color: '#444', fontSize: 14, display: 'flex', gap: 8, mb: 6 }}>
                <span style={{ color: '#f07c1f' }}>📞</span> +971 55 511 1643
              </a>
              <a href="mailto:info@safetyworld.ae" style={{ color: '#444', fontSize: 14, display: 'flex', gap: 8 }}>
                <span style={{ color: '#f07c1f' }}>✉</span> info@safetyworld.ae
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
