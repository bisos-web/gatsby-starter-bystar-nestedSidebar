import * as React from "react"
import { useState } from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields (name, email, and message).")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.")
      return
    }

    try {
      // Send data to backend endpoint (you'll need to set this up)
      // For now, we'll just log it and show success message
      console.log("Form submitted:", formData)
      
      // Uncomment below for actual submission to a backend:
      // const response = await fetch("/.netlify/functions/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // })
      
      // if (!response.ok) {
      //   throw new Error("Failed to send message")
      // }

      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError("Failed to send your message. Please try again later.")
      console.error("Form error:", err)
    }
  }



  return (
    <Layout>
      <h1>Contact Us</h1>
      <p>
        We're part of the Libre-Halaal ByStar Digital Ecosystem. We value your privacy and autonomy.
        Your information will be handled with care and transparency.
      </p>

      <div className="p-4 mb-8 bg-blue-50 text-blue-900 border border-blue-200 rounded text-sm leading-relaxed">
        <strong>About ByStar:</strong> This site is built using Gatsby and is part of a larger initiative 
        to create a privacy-respecting, autonomy-preserving digital ecosystem. We believe in end-to-end 
        communications and transparent services. <a href="/explore/help">Learn more about our values.</a>
      </div>

      <div className="max-w-xl my-8">
        {submitted && (
          <div className="p-4 mb-6 bg-green-100 text-green-900 border border-green-200 rounded">
            ✓ Thank you! Your message has been sent successfully. We'll be in touch soon.
          </div>
        )}

        {error && (
          <div className="p-4 mb-6 bg-red-100 text-red-900 border border-red-200 rounded">
            ✗ {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-800">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 text-base border border-gray-300 rounded"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-800">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-base border border-gray-300 rounded"
              placeholder="your.email@example.com"
              required
            />
            <small className="text-gray-600 block mt-1">
              We'll use this to respond to your message. Your email is private.
            </small>
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block mb-2 font-semibold text-gray-800">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 text-base border border-gray-300 rounded"
              placeholder="What is this about?"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-semibold text-gray-800">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 text-base border border-gray-300 rounded resize-vertical"
              style={{minHeight: "150px"}}
              placeholder="Your message here..."
              required
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 text-base bg-bystar-navy text-white rounded font-semibold cursor-pointer hover:bg-opacity-90 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      <h2>Other Ways to Connect</h2>
      <ul>
        <li><strong>Email:</strong> contact@example.com (or your ByStar email address for secure communication)</li>
        <li><strong>Questions?</strong> Visit our <a href="/explore/help">Help page</a> for FAQs and support resources</li>
        <li><strong>About Us:</strong> Learn more about our team and mission on the <a href="/about">About page</a></li>
        <li><strong>Accessibility:</strong> Have accessibility questions? Check our <a href="/explore/accessibility">Accessibility page</a></li>
      </ul>

      <h2>Privacy & Data Handling</h2>
      <p>
        In the spirit of ByStar's commitment to privacy and autonomy:
      </p>
      <ul>
        <li>Your message data will be securely stored and handled with care</li>
        <li>We will not share your contact information with third parties</li>
        <li>We will respond to your message within a reasonable timeframe</li>
        <li>You can request deletion of your data at any time</li>
        <li>Our infrastructure is built on open-source, transparent software</li>
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact" />

export default ContactPage