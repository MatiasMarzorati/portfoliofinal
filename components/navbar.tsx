"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X, FileText } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { smoothScroll } from "@/utils/smoothScroll"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Experience", href: "#experience" },
    { name: "Stack", href: "#my-stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    smoothScroll(href)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <a href="#" onClick={(e) => handleScroll(e, "#")} className="text-xl font-bold text-[#09b479]">
          MM
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-sm font-medium transition-colors hover:text-[#09b479]"
            >
              {item.name}
            </a>
          ))}
          <Button
            asChild
            size="sm"
            variant="default"
            className="bg-[#09b479] hover:bg-[#09b479]/90 text-white rounded-full"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <FileText className="mr-1 h-4 w-4" />
              <span>Resume</span>
            </a>
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <Button
            asChild
            size="sm"
            variant="default"
            className="bg-[#09b479] hover:bg-[#09b479]/90 text-white rounded-full"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <FileText className="mr-1 h-4 w-4" />
              <span>Resume</span>
            </a>
          </Button>
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="container md:hidden overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col space-y-4 pb-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-sm font-medium transition-colors hover:text-[#09b479]"
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

