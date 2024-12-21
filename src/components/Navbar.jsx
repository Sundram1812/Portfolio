import { Link, NavLink } from "react-router-dom";
import { styles } from "./../styles";
import { logo, menu, close } from "./../assets";
import { useState } from "react";
import { navLinks } from "./../constants";

const Navbar = () => {
  // const[active, setActive]=useState("");
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full py-5 fixed top-0 flex items-center z-10 bg-primary`}
    >
      <div className=" w-full max-w-7xl flex justify-between items-center mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt="logo" className=" w-9 h-9 object-contain" /> */}
          <div className="h-[35px] w-[35px] rounded-full bg-red-600 flex justify-center items-center">
            <p className="text-white font-bold text-3xl">S</p>
          </div>
          <p className=" text-white text-[18px] font-bold cursor-pointer">
            Sundram Kumar
          </p>
        </Link>

        {/* <ul className=' list-none hidden sm:flex flex-row gap-10'>
                {
                  navLinks.map((navItem)=>(
                    <NavLink 
                      to={navItem.id} 
                      key={navItem.id} 
                      className={({ isActive }) => (isActive ? ' text-white' : ' text-secondary') + ' hover:text-white text-[18px] font-medium cursor-pointer'}
                    >

                    {navItem.title}
                    </NavLink>
                  ) )
                }
            </ul> */}

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile view */}

        {/* <div className=' sm:hidden flex flex-1 justify-end items-center'>
                <img 
                src={toggle ? `${close}` : `${menu}`} 
                alt='menu' 
                className=' w-[28px] h-[28px] object-contain cursor-pointer' 
                onClick={()=> setToggel(!toggle)}/>

                <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                  <ul className=' list-none flex flex-col gap-4 justify-end items-start'>
                    {
                      navLinks.map((navItem)=>(
                        <NavLink 
                          to={navItem.id} 
                          key={navItem.id} 
                          onClick={()=>setToggel(!toggle)}
                          className={({ isActive }) => (isActive ? ' text-white' : ' text-secondary') + ' hover:text-white font-poppins text-[14px] font-medium cursor-pointer'}
                        >

                        {navItem.title}
                        </NavLink>
                      ) )
                    }
                </ul>
                </div>
            </div> */}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div></div>
    </nav>
  );
};

export default Navbar;
