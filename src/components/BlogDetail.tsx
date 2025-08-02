import React from 'react';
import { useParams } from 'react-router-dom';
import { useContentfulPosts } from '../useContentfulPosts';
import ReactMarkdown from 'react-markdown';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { posts, loading } = useContentfulPosts();

  if (loading) return <div style={{ padding: '2rem' }}>Loading...</div>;

  const post = posts.find(p => p.slug === id);

  if (!post) {
    return <div style={{ padding: '2rem' }}><h2>Post not found</h2></div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{post.title}</h1>
      <p><em>{post.date}</em></p>
      <hr />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};

export default BlogDetail;
