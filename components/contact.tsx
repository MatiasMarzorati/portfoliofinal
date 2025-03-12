"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Loader2, FileText } from "lucide-react"
import { sendContactEmail } from "@/actions/send-email"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        // Pass the message directly to toast
        toast(`Success! ${result.message}`)
        // Reset the form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form.reset()
      } else {
        setErrorMessage(result.message)
        // Pass the error message directly to toast
        toast(`Error: ${result.message}`)
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : "Something went wrong. Please try again later."
      setErrorMessage(errorMsg)
      // Pass the error message directly to toast
      toast(`Error: ${errorMsg}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-6">
            <Card className="bg-white dark:bg-black border border-[#09b479]/20 w-full">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Contact Information</CardTitle>
                <CardDescription className="text-gray-500 dark:text-gray-400 text-base">
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#09b479]/10">
                    <MapPin className="h-5 w-5 text-[#09b479]" />
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">Buenos Aires, Argentina</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#09b479]/10">
                    <Mail className="h-5 w-5 text-[#09b479]" />
                  </div>
                  <a
                    href="mailto:matiasfedericomarzorati@gmail.com"
                    className="text-lg text-gray-700 dark:text-gray-300 hover:text-[#09b479] transition-colors"
                  >
                    matiasfedericomarzorati@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#09b479]/10">
                    <Phone className="h-5 w-5 text-[#09b479]" />
                  </div>
                  <a
                    href="tel:+5491125130914"
                    className="text-lg text-gray-700 dark:text-gray-300 hover:text-[#09b479] transition-colors"
                  >
                    +54 9 11 2513-0914
                  </a>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#09b479] hover:bg-[#09b479]/90 text-white" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-5 w-5" />
                    View Resume
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <Card className="bg-white dark:bg-black border border-[#09b479]/20">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 dark:text-white">Send Me a Message</CardTitle>
              <CardDescription className="text-gray-500 dark:text-gray-400 text-base">
                Fill out the form below and I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <form id="contact-form" action={handleSubmit}>
              <CardContent className="space-y-4">
                {errorMessage && (
                  <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">{errorMessage}</div>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                      className="border-gray-300 dark:border-[#09b479]/20 dark:bg-black dark:text-white focus:border-[#09b479] focus:ring-[#09b479]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
                      className="border-gray-300 dark:border-[#09b479]/20 dark:bg-black dark:text-white focus:border-[#09b479] focus:ring-[#09b479]"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                    className="border-gray-300 dark:border-[#09b479]/20 dark:bg-black dark:text-white focus:border-[#09b479] focus:ring-[#09b479]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    required
                    className="border-gray-300 dark:border-[#09b479]/20 dark:bg-black dark:text-white focus:border-[#09b479] focus:ring-[#09b479]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    className="min-h-[120px] border-gray-300 dark:border-[#09b479]/20 dark:bg-black dark:text-white focus:border-[#09b479] focus:ring-[#09b479]"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <Button
                  type="submit"
                  className="w-full bg-[#09b479] hover:bg-[#09b479]/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Alternatively, you can email me directly at{" "}
                  <a href="mailto:matiasfedericomarzorati@gmail.com" className="text-[#09b479] hover:underline">
                    matiasfedericomarzorati@gmail.com
                  </a>
                </p>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

