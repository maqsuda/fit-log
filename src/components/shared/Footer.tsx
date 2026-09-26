import React from "react";

const Footer = () => {
  return (
    <footer className="w-7xl mx-auto flex justify-between items-center mt-10">
      <div className="flex justify-baseline gap-1 items-center">
        <img src="/logo.png"></img>
        <span className="text-2xl font-bold">FITLOG</span>
      </div>
      <div>
        <p className="text-gray-300">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
