import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import NotFound from "./components/NotFound"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
