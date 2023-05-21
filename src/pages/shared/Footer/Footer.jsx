import logo from "../../../assets/logo.png";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaLocationArrow,
  FaLink,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-[#281652] text-white mt-10">
      <div>
        <img src={logo} className="w-24" alt="" />
        <p className="font-bold text-2xl">E-Toy Car Store</p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4 text-xl">
          <Link to="https://github.com/masumbillah99" target="_blank">
            <FaGithub />
          </Link>
          <Link
            to="https://www.facebook.com/profile.php?id=100036766350727"
            target="_blank"
          >
            <FaFacebook />
          </Link>
          <Link to="https://www.linkedin.com/in/masumbillah99/" target="_blank">
            <FaLinkedin />
          </Link>
          <Link to="https://www.youtube.com/@awebtutor9986" target="_blank">
            <FaYoutube />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
