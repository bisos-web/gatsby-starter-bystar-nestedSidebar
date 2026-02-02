import * as React from "react"

export default function Header() {
  return (
    <header className="bg-gray-800 text-white px-4 md:px-8 py-4 md:py-8 border-b-4 border-blue-600">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-4xl m-0 font-bold">Your Site Title</h1>
        <p className="text-sm md:text-base m-0 mt-2 opacity-90">Welcome to your ByStar Nested Sidebar Gatsby site</p>
      </div>
    </header>
  )
}
