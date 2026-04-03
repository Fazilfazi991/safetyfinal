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
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }}>
            <a href="tel:971585714969" style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#444', fontSize: 13, textDecoration: 'none' }}>
              <span style={{ color: '#f07c1f' }}>📞</span> +971 58 571 4969
            </a>
            <a href="mailto:Support@safetyworld.ae" style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#444', fontSize: 13, textDecoration: 'none' }}>
              <span style={{ color: '#f07c1f' }}>✉</span> Support@safetyworld.ae
            </a>
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
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href="tel:971585714969" style={{ color: '#444', fontSize: 14, display: 'flex', gap: 8 }}>
              <span style={{ color: '#f07c1f' }}>📞</span> +971 58 571 4969
            </a>
            <a href="mailto:Support@safetyworld.ae" style={{ color: '#444', fontSize: 14, display: 'flex', gap: 8 }}>
              <span style={{ color: '#f07c1f' }}>✉</span> Support@safetyworld.ae
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
