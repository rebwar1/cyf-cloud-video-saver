import React from 'react';
import youtubeLogo from './images/youtube-logo.png';

function Header(): JSX.Element {
  return (
    <header className="flex items-center justify-center pb-8 pt-8 text-3xl sm:px-8 sm:pt-8 sm:text-4xl sm:font-bold sm:tracking-wider lg:text-6xl">
      <img
        src={youtubeLogo}
        alt="YouTube Logo"
        className="w-13 h-9 sm:h-16 sm:w-24"
      />
    </header>
  );
}

export default Header;
