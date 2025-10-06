import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './slidenav.css';
import { Link, NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const sideNavRef = useRef(null);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  // GSAP navbar scroll animation
  useEffect(() => {
    gsap.set(navRef.current, { y: -100, opacity: 0 });
    

    ScrollTrigger.create({
      trigger: document.body,
      start: () => `${window.innerHeight / 2} top`,
      onEnter: () => {
        gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
      },
      onLeaveBack: () => {
        gsap.to(navRef.current, { y: -100, opacity: 0, duration: 0.5, ease: "power2.in" });
      },
    });
  }, []);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sideNavRef.current &&
        !sideNavRef.current.contains(event.target) &&
        isSideNavOpen
      ) {
        closeNav();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSideNavOpen]);

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    setIsSideNavOpen(true);
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    setIsSideNavOpen(false);
  }

  return (
    <>
  {/* Overlay */}
  {isSideNavOpen && (
    <div
      className="overlay"
      onClick={closeNav}
    />
  )}

  {/* Navbar */}
  <nav
    // ref={navRef}
    className="fixed  top-0 left-0 w-full bg-transparent  py-4 md:px-40 px-10 flex justify-between items-center z-50"
  >
    <div ref={navRef} className="bg-[#FFBBCE] h-20 shadow-md -z-10 w-full absolute top-0 left-0" ></div>
    <div onClick={openNav} className=" text-xl font-bold cursor-pointer">
      <i  className="ri-menu-line"></i> MENU
    </div>
    <h1 className="font-bold text-3xl font-[crumbl1]">CRUMBL</h1>
    <button className="bg-black rounded-full text-white px-3 py-2 md:block hidden">
      ORDER NOW
    </button>
  </nav>

  {/* Side Nav */}
  <div
    id="mySidenav"
    className="sidenav z-50 font-[crumbl1] text-4xl flex flex-col gap-8 rounded-xl font-bold"
    ref={sideNavRef}
  >
    <Link href="javascript:void(0)" className="closebtn" onClick={closeNav}>
      &times;
    </Link>
    <NavLink onClick={closeNav}
  to="/"
  end
  
>
  Home
</NavLink>

<NavLink onClick={closeNav}
  to="/order"
  
>
  Order
</NavLink>

    <NavLink onClick={closeNav} to="/menu" >Menu</NavLink>
    <NavLink onClick={closeNav} to="/location" >Location</NavLink>
    <NavLink onClick={closeNav} to="/additem" >Add Item</NavLink>
  </div>
</>

  );
};

export default Navbar;
