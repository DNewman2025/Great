import React from 'react'

function About() {
  return (
    <div className="about-page">
      <h1>About Hosted247</h1>
      
      <p>
        Welcome to <strong>Hosted247</strong>, your premier destination for web development insights, 
        modern technology tutorials, and industry best practices. We're passionate about helping 
        developers at all levels stay current with the rapidly evolving world of web development.
      </p>

      <h2 style={{ fontSize: '2rem', margin: '2rem 0 1rem 0', color: '#333' }}>Our Mission</h2>
      <p>
        Our mission is simple: to provide high-quality, practical content that empowers developers 
        to build better web applications. Whether you're just starting your coding journey or 
        you're a seasoned professional looking to stay updated with the latest trends, we have 
        something valuable for you.
      </p>

      <h2 style={{ fontSize: '2rem', margin: '2rem 0 1rem 0', color: '#333' }}>What We Cover</h2>
      <ul style={{ margin: '1rem 0 1rem 2rem', lineHeight: '1.8' }}>
        <li>Modern JavaScript (ES6+) and React development</li>
        <li>CSS techniques including Grid, Flexbox, and responsive design</li>
        <li>Web performance optimization strategies</li>
        <li>Best practices for accessible and inclusive web design</li>
        <li>Industry trends and emerging technologies</li>
        <li>Developer tools and workflow optimization</li>
      </ul>

      <h2 style={{ fontSize: '2rem', margin: '2rem 0 1rem 0', color: '#333' }}>Our Approach</h2>
      <p>
        We believe in learning by doing. Our articles combine theoretical knowledge with practical 
        examples and real-world applications. Each post is carefully crafted to provide actionable 
        insights that you can immediately apply to your projects.
      </p>

      <blockquote style={{
        borderLeft: '4px solid #667eea',
        paddingLeft: '1rem',
        margin: '2rem 0',
        fontStyle: 'italic',
        background: '#f8f9ff',
        padding: '1rem',
        borderRadius: '0 5px 5px 0'
      }}>
        "The best way to learn web development is through continuous practice and staying 
        updated with the latest technologies and best practices."
      </blockquote>

      <h2 style={{ fontSize: '2rem', margin: '2rem 0 1rem 0', color: '#333' }}>Why Choose Hosted247?</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', margin: '2rem 0' }}>
        <div style={{ padding: '1.5rem', background: '#f8f9ff', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Quality Content</h3>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>
            Every article is thoroughly researched and tested to ensure accuracy and relevance.
          </p>
        </div>
        
        <div style={{ padding: '1.5rem', background: '#f8f9ff', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Practical Focus</h3>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>
            We focus on real-world applications and provide code examples you can use immediately.
          </p>
        </div>
        
        <div style={{ padding: '1.5rem', background: '#f8f9ff', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Regular Updates</h3>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>
            We consistently publish new content to keep you informed about the latest developments.
          </p>
        </div>
      </div>

      <h2 style={{ fontSize: '2rem', margin: '2rem 0 1rem 0', color: '#333' }}>Get In Touch</h2>
      <p>
        We love hearing from our readers! Whether you have questions about our content, 
        suggestions for future topics, or just want to share your experiences, we're here to listen.
      </p>

      <p>
        <strong>Hosted247</strong> is more than just a blog—it's a community of developers 
        committed to continuous learning and improvement. Join us on this exciting journey 
        of web development mastery!
      </p>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '3rem', 
        padding: '2rem', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        borderRadius: '10px',
        color: 'white'
      }}>
        <h3 style={{ marginBottom: '1rem', color: 'white' }}>Ready to Start Learning?</h3>
        <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
          Explore our latest articles and discover new ways to enhance your web development skills.
        </p>
        <a 
          href="/" 
          style={{ 
            display: 'inline-block',
            background: 'white', 
            color: '#667eea',
            padding: '0.75rem 2rem',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: '600',
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
        >
          Browse Articles
        </a>
      </div>
    </div>
  )
}

export default About