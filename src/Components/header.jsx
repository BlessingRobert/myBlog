import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { navigationArray } from "../Constant/navArray";

const Header = () => {
  

  const pathname = useParams();
  const pathname2 = useLocation();
  console.log("for useParams =>", pathname);
  console.log("for useParams =>", pathname2);
  return (
    <div className="flex items-center space-x-2 justify-between px-5 py-4 sticky top-0 z-20 mx-52 bg-white w-1000px">
      <div>
        <img src={Logo} className="" alt="my logo" />
      </div>
      <nav className="flex items-center space-x-5 text-zinc-700">
        {navigationArray?.map((navigation) => (
          <NavLink
            key={navigationArray.label}
            to={`${navigation.link}`}
            className={({ isActive }) => (isActive ? "text-blue-600 hover:shadow-sm" : "")}
          >
            {navigation.label}
          </NavLink>
        ))}
      </nav>
<div className="flex items-center border border-gray-300 rounded py-1 bg-gray-300">
            <input
                type="text"
                placeholder="Search"
                className="w-full p-2 outline-none bg-gray-300"
            />
            <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
</div>
    </div>
  );
};

export default Header;
