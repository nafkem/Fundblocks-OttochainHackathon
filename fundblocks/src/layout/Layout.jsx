import React from 'react';
import Navbar from "../components/navbar/index";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className='relative'>
       <header className='w-full bg-[#121113]'>
       <Navbar/>
       </header>
      <div>
        <main className="">{children}</main>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
