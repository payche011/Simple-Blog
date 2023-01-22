import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Pavle Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
