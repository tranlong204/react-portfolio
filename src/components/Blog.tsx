
import React from 'react';
import { Link } from 'react-router-dom';
import { useContentfulPosts } from '../useContentfulPosts';

const Blog: React.FC = () => {
  const { posts, loading } = useContentfulPosts();

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="bg-gray-50 min-h-screen text-black">
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-12 text-gray-900">Blogs</h1>
        {posts.map(post => (
          <div key={post.id} className="flex justify-between gap-6 items-start mb-10 border-b pb-6">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900 hover:underline">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 mt-2 line-clamp-2">{post.summary}</p>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags.map((tag: string) => (
                    <span key={tag} className="px-2 py-0.5 bg-gray-100 text-sm text-gray-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="w-32 text-right text-sm text-gray-500 shrink-0 whitespace-nowrap">
              {new Date(post.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
