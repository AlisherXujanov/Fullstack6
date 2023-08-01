import Header from './components/Header'

function App() {
  const lorem = "Lorem ipsum dolor sit amet con"

  return (
    <div className="App">
      <Header test={lorem}>
        <h2>All children</h2>
      </Header>
      
    </div>
  );
}

export default App;
