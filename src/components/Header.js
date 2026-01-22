import * as React from "react"

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.headerContent}>
        <h1 style={styles.title}>Your Site Title</h1>
        <p style={styles.subtitle}>Welcome to your Gatsby site</p>
      </div>
    </header>
  )
}

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '2rem 1rem',
    gridArea: 'header',
    borderBottom: '4px solid #0066cc',
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    margin: 0,
    fontSize: '2rem',
  },
  subtitle: {
    margin: '0.5rem 0 0 0',
    fontSize: '0.9rem',
    opacity: 0.9,
  },
}