import './App.css';
import Blogs from './components/Blogs';
import Nav from './components/Nav';
import Works from './components/Works';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Works></Works>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
