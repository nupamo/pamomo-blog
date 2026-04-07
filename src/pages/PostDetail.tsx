import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { parseFrontmatter } from '../utils/frontmatter';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { format, parseISO } from 'date-fns';

interface PostMeta {
  title: string;
  date: string;
  excerpt: string;
  author: string;
}

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState<PostMeta | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (id) {
      // Dynamic import
      import(`../posts/${id}.md?raw`)
        .then(res => {
          const { data, content: markdownContent } = parseFrontmatter(res.default);
          setMeta(data as unknown as PostMeta);
          setContent(markdownContent);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    }
  }, [id]);

  if (error || (!loading && !meta)) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
        <Link to="/" className="text-brand-600 hover:text-brand-700 flex items-center justify-center gap-2">
          <ArrowLeft size={16} /> Back to home
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-8 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 rounded p-1 -ml-1">
        <ArrowLeft size={16} /> Back to posts
      </Link>
      
      {loading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-gray-200 rounded w-3/4 mb-10"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      ) : (
        <>
          <header className="mb-10 pb-10 border-b border-gray-200">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
              {meta?.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <time dateTime={meta?.date}>
                  {meta?.date && format(parseISO(meta.date), 'MMMM d, yyyy')}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{meta?.author}</span>
              </div>
            </div>
          </header>

          <div className="prose prose-brand prose-lg max-w-none text-gray-800 prose-headings:font-bold prose-a:text-brand-600 hover:prose-a:text-brand-700">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>
        </>
      )}
    </article>
  );
}
