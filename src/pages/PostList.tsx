import { Link } from 'react-router-dom';
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
  const fileContent = (content as any).default as string;
  const { data } = parseFrontmatter(fileContent);
  return {
    id,
    title: data.title || '제목 없음',
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || '',
    author: data.author || 'Unknown'
  };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function PostList() {
  return (
    <div className="space-y-8">
      <header className="mb-10 border-b border-gray-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-100 tracking-tight">Post List</h1>
        <p className="mt-4 text-lg text-gray-400">개발, 회고, 그리고 여러 가지 이야기들 ✨</p>
      </header>

      <div className="flex flex-col gap-2">
        {posts.map((post) => (
          <article 
            key={post.id} 
            className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 -mx-4 rounded-lg hover:bg-gray-800/50 transition-colors border-b border-gray-800/50 last:border-0"
          >
            <div className="flex-grow">
              <h2 className="text-lg font-semibold text-gray-200 group-hover:text-brand-400 transition-colors mb-1">
                <Link to={`/post/${post.id}`} className="focus:outline-none focus:underline block">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500 line-clamp-1">
                {post.excerpt}
              </p>
            </div>
            <div className="mt-2 sm:mt-0 sm:ml-4 flex-shrink-0 text-sm text-gray-400">
              <time dateTime={post.date}>
                {format(parseISO(post.date), 'yyyy. MM. dd')}
              </time>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
