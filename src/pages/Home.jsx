import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { blogPosts } from '../data/blogPosts'

function Home() {
  return (
    <div>
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>
          Welcome to Hosted247
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          Discover the latest insights in web development, modern technologies, and best practices. 
          Our curated content helps developers stay ahead of the curve.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          Latest Posts
        </h2>
        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <img 
                src={post.image} 
                alt={post.title}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x400/667eea/ffffff?text=Hosted247'
                }}
              />
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span>By {post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.9rem', color: '#888' }}>
                    {format(new Date(post.date), 'MMMM d, yyyy')}
                  </span>
                  <Link to={`/post/${post.id}`} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home