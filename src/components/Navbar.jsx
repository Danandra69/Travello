import { useState } from "react";
import { Link } from "react-router-dom";
import TravelloLogo from "../assets/TravelloLogo1.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* LOGO + TEXT */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={TravelloLogo}
            alt="Travello Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-xl font-bold">Travello</span>
        </Link>

        {/* Hamburger button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/destinasi">Destinasi</Link>
          </li>
          <li>
            <Link to="/tips">Tips</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      {/* Menu Mobile */}
      {open && (
        <ul className="md:hidden bg-blue-500 p-4 space-y-3">
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/destinasi" onClick={() => setOpen(false)}>
              Destinasi
            </Link>
          </li>
          <li>
            <Link to="/tips" onClick={() => setOpen(false)}>
              Tips
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
