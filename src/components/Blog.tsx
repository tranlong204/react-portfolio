import React from 'react';
import { Link } from 'react-router-dom';
import { useContentfulPosts } from '../useContentfulPosts';

const Blog: React.FC = () => {
  const { posts, loading } = useContentfulPosts();

  if (loading) return <div style={{ padding: '2rem' }}>Loading...</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Blog</h1>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '2rem' }}>
          <h2><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2>
          <p><em>{post.date}</em></p>
          <p>{post.summary}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Blog;
