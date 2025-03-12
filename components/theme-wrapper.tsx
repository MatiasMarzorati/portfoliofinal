"use client"

import type React from "react"

import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isChanging, setIsChanging] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(undefined)

  useEffect(() => {
    setMounted(true)
    setCurrentTheme(theme)

    const handleThemeChange = (event: CustomEvent) => {
      setIsChanging(true)
      setTimeout(() => {
        setTheme(event.detail)
        setIsChanging(false)
      }, 800) // This should match the duration of the fade-out animation
    }

    window.addEventListener("theme-change", handleThemeChange as EventListener)

    return () => {
      window.removeEventListener("theme-change", handleThemeChange as EventListener)
    }
  }, [theme, setTheme])

  if (!mounted) {
    return null
  }

  return (
    <AnimatePresence mode="wait">
      {!isChanging && (
        <motion.div
          key={currentTheme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

