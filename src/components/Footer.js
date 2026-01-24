import * as React from "react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-4 md:px-8 py-8 text-center border-t-4 border-blue-600 mt-auto">
      <div className="max-w-6xl mx-auto">
        <p className="m-0">
          <a href="#privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</a> | 
          <a href="#terms" className="text-blue-400 hover:text-blue-300 ml-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  )
}
