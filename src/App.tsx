import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <Router basename="/pamomo-blog">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostList />} />
          <Route path="post/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
