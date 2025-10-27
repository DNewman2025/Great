import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Hosted247. All rights reserved. Built with React & Vite.</p>
      </div>
    </footer>
  )
}

export default Footer