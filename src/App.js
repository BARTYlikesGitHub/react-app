import * as React from 'react';
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom"
import TodoComponent from './Pages/TodoList/TodoComponent.js'
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import ErrorPage from './Pages/ErrorPage.js'
import { Tab, Tabs, Toolbar, AppBar, Container, Typography } from '@mui/material';
import ChildCareIcon from '@mui/icons-material/ChildCare';

function App() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const routes = ["/", "/about", "/todolist"]
  return (
    <Router>
      <div>
        <AppBar position='static'>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <ChildCareIcon />
              <Tabs
                onChange={handleChange}
                value={value}
                aria-label="Tabs where each tab needs to be selected manually"
              >
                <Tab label="Home Page" component={Link} to={routes[0]} />
                <Tab label="About Page" component={Link} to={routes[1]} />
                <Tab label="Todo List Page" component={Link} to={routes[2]} />
              </Tabs>
            </Toolbar>
          </Container>
        </AppBar>
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
