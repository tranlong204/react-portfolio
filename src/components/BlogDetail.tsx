
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContentfulPosts } from '../useContentfulPosts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { posts, loading } = useContentfulPosts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  const index = posts.findIndex(p => p.slug === id);
  const post = posts[index];
  const prev = posts[index - 1];
  const next = posts[index + 1];

  if (!post) {
    return <div className="p-8 text-center"><h2 className="text-xl font-semibold">Post not found</h2></div>;
  }

  return (
    <div className="bg-white min-h-screen text-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-8">
          {new Date(post.date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <article className="prose prose-lg max-w-none text-gray-800 prose-headings:text-gray-900 prose-p:text-gray-800 prose-strong:text-gray-900 prose-code:text-blue-600">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
            {post.content}
          </ReactMarkdown>
        </article>

        <div className="mt-12 flex justify-between text-sm text-blue-600">
          {prev ? <Link to={`/blog/${prev.slug}`} className="hover:underline">&larr; {prev.title}</Link> : <div />}
          {next ? <Link to={`/blog/${next.slug}`} className="hover:underline">{next.title} &rarr;</Link> : <div />}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
