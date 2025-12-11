import { Dot, Home, Mail, Phone } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

import ContactForm from "@/components/forms/contact"

export const metadata: Metadata = {
  title: "Contact us"
}

function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative mt-24 lg:pt-16 md:pt-12 max-sm:pt-4 flex items-center justify-end flex-col">
        <h2 className="text-center text-4xl section-title font-sans"><span>Blogs</span></h2>

        <div className="flex gap-1 items-center mt-4">
          <Home className="w-4 h-4" />
          <Link
            href={'/'}
            className="opacity-90 hover:underline hover:opacity-100"
          >Home</Link>
          <Dot />
          <p className="text-muted-foreground">Contact</p>
        </div>
      </div>

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-6">
        <div className="flex flex-col">
          <h1 className="text-4xl font-sans">Contact Aklog</h1>
          <p className="mt-2 text-muted-foreground">I am here to help and answer any question you might have. I look forward to hearing from you</p>

          <div className="mt-12 flex items-center gap-3">
            <Mail className="w-4 h-4" />
            <p className="text-sm">yakubbaevdev@gmail.com</p>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-sans mb-2">Contact form</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactPage