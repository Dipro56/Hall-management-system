import React from 'react';
import './Footer.css';

export const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div class="footer p-2">
      <p className="pt-2 fs-4">IUT Hall Management System © {year}</p>
    </div>
  );
};
