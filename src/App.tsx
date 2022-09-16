import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';

import Login from './components/Login';
import NowPlaying from './components/NowPlaying';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {

  const loggedIn = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            loggedIn ? (
              <Navigate replace to="/nowPlaying" />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/nowPlaying" element={<NowPlaying />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
