import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {

  // hard coded for now
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Body loggedIn={isLoggedIn} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
