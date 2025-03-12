import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Technologies() {
  const techCategories = [
    {
      title: "Frontend",
      description: "Technologies for building user interfaces",
      techs: ["React", "Next.js", "Vue.js", "Tailwind CSS", "SASS", "TypeScript"],
    },
    {
      title: "Backend",
      description: "Server-side technologies and databases",
      techs: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
    },
    {
      title: "DevOps & Tools",
      description: "Development and deployment tools",
      techs: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack"],
    },
  ]

  return (
    <section id="technologies" className="py-12 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Technologies I Use</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

