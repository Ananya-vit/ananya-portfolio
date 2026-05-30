function Navbar() {
  return (
    <nav className="flex justify-between items-center px-12 py-8 max-w-7xl mx-auto">

      <h1 className="text-5xl font-bold tracking-tight text-[#1D1D1D]">
        Ananya.
      </h1>

      <ul className="flex gap-12 items-center">

        <li>
          <a
            href="#about"
            className="text-xl font-medium text-[#555555] hover:text-[#1D1D1D] transition"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className="text-xl font-medium text-[#555555] hover:text-[#1D1D1D] transition"
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#certifications"
            className="text-xl font-medium text-[#555555] hover:text-[#1D1D1D] transition"
          >
            Certifications
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="text-xl font-medium text-[#555555] hover:text-[#1D1D1D] transition"
          >
            Contact
          </a>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;