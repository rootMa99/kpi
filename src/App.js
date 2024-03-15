import './App.css';
import Dtable from './component/Dtable';
import Qletter from './component/Qletter';
import Stable from './component/Stable';
import Ttable from './component/Ttable';

function App() {
  return (
    <div className="App">
        <Qletter />
        <Stable />
        <Ttable />
        <Dtable />
    </div>
  );
}

export default App;
