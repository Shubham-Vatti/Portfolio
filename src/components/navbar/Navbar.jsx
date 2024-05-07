import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
// import {Icon1} from '/'
// import {Icon2} from '../Assets/linkedin.png'
// import {Icon3} from '../Assets/instagram.png'
// import {Icon4} from '../Assets/github.png'

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          SHUBHAM
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/shubham.vatti.7/">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/shubham_vatti_750/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/shubhamvatti">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/Shubham-Vatti">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
