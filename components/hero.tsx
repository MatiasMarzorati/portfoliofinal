"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { LinkPreview } from "@/components/ui/link-preview"
import { useState, useEffect } from "react"
import { smoothScroll } from "@/utils/smoothScroll"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { useTheme } from "next-themes"

export function Hero() {
  const [isClient, setIsClient] = useState(false)
  const { theme } = useTheme()
  const [systemTheme, setSystemTheme] = useState<"dark" | "light">("light")

  useEffect(() => {
    setIsClient(true)

    // Check system preference
    if (typeof window !== "undefined") {
      const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      setSystemTheme(darkModeMediaQuery.matches ? "dark" : "light")

      // Listen for changes in system preference
      const handleChange = (e: MediaQueryListEvent) => {
        setSystemTheme(e.matches ? "dark" : "light")
      }

      darkModeMediaQuery.addEventListener("change", handleChange)
      return () => darkModeMediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, target: string) => {
    e.preventDefault()
    if (isClient) {
      smoothScroll(target)
    }
  }

  const words = [
    {
      text: "Hi, I'm",
      className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white",
    },
    {
      text: "Matias Marzorati",
      className:
        "text-[1.9375rem] sm:text-[2.3125rem] md:text-[3.1875rem] lg:text-[3.8125rem] text-[#09b479] dark:text-[#09b479]",
    },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#09b479]/20 via-[#09b479]/10 to-[#09b479]/5 animate-[gradient_8s_ease_infinite]" />

        {/* Animated circles */}
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#09b479] opacity-20 blur-3xl animate-[blob_7s_infinite]" />
        <div className="absolute top-1/4 -right-20 h-60 w-60 rounded-full bg-[#09b479] opacity-20 blur-3xl animate-[blob_10s_infinite_2s]" />
        <div className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-[#09b479] opacity-20 blur-3xl animate-[blob_8s_infinite_1s]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(9,180,121,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(9,180,121,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="mt-8">
              <h1 className="font-bold tracking-tighter">
                <TypewriterEffectSmooth
                  words={words}
                  className="inline-flex"
                  cursorClassName="!w-[3px] !h-8 sm:!h-10 md:!h-12 lg:!h-14 !bg-[#09b479]"
                />
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl -mt-1">
              I'm a full-stack developer currently in my fourth year of Computer Engineering. Since I was 17, I've been deeply passionate about technology, constantly exploring new trends and improving my skills. I thrive on building innovative solutions, solving complex problems, and continuously learning to stay ahead in the ever-evolving tech landscape.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-[#09b479] hover:bg-[#09b479]/90 text-white">
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}>
                  <span className="relative z-10">Contact Me</span>
                  <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" asChild className="border-[#09b479] text-[#09b479] hover:bg-[#09b479]/10">
                <a href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")}>
                  <span className="relative z-10">View My Work</span>
                </a>
              </Button>
            </div>
            <div className="flex gap-4 mt-4">
              <LinkPreview
                url="https://github.com/matiasmarzorati"
                className="text-[#09b479] hover:bg-[#09b479]/10"
                width={200}
                height={150}
              >
                <Button variant="ghost" size="icon" className="text-[#09b479] hover:bg-[#09b479]/10">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </LinkPreview>
              <LinkPreview
                url="https://www.linkedin.com/in/matiasmarzorati/"
                className="text-[#09b479] hover:bg-[#09b479]/10"
                isStatic={true}
                imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9ewR5w377pRa7eYmjaV3MqyQ12vvVf.png"
                width={200}
                height={150}
              >
                <Button variant="ghost" size="icon" className="text-[#09b479] hover:bg-[#09b479]/10">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </LinkPreview>
              <Button variant="ghost" size="icon" className="text-[#09b479] hover:bg-[#09b479]/10" asChild>
                <a href="mailto:contact@matiasmarzorati.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center mb-12 sm:mb-16">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#09b479] to-[#09b479]/50 blur-xl opacity-30 animate-pulse"></div>
              <img
                alt="Matias Marzorati"
                className="relative z-10 aspect-square overflow-hidden rounded-full object-cover object-center border-4 border-[#09b479] animate-[float_6s_ease-in-out_infinite]"
                height="400"
                src={
                  theme === "dark" || (theme === "system" && systemTheme === "dark")
                    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marzo.jpg-wB0izLdD5IXj4MOFYSZXlPyIRaePPD.jpeg"
                    : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marzo2.jpg-GkpCNUOMZNN7C5nI4KfoKv9fPoPjnI.jpeg"
                }
                width="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

