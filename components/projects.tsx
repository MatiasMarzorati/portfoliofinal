import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { LinkPreview } from "@/components/ui/link-preview"

export function Projects() {
  const projects = [
    {
      title: "Team Tasker App",
      description: "Development of a task management application, working on both the frontend and backend.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QvXNgcigjRihlzWphQ4PnMPa5sqCxT.png",
      tags: ["React", "Node.js", "MongoDB", "Nest"],
      demoUrl: "https://teamtasker.mazzodevelopments.com",
      githubUrl: "https://github.com/TeamTaskerUB",
      demoPreviewImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OtMxcvr8wP6UPNmIxWnRBqYjCr7ubn.png",
    },
    {
      title: "PDF Summarization for Police Education",
      description:
        "An application to summarize advanced education PDFs for police officers at the Public Security Institute.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-03-12%20a%20la%28s%29%2012.29.52%E2%80%AFp.%C2%A0m.-gP2pixIT8lx9XArSj251F7Fo15PvcF.png",
      tags: ["Next.js", "React", "Python", "Flask"],
      // Remove demoUrl and githubUrl properties
    },
  ]

  return (
    <section id="projects" className="py-12 md:py-24 relative">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#09b479] via-[#06d6a0] to-[#1b9aaa] opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#09b479] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#06d6a0] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#1b9aaa] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">My Projects</h2>
            <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent work and personal projects
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 justify-items-center">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/40 backdrop-blur-md border-white/40 transition-all duration-300 hover:scale-105 shadow-lg max-w-sm mx-auto"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="aspect-video w-full object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle className="text-gray-800 font-bold text-lg">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-[#09b479]/80 text-white font-semibold text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.githubUrl && (
                  <LinkPreview
                    url={project.githubUrl}
                    width={200}
                    height={150}
                    className="[&_[data-radix-hover-card-content]]:z-[60]"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/60 text-gray-800 border-gray-400 hover:bg-white/80 text-xs"
                    >
                      <Github className="mr-2 h-3 w-3" />
                      Code
                    </Button>
                  </LinkPreview>
                )}
                {project.demoUrl && (
                  <LinkPreview
                    url={project.demoUrl}
                    width={200}
                    height={150}
                    className="[&_[data-radix-hover-card-content]]:z-[60]"
                    isStatic={project.demoPreviewImage ? true : false}
                    imageSrc={project.demoPreviewImage}
                  >
                    <Button size="sm" className="bg-[#09b479] text-white hover:bg-[#09b479]/90 text-xs">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Demo
                    </Button>
                  </LinkPreview>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

