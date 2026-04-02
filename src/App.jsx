import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Home from './pages/Home.jsx'
import ITServices from './pages/ITServices.jsx'
import FireSafety from './pages/FireSafety.jsx'

function getPage(path) {
  if (path === '/it-services') return 'it'
  if (path === '/fire-safety') return 'fire'
  return 'home'
}

export default function App() {
  const [page, setPage] = useState(getPage(window.location.pathname))

  useEffect(() => {
    const fn = () => setPage(getPage(window.location.pathname))
    window.addEventListener('popstate', fn)
    return () => window.removeEventListener('popstate', fn)
  }, [])

  function nav(path) {
    window.history.pushState({}, '', path)
    setPage(getPage(path))
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <>
      <Header nav={nav} page={page} />
      <main style={{ minHeight: 'calc(100vh - 300px)', position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {page === 'home' && <Home nav={nav} />}
            {page === 'it'   && <ITServices nav={nav} />}
            {page === 'fire' && <FireSafety nav={nav} />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer nav={nav} />
      <WhatsAppButton />
    </>
  )
}
