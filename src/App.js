import {Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Tutorial from './pages/Tutorial';
import AboutUS from './pages/AboutUS';
import './style/index.css';

function App() {
  return (
    <>
    <Header title="React" />
    <main>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/documentation' element={<Documentation />} />
        <Route exact path='/tutorial' element={<Tutorial />} />
        <Route exact path='/aboutUS' element={<AboutUS />} />
      </Routes>

    </main>
    </>
  );
}

export default App
