import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-14 bg-blue-600 text-white p-6 text-center">
      <h2 className="text-xl font-bold mb-2">Travello</h2>
      <p className="text-sm text-blue-100">Website travelling sederhana.</p>

      {/* Links */}
      <div className="mt-4 flex justify-center gap-5 text-sm">
        <Link to="/">Home</Link>
        <Link to="/destinasi">Destinasi</Link>
        <Link to="/tips">Tips</Link>
        <Link to="/about">About</Link>
      </div>

      <p className="text-xs mt-5 text-blue-200">
        © {new Date().getFullYear()} Travello • All rights reserved.
      </p>
    </footer>
  );
}
