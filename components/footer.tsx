import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { LinkPreview } from "@/components/ui/link-preview"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Matias Marzorati. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <LinkPreview url="https://github.com/matiasmarzorati" width={200} height={150}>
            <Button variant="ghost" size="icon" className="text-[#09b479] hover:bg-[#09b479]/10">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </LinkPreview>
          <LinkPreview
            url="https://www.linkedin.com/in/matiasmarzorati/"
            width={200}
            height={150}
            isStatic={true}
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9ewR5w377pRa7eYmjaV3MqyQ12vvVf.png"
          >
            <Button variant="ghost" size="icon" className="text-[#09b479] hover:bg-[#09b479]/10">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </LinkPreview>
          <LinkPreview url="https://twitter.com/matiasmarzorati" width={200} height={150}>
            <Button variant="ghost" size="icon" className="text-[#09b479] hover:bg-[#09b479]/10">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
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
    </footer>
  )
}

