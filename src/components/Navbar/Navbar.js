import React, { useContext, useState } from 'react';
import { FaMoon, FaSun, FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/img/logo.png"
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
	const { user,logOut} = useContext(AuthContext)
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLight, setIsLight] = useState(true)

  return (
    <div className="">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img style={{ width: '50px' }} src={logo} alt="" />
            <h4 className='text-3xl font-bold text-gray-700 ml-2'>Web <span className='text-rose-500'>Learner</span></h4>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
              to="/home"
              style={({ isActive}) => {
                return { borderBottom: isActive ?"2px solid gray" :undefined}
              }}			  
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                style={({ isActive}) => {
                  return { borderBottom: isActive ?"2px solid gray" :undefined}
                }}
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                style={({ isActive}) => {
                    return { borderBottom: isActive ?"2px solid gray" :undefined}
                  }}
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-teal-accent-400"
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                style={({ isActive}) => {
                  return { borderBottom: isActive ?"2px solid gray" :undefined}
                }}
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <div onClick={()=>setIsLight(!isLight)} className='font-medium' >
                {
                  isLight ? <div className='bg-gray-200  rounded p-2 flex items-center justify-center cursor-pointer' ><FaSun/></div>
                  :
                  <div className='bg-gray-800 rounded cursor-pointer p-2 flex items-center justify-center text-white'><FaMoon/></div>
                }
              </div>
            </li>
            
            <li>
             {
              user && user.uid ?
                <span className='flex'>
                  <span className='cursor-pointer flex justify-center"' title={user.displayName? user.displayName:"No Name"}>
                    {
                        user?.photoURL? <img className='w-10 rounded-full' src={user?.photoURL} alt="" />:<FaUserAlt className='text-2xl'/>
                      }
                  </span> 
                  <Link
                      onClick={logOut}
                        className="inline-flex items-center justify-center h-10 ml-2 px-6 font-medium tracking-wide text-white bg-gray-700 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-rose-500  focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                        >			
                        Log Out
                  </Link>       
                </span>
                :
						
						<NavLink
                to="/login"
						    style={({ isActive}) => {
							    return { color: isActive ?"yellow" :undefined}
						      }}
                	className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white bg-gray-700 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-rose-500  focus:shadow-outline focus:outline-none"
                	aria-label="Sign up"
                	title="Sign up"
              		>			
                	Log in
            </NavLink>
						
					}
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute  top-0 left-0 w-full" onClick={() => setIsMenuOpen(false)}>
                <div className="p-5 bg-rose-100 border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img style={{ width: '50px' }} src={logo} alt="" />
                        <h4 className='text-3xl hidden sm:block font-bold text-gray-700 ml-2'>Web <span className='text-rose-500'>Learner</span></h4>
                      </Link>
                    </div>
                    <div onClick={()=>setIsLight(!isLight)} className='font-medium' >
                    {	
                    isLight ? <div className='bg-gray-200  rounded-full p-2 flex items-center justify-center cursor-pointer' ><FaSun/></div>
                    :
                    <div className='bg-gray-800 rounded-full cursor-pointer p-2 flex items-center justify-center text-white'><FaMoon></FaMoon></div>
                    }
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        {
                          user && user.uid &&
                          <span  className='cursor-pointer flex justify-center"' title={user.displayName ? user.displayName : "No Name"}>
                            {
                              user?.photoURL? <img className='w-10 rounded-full' src={user?.photoURL} alt="" />:<FaUserAlt className='text-2xl'/>
                            }
                          </span> 
                        }
                      </li>
                      <li>
                        <NavLink
                          to="/home"
                          style={({ isActive}) => {
                            return { borderBottom: isActive ?"2px solid gray" :undefined}
                          }}	
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/courses"
                          style={({ isActive}) => {
                            return { borderBottom: isActive ?"2px solid gray" :undefined}
                          }}	
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/faq"
                          style={({ isActive}) => {
                            return { borderBottom: isActive ?"2px solid gray" :undefined}
                          }}	
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          FAQ
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blogs"
                          style={({ isActive}) => {
                            return { borderBottom: isActive ?"2px solid gray" :undefined}
                          }}	
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blogs
                        </NavLink>
                      </li>
                    <li>
                      {
                        user && user.uid ?
                        <>
                          <Link
                            onClick={logOut}
                              className="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide text-white bg-gray-700 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-rose-500  focus:shadow-outline focus:outline-none"
                              aria-label="Sign up"
                              title="Sign up"
                              >			
                              Log Out
                          </Link>       
                        </>
                        :
                        <Link
                          to="/login"
                            className="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide text-white bg-gray-700 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-rose-500  focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                            >			
                            Log in
                        </Link>
                        }
                    </li>
					  
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;