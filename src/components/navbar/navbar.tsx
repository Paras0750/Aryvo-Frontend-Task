import { useState } from "react";
import aryvoPng from "../../assets/aryvo.png";
import CurrentTime from "./time-component";
import { useAuth } from "../../customHooks/useAuth";
import { useNavigate } from "react-router-dom";

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

interface Props {
  displayName: string | null | undefined;
}

const Navbar = ({ displayName }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSettingDropdownOpen, setIsSettingDropdownOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.setItem("status", "")
      navigate("/signin");
    } catch (e) {
      alert(`Error: ${e} `);
    }
  };

  return (
    <div className="flex items-center justify-between h-[70px] bg-[#f3f5f8] px-6 md:px-12 ">
      <div className="flex items-center gap-3 md:gap-5">
        <div className="w-[60px] md:w-[80px]">
          <img src={aryvoPng} alt="icon" />
        </div>
        <div className="flex gap-2 items-center ">
          {navMenu.map((item) => (
            <div key={item.name} className="hidden md:block ">
              {item.name}
            </div>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search"
          className="px-2 py-1  border rounded-full hidden lg:block"
        />
      </div>
      <div className="flex gap-2 md:gap-4 mr-3 items-center text-sm">
        <div className="hidden lg:block">
          <CurrentTime />
        </div>

        <div className="relative">
          <div
            className="flex items-center text-blue-500 bg-white px-2 py-1 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={toggleDropdown}
          >
            Create
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down ml-1"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          <div
            className={`absolute mt-2 bg-white border rounded-md shadow-lg ${
              isDropdownOpen ? "" : "hidden"
            }`}
          >
            <ul className="space-y-2" onClick={() => toggleDropdown()}>
              <li className="px-2 py-1 hover:bg-gray-100 cursor-pointer">
                Option 1
              </li>
              <li className="px-2 py-1 hover:bg-gray-100 cursor-pointer">
                Option 2
              </li>
              <li className="px-2 py-1 hover:bg-gray-100 cursor-pointer">
                Option 3
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden md:block sm:flex xs:flex">{displayName}</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-inbox"
          >
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
          </svg>
        </div>
        <div className="relative">
          <svg
            onClick={() => setIsSettingDropdownOpen(!isSettingDropdownOpen)}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-settings"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <div
            className={` absolute mt-2 bg-white border rounded-md shadow-lg right-1/2 ${
              isSettingDropdownOpen ? "" : "hidden"
            }`}
          >
            <div>
              <div
                className="px-2 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
