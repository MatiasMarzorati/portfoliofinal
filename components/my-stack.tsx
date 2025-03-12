"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type StackCategory = "All" | "Backend" | "Frontend" | "Extras"

type Technology = {
  name: string
  icon: string
  category: Exclude<StackCategory, "All">
}

const stack: Technology[] = [
  // Backend
  {
    name: "Node.js",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-nodejs-jXd7gjmEtNFS3ODq70ZkBa8fgBj0uy.svg",
    category: "Backend",
  },
  {
    name: "NestJS",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-nestjs-uK11K5cZJ7Spm0lo1sVBAzD4XqOy69.svg",
    category: "Backend",
  },
  {
    name: "Python",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-python-xUVeh9QNm3HMyHhIOUF3VpnisssZfr.svg",
    category: "Backend",
  },
  {
    name: "Django",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-django-EsrbEp0pVd3JmNkJLIlNIPAFWKLAHS.svg",
    category: "Backend",
  },
  {
    name: "PHP",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/php-svgrepo-com-aoqdSJRzzbu6qL4jA2YLiKtaYtBMKJ.svg",
    category: "Backend",
  },
  {
    name: "Laravel",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laravel-svgrepo-com-CrocrHpVe7Tjx7iRKIogFyVvd7ykhG.svg",
    category: "Backend",
  },
  {
    name: "Java",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-java-llm2iDf9bZpFylpB4k92LSI1II4i2J.svg",
    category: "Backend",
  },

  // Frontend
  {
    name: "React",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/react-svgrepo-com-AHBGrV6u0NRyQgk3PqlUSCk9xnRYKs.svg",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-nextjs-iZs6eylHeoez8hWWMU0qIIg05ZTF6M.svg",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-typescript-Fu0mg4i8o4NWQJeEEd2RkXsR59BPWH.svg",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-javascript-Rr0gbE8TiLgaajlAnf6AkfeyWJoF2Z.svg",
    category: "Frontend",
  },
  {
    name: "HTML",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-html5-8Lofzm6HvaU3LLvDN1rmpDiI9AtpH3.svg",
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/css-3-svgrepo-com-zdllNsiJoEctm5W1OPoL3GjZydmrCD.svg",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tailwind-svgrepo-com-n2LRbwbSmPEBAkFzqJnV2FMy8AzurL.svg",
    category: "Frontend",
  },
  {
    name: "WordPress",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-wordpress-j6JnKjGSCIxFPAEN8rr8zbDSxcqaQp.svg",
    category: "Frontend",
  },

  // Databases
  {
    name: "MySQL",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mysql-logo-svgrepo-com-aqTE760JZiQSlW14YAAsfejjI0oJqB.svg",
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/postgresql-svgrepo-com-Wi8rJ9KUnrEGCeQjQ6E58Nk8AX6vL4.svg",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mongo-svgrepo-com-AAt7CroRNYmC3ANpJqvYGelStj8qsE.svg",
    category: "Backend",
  },

  // Extras
  {
    name: "Git",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-git-48-WJwY5YsR8inlMdIHbLi0ORk6jIrmbv.png",
    category: "Extras",
  },
  {
    name: "Docker",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/docker-svgrepo-com-q38DGdTvzHAPjGpuHPcslhAdUquhHr.svg",
    category: "Extras",
  },
  {
    name: "GraphQL",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/graphql-svgrepo-com-1ZhgO27jj4RkQdST5jqrvsbcPerf3J.svg",
    category: "Extras",
  },
  {
    name: "TensorFlow",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tensorflow-svgrepo-com-lf2qMIvCSf6zMQl3VkxbVYWqkaEgWv.svg",
    category: "Extras",
  },
  {
    name: "Linux",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linux-svgrepo-com-yMpUfuse1zz7jrpA3ZQSDkrdC39UXA.svg",
    category: "Extras",
  },
]

export function MyStack() {
  const [activeCategory, setActiveCategory] = useState<StackCategory>("All")
  const [animate, setAnimate] = useState(true)
  const [isChanging, setIsChanging] = useState(false)
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = theme === "system" ? systemTheme : theme

  useEffect(() => {
    if (isChanging) {
      const timer = setTimeout(() => {
        setIsChanging(false)
        setAnimate(true)
      }, 300) // This delay should match the exit animation duration
      return () => clearTimeout(timer)
    }
  }, [isChanging])

  const handleCategoryChange = (category: StackCategory) => {
    if (category !== activeCategory) {
      setAnimate(false)
      setIsChanging(true)
      setActiveCategory(category)
    }
  }

  const filteredStack = activeCategory === "All" ? stack : stack.filter((tech) => tech.category === activeCategory)

  return (
    <section id="my-stack" className="py-12 md:py-24 bg-background text-foreground">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-primary">
          My Stack
        </h2>

        <div className="flex justify-center space-x-4 mb-8">
          {(["All", "Backend", "Frontend", "Extras"] as StackCategory[]).map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryChange(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`
                ${
                  activeCategory === category
                    ? "bg-[#09b479] text-white hover:bg-[#09b479]/90"
                    : "bg-background text-primary border-primary dark:border-[#09b479] dark:text-[#09b479]"
                }
                hover:bg-[#09b479] hover:text-white transition-colors
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {filteredStack.map((tech, index) => (
            <Card
              key={tech.name}
              className={`bg-card text-card-foreground border-border overflow-hidden transition-all duration-300 ease-in-out
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)]
              `}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div
                  className={`transition-all duration-300 ease-in-out ${animate ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                  style={{ transitionDelay: `${index * 50 + 150}ms` }}
                >
                  {tech.name === "Django" && mounted ? (
                    <img
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      className={`w-16 h-16 mb-4 ${currentTheme === "dark" ? "invert" : ""}`}
                    />
                  ) : (
                    <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="w-16 h-16 mb-4" />
                  )}
                </div>
                <p className="text-lg font-semibold text-primary">{tech.name}</p>
                <p className="text-sm text-muted-foreground">{tech.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

