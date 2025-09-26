const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-24 py-8">
      <h1 className="text-xl font-bold">Castaway</h1>
      <ul className="flex space-x-6">
        <li className="text-[#118DA8]"><a href="#intro">Home</a></li>
        <li>Episodes</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;