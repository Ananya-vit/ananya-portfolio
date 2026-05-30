function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5">
      <h1 className="text-2xl font-bold">Ananya.</h1>

      <ul className="flex gap-8">
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#certifications">Certifications</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;