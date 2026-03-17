import { useState, useCallback, useRef } from 'react'

export default function usePanelTransition(activeTab) {
  const [displayedTab, setDisplayedTab] = useState(activeTab)
  const [transitioning, setTransitioning] = useState(false)
  const prevTab = useRef(activeTab)

  const handleTabChange = useCallback((newTab) => {
    if (newTab === prevTab.current) return
    setTransitioning(true)

    // After fade-out duration, swap the panel
    setTimeout(() => {
      setDisplayedTab(newTab)
      prevTab.current = newTab
      setTransitioning(false)
    }, 150) // --dur-panel-out
  }, [])

  return { displayedTab, transitioning, handleTabChange }
}
