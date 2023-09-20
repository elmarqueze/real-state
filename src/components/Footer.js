import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
  <footer className='bg-black py-8 text-center text-white'>
    <div className='container mx-auto'>
      <p>Copyright &copy; 2023. All rights reserved.</p>
      <p>Made with ♥ by, <Link to='https://www.linkedin.com/in/waldir-marquez-espiritu/' target='__blanked'>Waldir Marquez Espiritu.</Link></p>
    </div>
  </footer>
  );
};

export default Footer;
