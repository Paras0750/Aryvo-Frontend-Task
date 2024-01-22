import { useState } from "react";
import aryvoPng from "../../assets/aryvo.png";
import CurrentTime from "./time-component";

const navMenu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Trips",
    link: "/trips",
  },
  {
    name: "Drivers",
    link: "/drivers",
  },
  {
    name: "Customers",
    link: "/customers",
  },
  {
    name: "Finance",
    link: "/finance",
  },
  {
    name: "Reports",
    link: "/reports",
  },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center justify-between h-[80px] bg-[#f3f5f8] px-4">
      <div className="flex items-center gap-5">
        <div>
          <img src={aryvoPng} alt="icon" width={"100px"} />
        </div>
        <div className="flex gap-4 text-xl items-center">
          {navMenu.map((item) => (
            <div key={item.name}>{item.name}</div>
          ))}
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 w-[240px] border rounded-full "
          />
        </div>
      </div>
      <div className="flex gap-4 mr-5 items-center">
        <CurrentTime />

        <div className="relative">
          <button
            className="text-blue-500 bg-white px-3 py-1 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={toggleDropdown}
          >
            Create \/
          </button>
          <div
            className={`absolute mt-2 bg-white border rounded-md shadow-lg ${
              isDropdownOpen ? "" : "hidden"
            }`}
          >
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        </div>

        <div>Operator Name</div>
        <div>✉️</div>
        <div>⚙</div>
      </div>
    </div>
  );
};

export default Navbar;
