function Header() {
  let timeLeftForBirthday = Date.UTC(2025, 9, 7) - Date.now();
  timeLeftForBirthday = Math.ceil(timeLeftForBirthday / (1000 * 60 * 60 * 24));

  return (
    <header className="header">
      <h1 className="header__title">My Portfolio</h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#about">About</a>
          </li>
          <li className="header__nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="header__nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
