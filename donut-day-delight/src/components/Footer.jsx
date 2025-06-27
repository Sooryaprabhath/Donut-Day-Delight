import React from 'react';

function Footer() {
  return (
    <footer>
      <div>
        &copy; {new Date().getFullYear()} Donut Day Delight &mdash; <a href="https://dev.to/challenges" target="_blank" rel="noopener noreferrer">DEV Challenge</a>
      </div>
    </footer>
  );
}

export default Footer;
