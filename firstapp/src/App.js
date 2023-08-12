import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import NotFound from "./components/NotFound"
import Posts from './components/Posts'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="posts" element={<Posts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
