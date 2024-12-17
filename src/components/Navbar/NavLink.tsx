import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-gold-400 transition-colors"
    >
      {children}
    </a>
  );
};

export default NavLink;