import { useState, useEffect, useRef } from 'react'
import Cover from './components/Cover/Cover'
import MenuShell from './components/MenuShell/MenuShell'
import './globals.css'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('about')
  const cursorRef = useRef(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const checkTouch = () => setIsTouch(true)
    window.addEventListener('touchstart', checkTouch, { once: true })

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchstart', checkTouch)
    }
  }, [])

  return (
    <>
      {isOpen ? (
        <MenuShell activeTab={activeTab} onTabChange={setActiveTab} />
      ) : (
        <Cover onOpen={() => setIsOpen(true)} />
      )}
      {!isTouch && (
        <div
          ref={cursorRef}
          style={{
            position: 'fixed',
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: 'var(--matcha-mid)',
            pointerEvents: 'none',
            mixBlendMode: 'multiply',
            zIndex: 9999,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 150ms ease',
          }}
        />
      )}
    </>
  )
}
