"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Experience = {
  title: string
  company: string
  period: string
  description: string
  details: string[]
}

const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Public Security Institute",
    period: "2023 - Present",
    description: "Software development using NestJS, React, and Python for internal institute applications.",
    details: [
      "Development and maintenance of internal web applications for institutional management.",
      "Implementation of efficient architectures with NestJS and React.",
      "Optimization of administrative processes through digital solutions.",
      "Automation of workflows with Python and SQL databases.",
    ],
  },
  {
    title: "Co-founder and Software Developer",
    company: "Mazzo Developments",
    period: "2023 - Present",
    description: "Development of technological solutions using Next.js and NestJS for clients and internal projects.",
    details: [
      "Development and maintenance of scalable web platforms and applications.",
      "Creation of customized solutions for clients across various industries.",
      "Integration of modern technologies to enhance user experience.",
      "Project management and leadership in software development.",
    ],
  },

  {
    title: "Freelance Web Developer",
    company: "Self-employed",
    period: "2019 - 2022",
    description: "Creation and maintenance of websites for small businesses and acquaintances.",
    details: [
      "Development of a website for a fabric-selling store.",
      "Design and development of websites for private clients.",
      "Optimization of websites to improve performance and accessibility.",
      "Implementation of customized solutions based on client needs.",
    ],
  },
]

export function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="py-12 md:py-24 relative overflow-hidden w-full">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#09b479] via-[#06d6a0] to-[#1b9aaa] opacity-30"></div>
        <div className="absolute inset-0 animate-pulse">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#09b479] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#06d6a0] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#1b9aaa] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-white">
          My Experience
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 ease-in-out cursor-pointer bg-white/80 backdrop-blur-sm ${
                hoveredIndex !== null && hoveredIndex !== index ? "blur-sm" : ""
              } ${index === 2 && experiences.length === 3 ? "md:col-span-2 md:max-w-md lg:col-span-1" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-[#09b479] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-10"></div>
              <CardHeader>
                <CardTitle className="text-[#09b479]">{exp.title}</CardTitle>
                <CardDescription>
                  {exp.company} | {exp.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-600">
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

