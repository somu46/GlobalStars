import  { useState } from "react";
import "./Navbar.css";
import Hamburger from "hamburger-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Logo from '../../Assets/logo.png';
import { motion} from 'framer-motion';
// import UiButton from "../Button/UiButton";


const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
  closed: {
    x: '100%',
    opacity: 0,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
 const navigate=useNavigate();

 const handleHistory=()=>{
  window.scrollTo(0, 0);
}

const handleMobileHistory=()=>{
  window.scrollTo(0, 0);
  setIsOpen(false);
}

const handleClick=()=>{
  setIsOpen(!isOpen);
  navigate('/book', { state: { id: 12523 } });

}

  return (
    <nav className="navbar     md:bg-transparent  bg-opacity-50 md:bg-opacity-70  backdrop-blur-md">
      <div className="navbar-left  ">
        <Link to="/"
         onClick={handleHistory}>  
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <div className="brand">
          <NavLink to="/"
           onClick={handleHistory}>
           
            <h1>Global Stars</h1>
          </NavLink>
          
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="desktop-menu">
      
        <ul className="navbar-menu">
          <li>
            <NavLink activeClass="active" to="/"
             onClick={handleHistory}>Home</NavLink>
          </li>
          <li>
            <NavLink activeClass="active"  to="/about-us"
             onClick={handleHistory}>About Us</NavLink>
          </li>
          
          {/* <li>
            <NavLink activeClass="active"  to="/our-gallery"
             onClick={handleHistory}>Services</NavLink>
          </li> */}
          <li className="nav-item gallery-dropdown">
            <span>Our Gallery</span>
            <ArrowDropDownIcon/>
            <ul className="dropdown bg-white bg-opacity-50 md:bg-opacity-70  backdrop-blur-md">
              <li>
                <NavLink activeClass="active"   to="/videos"
                 onClick={handleHistory}>Video</NavLink>
              </li>
              <li>
                <NavLink activeClass="active"   to="/Photos"
                 onClick={handleHistory}>Photo</NavLink>
              </li>
            </ul>
          </li>
          
          <li>
            <NavLink activeClass="active"  to="/blogs"
             onClick={handleHistory}>Blogs</NavLink>
          </li>
          <li>
            <NavLink activeClass="active"  to="/faqs"
             onClick={handleHistory}>FAQs</NavLink>
          </li>
          <li>
            <NavLink activeClass="active"  to="/contact-us"
             onClick={handleHistory}>Contact Us</NavLink>
          </li>
          
        </ul>
        
         
        {/* <div>
          
          <UiButton  
            title="Make an Appointment"
            fun={handleClick}
            />
          </div>  */}
       
      </div>

     
    {/* Mobile Menu */}
    
    <div className="relative lg:hidden">
      {/* Hamburger Button */}
      <div className="fixed top-5 right-5 z-30">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 right-0 min-h-screen w-[65%] bg-white bg-opacity-90 z-20`}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
      >
        <nav>
          <ul className="flex flex-col items-start p-8 space-y-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                }
              
                 onClick={handleMobileHistory}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                }
               
                 onClick={handleMobileHistory}
              >
                About Us
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                }
             
                 onClick={handleMobileHistory}
              >
                Services
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                }
               
                 onClick={handleMobileHistory}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <button
                className="focus:outline-none mb-2"
                onClick={() => setIsGalleryOpen(!isGalleryOpen)}
              >
                Our Gallery
                <ArrowDropDownIcon />
              </button>
              {isGalleryOpen && (
                <ul className="pl-4 space-y-2">
                  <li>
                    <NavLink
                      to="/photos"
                      className={({ isActive }) =>
                        isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                      }
                      onClick={() => {
                        setIsOpen(false);
                        setIsGalleryOpen(false);
                        handleMobileHistory();
                      }}
                       
                    >
                      Photos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/videos"
                      className={({ isActive }) =>
                        isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                      }
                      onClick={() => {
                        setIsOpen(false);
                        setIsGalleryOpen(false);
                        handleMobileHistory();
                      }}
                      
                    >
                      Videos
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                }
              
                 onClick={handleMobileHistory}
              >
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                }
              
                 onClick={handleMobileHistory}
              >
                Contact Us
              </NavLink>
            </li>
            {/* <li>
              
            <UiButton  
            title="Book Now"
            fun={handleClick}
            />
            </li> */}
          </ul>
        </nav>
      </motion.div>
    </div>

    </nav>
  );
};

export default Navbar;