import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import AnimatedComponents from './components/Navigation/AnimatedComponents';

function App() {
  // useLocation is a hook that returns the location object that 
  // represents the current URL. You can think about it like a 
  // useState that returns a new location whenever the URL changes.
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedComponents />
      </BrowserRouter>
    </div>
  );
}

export default App;
