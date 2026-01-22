import * as React from "react"
import { useLocation } from "@reach/router"
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import SiblingTabs from './SiblingTabs'

// Normalize path for comparison (remove trailing slash)
function normalizePath(path) {
  return path === "/" ? "/" : path.replace(/\/$/, "")
}

export default function Layout({ 
  children, 
  showHeader = true, 
  showSidebar = true, 
  showFooter = true 
}) {
  const location = useLocation()
  const currentPath = normalizePath(location.pathname)
  
  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerWrapper}>
        {showHeader && <Header />}
        {!showSidebar && <SiblingTabs currentPath={currentPath} />}
        <div style={styles.mainWrapper}>
          {showSidebar && <Sidebar />}
          <main style={styles.main}>{children}</main>
        </div>
        {showFooter && <Footer />}
      </div>
    </div>
  )
}

const styles = {
  outerContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#E1EBDD', // margin color from mohsen.1.banan.byname.net
  },
  innerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    maxWidth: '1152px',
    width: '100%',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderLeft: '2px solid #001a4d',
    borderRight: '2px solid #001a4d',
    borderTop: '2px solid #001a4d',
  },
  mainWrapper: {
    display: 'flex',
    flex: 1,
  },
  main: {
    flex: 1,
    padding: '2rem',
  },
}