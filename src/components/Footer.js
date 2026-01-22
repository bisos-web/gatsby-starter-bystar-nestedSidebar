import * as React from "react"

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <p style={styles.footerLinks}>
          <a href="#privacy" style={styles.link}>Privacy Policy</a> | 
          <a href="#terms" style={styles.link}>Terms of Service</a>
        </p>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '2rem 1rem',
    textAlign: 'center',
    gridArea: 'footer',
    borderTop: '4px solid #0066cc',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  footerLinks: {
    margin: '1rem 0 0 0',
    fontSize: '0.9rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  },
}
