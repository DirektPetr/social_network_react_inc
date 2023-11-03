import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="wrapper">

      <Header />
      <Sidebar />
      <Main />
      <Footer />

    </div>
  );
}

export default App;
