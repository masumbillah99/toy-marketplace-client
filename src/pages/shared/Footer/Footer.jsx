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
    <footer className="p-10 bg-[#281652] text-white mt-10">
      <div className="footer items-center max-w-screen-xl mx-auto">
        <div>
          <img src={logo} className="w-20" alt="" />
          <h3 className="text-2xl font-bold">E-Car Toys Store</h3>
        </div>
        <div>
          <h3 className="flex items-center gap-2 text-lg uppercase">
            <FaLink />
            Connect with me
          </h3>
          <div className="flex gap-4 my-5 text-xl">
            <Link to="https://github.com/masumbillah99" target="_blank">
              <FaGithub />
            </Link>
            <Link
              to="https://www.linkedin.com/in/masumbillah99/"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link to="https://www.youtube.com/@awebtutor9986" target="_blank">
              <FaYoutube />
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=100036766350727"
              target="_blank"
            >
              <FaFacebook />
            </Link>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-lg uppercase">
              <FaLocationArrow />
              Find Us
            </h3>
            <p className=" mt-3">Motijheel-301, Dhaka, Bangladesh.</p>
          </div>
        </div>
      </div>
      <p className="text-center mt-10 text-red-500">
        <small>&copy; E-Car Toys Store. All rights reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
