import React from 'react';
import { BlogPost } from './blogData';

interface Props {
  post: BlogPost;
}

const BlogPostComponent: React.FC<Props> = ({ post }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h2>{post.title}</h2>
    <p><em>{post.date}</em></p>
    <p>{post.summary}</p>
    <hr />
  </div>
);

export default BlogPostComponent;
