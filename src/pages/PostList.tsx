import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { parseFrontmatter } from '../utils/frontmatter';

interface PostMeta {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
}

const mdModules = import.meta.glob('/src/posts/*.md', { query: '?raw', eager: true });

const posts: PostMeta[] = Object.entries(mdModules).map(([path, content]) => {
  const id = path.split('/').pop()?.replace('.md', '') || '';
  // content is the module, content.default is the raw string when using ?raw
  const fileContent = (content as any).default as string;
  const { data } = parseFrontmatter(fileContent);
  return {
    id,
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || '',
    author: data.author || 'Unknown'
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function PostList() {
  return (
    <div className="space-y-8">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Latest Posts</h1>
        <p className="mt-4 text-lg text-gray-600">Thoughts, learnings, and technical deep-dives.</p>
      </header>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {posts.map((post) => (
          <article 
            key={post.id} 
            className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow p-6 flex flex-col"
          >
            <div className="flex-grow">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <Calendar size={16} />
                <time dateTime={post.date}>
                  {format(parseISO(post.date), 'MMMM d, yyyy')}
                </time>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                <Link to={`/post/${post.id}`} className="hover:text-brand-600 focus:outline-none focus:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 line-clamp-3 mb-4">
                {post.excerpt}
              </p>
            </div>
            <Link 
              to={`/post/${post.id}`} 
              className="inline-flex items-center text-brand-600 font-semibold hover:text-brand-700 focus:outline-none focus:underline mt-auto"
              aria-label={`Read more about ${post.title}`}
            >
              Read article &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
