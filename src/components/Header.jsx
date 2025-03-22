// Header.jsx (Plain JavaScript/JSX with React Router, without useLocation)
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import HGFLogo from "./../assets/logo.png";
import "./Header.css"; // Import the CSS file

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Campaigns", path: "/campaigns" },
    { name: "Donate", path: "/donate" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavLinkClick = path => {
    setActivePath(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  return (
    <header className='header'>
      <Link
        to='/'
        className='logo-container'
        onClick={() => handleNavLinkClick("/")}
      >
        <img src={HGFLogo} alt='HGF logo' className='nav-logo' />
        <span>Help Grace Foundation</span>
      </Link>

      {isMobile ? (
        <button className='menu-button' onClick={handleDrawerToggle}>
          ☰
        </button>
      ) : (
        <nav>
          <ul className='nav-list'>
            {navItems.map(item => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={activePath === item.path ? "active-link" : ""}
                  onClick={() => handleNavLinkClick(item.path)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {isMobile && mobileOpen && (
        <div className='drawer'>
          <ul className='drawer-list'>
            {navItems.map(item => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => handleNavLinkClick(item.path)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
