
import logo from "../../assets/fav.png"; // Replace with your logo image

const Footer = () => {
  return (
    <footer className="bg-[#f3f5f8] px-20 py-14 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-start ">
        <div className="mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="h-16 w-16" />
        </div>

        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">Contact Information</h4>
          <p>Arena Business Centre, </p>
          <p>Southampton SO14 3LP, UK</p>
          <p>02380555555</p>
          <p>support@ayvo.com</p>
        </div>

        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">Follow Us</h4>
          <div className="flex space-x-2">
            <a href="https://www.instagram.com/aryvo.uk/" target="__blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/cabmyride/"
              target="__blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://www.facebook.com/cabmyride" target="__blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2">Quick Links</h4>
          <ul className="list-none p-0 m-0">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
