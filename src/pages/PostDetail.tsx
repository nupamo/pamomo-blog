import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
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
        <h1 className="text-2xl font-bold text-gray-100 mb-4">Post not found</h1>
        <Link to="/" className="text-brand-500 hover:text-brand-400 flex items-center justify-center gap-2">
          <ArrowLeft size={16} /> 홈으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 mb-8 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 rounded p-1 -ml-1">
        <ArrowLeft size={16} /> 목록으로
      </Link>
      
      {loading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-gray-800 rounded w-3/4 mb-10"></div>
          <div className="h-4 bg-gray-800 rounded w-3/4"></div>
          <div className="h-4 bg-gray-800 rounded w-full"></div>
          <div className="h-4 bg-gray-800 rounded w-5/6"></div>
        </div>
      ) : (
        <>
          <header className="mb-10 pb-10 border-b border-gray-800">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-100 tracking-tight mb-6 leading-tight">
              {meta?.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <time dateTime={meta?.date}>
                  {meta?.date && format(parseISO(meta.date), 'yyyy. MM. dd')}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{meta?.author}</span>
              </div>
            </div>
          </header>

          <div className="prose prose-invert prose-brand prose-lg max-w-none prose-headings:font-bold prose-a:text-brand-400 hover:prose-a:text-brand-300">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {content}
            </ReactMarkdown>
          </div>
        </>
      )}
    </article>
  );
}
