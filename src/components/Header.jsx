import React from "react";
const Header = () => {
  return (
    <div>
      <header class="py-6" id="home">
        <div class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <div class="text-lg font-bold">Leandro Pereyra</div>
          <div class="hidden md:flex space-x-12 items-center">
            <a href="#" class="text-selected-text">
              Home
            </a>
            <a href="#about">About</a>
            <a href="#work">My work</a>
            <a href="mailto:me.leandrop@gmail.com">
              <button class="px-6 py-2 bg-theme font-bold">Let's talk!</button>
            </a>
          </div>
          <div class="md:hidden">
            <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
