import './App.css';
import Card from './components/card';
import Headerbar from './components/header';
import Sidebar from './components/sidebar';
function App() {
  return (
    <div className="App">
      <Headerbar />
      <div className='wrapper'>
        <div className='card-flex'>
          <Card />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
