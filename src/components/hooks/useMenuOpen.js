import { useState, useCallback } from 'react'

export default function useMenuOpen(initialTab = 'about') {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(initialTab)

  const open = useCallback(() => setIsOpen(true), [])

  return { isOpen, activeTab, setActiveTab, open }
}
