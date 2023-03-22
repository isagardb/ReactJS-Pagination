import './App.css';
import React, { useState, useEffect } from 'react'
import { PostList } from './components/PostList/PostList';
import { PostPagination } from './components/PostPagination/PostPagination';

function App() {

  const [posts, setPosts] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [rowCount] = useState(5);

  async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
  }
  useEffect(() => { 
    getPosts().then(data => {
      setPosts(data);
    });
  }, []);

  const indexOfLastPage = currentPage * rowCount;
  const indexOfFirestPage = indexOfLastPage - rowCount;
  const currentPosts = posts.slice(indexOfFirestPage, indexOfLastPage);

  function paginate(number) {
    setcurrentPage(number);
  }

  return (
    <div className="App">
      <PostList posts={currentPosts}/>
      <PostPagination postCount={posts.length} rowCount={rowCount} paginate = {paginate}></PostPagination>
    </div>
  );
}

export default App;
