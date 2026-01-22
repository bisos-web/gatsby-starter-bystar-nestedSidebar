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

  const formStyles = {
    container: {
      maxWidth: "600px",
      margin: "2rem 0",
    },
    formGroup: {
      marginBottom: "1.5rem",
    },
    label: {
      display: "block",
      marginBottom: "0.5rem",
      fontWeight: "600",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "0.75rem",
      fontSize: "1rem",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontFamily: "inherit",
      boxSizing: "border-box",
    },
    textarea: {
      width: "100%",
      padding: "0.75rem",
      fontSize: "1rem",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontFamily: "inherit",
      boxSizing: "border-box",
      minHeight: "150px",
      resize: "vertical",
    },
    button: {
      padding: "0.75rem 1.5rem",
      fontSize: "1rem",
      backgroundColor: "#001a4d",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "600",
    },
    buttonHover: {
      backgroundColor: "#003d99",
    },
    successMessage: {
      padding: "1rem",
      marginBottom: "1.5rem",
      backgroundColor: "#d4edda",
      color: "#155724",
      border: "1px solid #c3e6cb",
      borderRadius: "4px",
    },
    errorMessage: {
      padding: "1rem",
      marginBottom: "1.5rem",
      backgroundColor: "#f8d7da",
      color: "#721c24",
      border: "1px solid #f5c6cb",
      borderRadius: "4px",
    },
    required: {
      color: "#dc3545",
    },
    infoBox: {
      padding: "1rem",
      marginBottom: "2rem",
      backgroundColor: "#e7f3ff",
      color: "#004085",
      border: "1px solid #b8daff",
      borderRadius: "4px",
      fontSize: "0.95rem",
      lineHeight: "1.6",
    },
  }

  return (
    <Layout>
      <h1>Contact Us</h1>
      <p>
        We're part of the Libre-Halaal ByStar Digital Ecosystem. We value your privacy and autonomy.
        Your information will be handled with care and transparency.
      </p>

      <div style={formStyles.infoBox}>
        <strong>About ByStar:</strong> This site is built using Gatsby and is part of a larger initiative 
        to create a privacy-respecting, autonomy-preserving digital ecosystem. We believe in end-to-end 
        communications and transparent services. <a href="/explore/help">Learn more about our values.</a>
      </div>

      <div style={formStyles.container}>
        {submitted && (
          <div style={formStyles.successMessage}>
            ✓ Thank you! Your message has been sent successfully. We'll be in touch soon.
          </div>
        )}

        {error && (
          <div style={formStyles.errorMessage}>
            ✗ {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={formStyles.formGroup}>
            <label htmlFor="name" style={formStyles.label}>
              Name <span style={formStyles.required}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={formStyles.input}
              placeholder="Your full name"
              required
            />
          </div>

          <div style={formStyles.formGroup}>
            <label htmlFor="email" style={formStyles.label}>
              Email <span style={formStyles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={formStyles.input}
              placeholder="your.email@example.com"
              required
            />
            <small style={{color: '#666', marginTop: '0.25rem', display: 'block'}}>
              We'll use this to respond to your message. Your email is private.
            </small>
          </div>

          <div style={formStyles.formGroup}>
            <label htmlFor="subject" style={formStyles.label}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={formStyles.input}
              placeholder="What is this about?"
            />
          </div>

          <div style={formStyles.formGroup}>
            <label htmlFor="message" style={formStyles.label}>
              Message <span style={formStyles.required}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={formStyles.textarea}
              placeholder="Your message here..."
              required
            />
          </div>

          <button
            type="submit"
            style={formStyles.button}
            onMouseEnter={(e) => (e.target.style.backgroundColor = formStyles.buttonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = formStyles.button.backgroundColor)}
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