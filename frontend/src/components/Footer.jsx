import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-6 mt-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">Meow Meow Meow</p>
          <p className="text-sm">© 2024 Meow Inc. All rights reserved.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <a
            href="#"
            className="text-white hover:text-saffron mx-2"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-white hover:text-saffron mx-2"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-white hover:text-saffron mx-2"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
