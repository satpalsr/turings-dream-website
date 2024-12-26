'use client'
import React, { useState } from "react";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {/* === NAVBAR === */}
      <nav className="
        flex justify-end items-center
        relative z-10 pt-4 md:pt-12
        space-x-4 md:space-x-16
      ">
        {/* Mobile: Hamburger icon + brand (left) */}
        <div className="flex md:hidden justify-end w-full px-2">
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="text-3xl"
            aria-label="Toggle Navigation"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Nav (hidden on mobile) */}
        <div className="hidden md:flex space-x-8 text-xl md:text-3xl">
          <NavLinks />
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      {isNavOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#FAFAFA] shadow-lg z-20">
          <div className="flex flex-col space-y-4 p-4 text-lg text-center">
            <NavLinks mobile onClose={() => setIsNavOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}

function NavLinks({ mobile = false, onClose }: { mobile?: boolean; onClose?: () => void }) {
  const handleClick = () => {
    if (mobile && onClose) {
      onClose();
    }
  };

  return (
    <>
      <a href="/archive" className="hover:underline" onClick={handleClick}>
        Archive
      </a>
      <a href="#program-overview" className="hover:underline" onClick={handleClick}>
        About Program
      </a>
      <a href="#faq" className="hover:underline" onClick={handleClick}>
        FAQ
      </a>
      <a href="#founder" className="hover:underline" onClick={handleClick}>
        Founder
      </a>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdPPWvrLZ0fF1ok--3tj6SsDyfhhgtw1q4p_NKQK_uH8WGPFA/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
        onClick={handleClick}
      >
        Apply
      </a>
    </>
  );
}