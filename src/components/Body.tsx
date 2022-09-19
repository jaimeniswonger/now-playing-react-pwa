
import { Routes, Route, Navigate } from 'react-router-dom';
import './Body.css';
import Login from './Login';
import MovieDetail from './MovieDetail';
import NowPlaying from './NowPlaying';

interface BodyProps {
    loggedIn: boolean
}

const Body = ({
    loggedIn
}: BodyProps) => {
    return (
        <div className="wrapper">
            <div className="title">
                <p>Movies, TV Shows and the People Who Make Them</p>
            </div>
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
        </div>
    );
}
export default Body;