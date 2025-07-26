import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { format } from 'date-fns'
import { blogPosts } from '../data/blogPosts'

function BlogPost() {
  const { id } = useParams()
  const post = blogPosts.find(p => p.id === parseInt(id))

  if (!post) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 0' }}>
        <h1>Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link to="/" className="read-more" style={{ marginTop: '1rem', display: 'inline-block' }}>
          ← Back to Home
        </Link>
      </div>
    )
  }

  // Simple markdown-to-HTML converter for basic formatting
  const renderContent = (content) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} style={{ fontSize: '2.5rem', margin: '2rem 0 1rem 0', color: '#333' }}>{line.slice(2)}</h1>
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} style={{ fontSize: '2rem', margin: '2rem 0 1rem 0', color: '#333' }}>{line.slice(3)}</h2>
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} style={{ fontSize: '1.5rem', margin: '1.5rem 0 0.5rem 0', color: '#444' }}>{line.slice(4)}</h3>
        }

        // Blockquotes
        if (line.startsWith('> ')) {
          return (
            <blockquote key={index} style={{
              borderLeft: '4px solid #667eea',
              paddingLeft: '1rem',
              margin: '1.5rem 0',
              fontStyle: 'italic',
              background: '#f8f9ff',
              padding: '1rem',
              borderRadius: '0 5px 5px 0'
            }}>
              {line.slice(2)}
            </blockquote>
          )
        }

        // Code blocks
        if (line.startsWith('```')) {
          return null // Handle code blocks separately if needed
        }

        // Lists
        if (line.startsWith('- ')) {
          return <li key={index} style={{ margin: '0.5rem 0' }}>{line.slice(2)}</li>
        }

        // Regular paragraphs
        if (line.trim() && !line.startsWith('#') && !line.startsWith('```')) {
          return <p key={index} style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>{line}</p>
        }

        return <br key={index} />
      })
  }

  return (
    <div>
      <nav style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ color: '#667eea', textDecoration: 'none', fontSize: '1rem' }}>
          ← Back to Home
        </Link>
      </nav>

      <article className="blog-post">
        <header>
          <h1>{post.title}</h1>
          <div className="blog-post-meta">
            <span>By {post.author}</span> • 
            <span> {format(new Date(post.date), 'MMMM d, yyyy')}</span> • 
            <span> {post.readTime}</span>
          </div>
        </header>

        <img 
          src={post.image} 
          alt={post.title}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/800x400/667eea/ffffff?text=Hosted247'
          }}
        />

        <div className="blog-post-content">
          {renderContent(post.content)}
        </div>
      </article>

      <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: '#f8f9ff', borderRadius: '10px' }}>
        <h3 style={{ marginBottom: '1rem' }}>Enjoyed this article?</h3>
        <p style={{ marginBottom: '1.5rem', color: '#666' }}>
          Check out more articles on our blog and stay updated with the latest in web development.
        </p>
        <Link to="/" className="read-more">
          View All Posts
        </Link>
      </div>
    </div>
  )
}

export default BlogPost