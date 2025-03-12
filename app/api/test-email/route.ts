import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function GET() {
  try {
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      return NextResponse.json({ error: "RESEND_API_KEY environment variable is not set" }, { status: 500 })
    }

    console.log("API Key exists (first 5 chars):", apiKey.substring(0, 5) + "...")

    const resend = new Resend(apiKey)

    // Test the API key with a simple API call that doesn't send an email
    const { data: domains, error: domainsError } = await resend.domains.list()

    if (domainsError) {
      console.error("Domains API error:", domainsError)
      return NextResponse.json({ error: `API key validation failed: ${domainsError.message}` }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Resend API key is valid",
      domains: domains || [],
    })
  } catch (error) {
    console.error("Test email route error:", error)
    return NextResponse.json({ error: "Failed to validate Resend API key" }, { status: 500 })
  }
}

