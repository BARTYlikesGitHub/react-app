import React from 'react';
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom"
import TodoComponent from './Pages/TodoList/TodoComponent.js'
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import ErrorPage from './Pages/ErrorPage.js'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/todolist">Todo List</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/todolist" element={<TodoComponent />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <div>
        Footer
      </div>
    </Router>
  );
}

export default App;
