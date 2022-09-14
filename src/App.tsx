import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';

import './App.css';
import Login from './components/Login';
import NowPlaying from './components/NowPlaying';

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
    </BrowserRouter>
  );
}

export default App;
