import { Banner } from './Componentes/Banner/Banner';
import { Navbar } from './Componentes/Navbar/Navbar';
import { Footer } from './Componentes/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Paginas } from "./Componentes/Paginas"
import { DataProvider } from './Context/Dataprovider';

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
        <Navbar/>
        <Banner/>
        <Paginas/>
        <Footer/>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
