const NavLinks = ({ label }) => {
  return (
   
      <li>
        <a
          href="#"
          className="block py-2 px-3 text-gray-700  rounded hover:bg-gray-100 md:hover:bg-transparent text-xl    md:p-0     "
        >
          {label} 
        </a>
      </li>
    
  );
};

export default NavLinks;
