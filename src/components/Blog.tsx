import React from 'react';
import { Link } from 'react-router-dom';
import { useContentfulPosts } from '../useContentfulPosts';

const Blog: React.FC = () => {
  const { posts, loading } = useContentfulPosts();

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10">Blog</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <div
            key={post.id}
            className="rounded-lg border border-gray-200 p-6 hover:shadow transition-shadow duration-200"
          >
            <Link to={`/blog/${post.slug}`}>
              <h2 className="text-xl font-bold text-blue-700 hover:underline mb-1">
                {post.title}
              </h2>
            </Link>
            <div className="text-sm text-gray-600 mb-2">
              {new Date(post.date).toLocaleDateString()}
            </div>
            <p className="text-gray-700 mb-3">{post.summary}</p>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
