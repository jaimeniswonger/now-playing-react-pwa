import './Header.css';
import logo from '../images/nowplaying-white-logo-nav.png'
import { Link } from 'react-router-dom';

function Header() {

  return (
    <nav>
      <ul className="menu">
        <li className="logo">
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </li>
        {/* <li className="item"><Link to="/">NowPlaying</Link></li> 
        {/* <li className="item"><a href="#">About</a></li> */}
        {/* <li className="toggle"><a href="/"><i className='fas fa-bars'></i></a></li> */}
      </ul>
    </nav>
  );
}

export default Header;
