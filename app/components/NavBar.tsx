"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-softWhite/80 border-b border-softGray/50">
      <div className="container-section flex items-center justify-between py-4">
        <Link href="#" className="flex items-center gap-2" aria-label="Aurora Salon home">
          <span className="text-2xl font-heading font-semibold tracking-wide text-black">
            Aurora <span className="text-royalGold">Salon</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#gallery">Gallery</a>
          <a className="nav-link" href="#testimonials">Testimonials</a>
          <a className="btn-primary" href="#booking">Book Appointment</a>
        </nav>
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-royalGold"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          <div aria-hidden className="w-6 h-6 relative">
            <span className={`block absolute h-0.5 w-6 bg-black transition-transform ${open ? 'translate-y-2 rotate-45' : '-translate-y-2'}`}></span>
            <span className={`block absolute h-0.5 w-6 bg-black transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block absolute h-0.5 w-6 bg-black transition-transform ${open ? '-translate-y-2 -rotate-45' : 'translate-y-2'}`}></span>
          </div>
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-softGray/50 bg-softWhite">
          <div className="container-section flex flex-col py-2">
            <a onClick={() => setOpen(false)} className="py-3 nav-link" href="#services">Services</a>
            <a onClick={() => setOpen(false)} className="py-3 nav-link" href="#about">About</a>
            <a onClick={() => setOpen(false)} className="py-3 nav-link" href="#gallery">Gallery</a>
            <a onClick={() => setOpen(false)} className="py-3 nav-link" href="#testimonials">Testimonials</a>
            <a onClick={() => setOpen(false)} className="py-3 btn-primary text-center" href="#booking">Book Appointment</a>
          </div>
        </div>
      )}
    </header>
  );
}
