import React from "react";
const Header = () => {
  return (
    <div>
      <header class="py-6" id="home">
        <div class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <div class="text-lg font-bold">Leandro Pereyra</div>
          <div class="hidden md:flex space-x-12 items-center">

            <a href="#about">About</a>
            <a href="#work">My work</a>
            <a href="mailto:me.leandrop@gmail.com">
              <button class="px-6 py-2 bg-theme font-bold">Let's talk!</button>
            </a>
          </div>
             
          <div class="menu md:hidden">
            <nav class="burger-menu">
              <input class="menu-check" type="checkbox" name="menu-check" value="" id="menu-check"/>
              <label class="menu-open" for="menu-check">
                <span class="burger1"></span>
                <span class="burger2"></span>
                <span class="burger3"></span>
              </label>

              <ul class="menu-options">            
                <li><a href="#about">About</a></li>
                <li><a href="#work">My work</a></li>
                <li><a href="mailto:me.leandrop@gmail.com"><button class="px-2 h-15 bg-theme font-bold">Let's talk!</button></a></li>
              </ul>
            </nav>
          </div>
        </div>

      </header>
    </div>
  );
};

export default Header;

/*

<button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
         
            <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
                fill="white"
                />
            </svg>
            </button> 
            */