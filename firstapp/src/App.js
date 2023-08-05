import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const lorem = "Lorem ipsum dolor sit amet con"

  return (
    <div className="App">
      <Header test={lorem}>
        <h2>All children</h2>
      </Header>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={""} >
            <Route index element={""} />
            <Route path="about" element={""} />
            <Route path="*" element={""} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
