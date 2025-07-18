import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'CONNECT', href: '/staking' },
  { name: 'STAKING', href: '/staking' },
  { name: 'REWARD', href: '/staking' },
  { name: 'DELEGATE', href: '/staking' },
  { name: 'RAKEBACK', href: '/staking' },
  { name: 'SYNCRONIZE', href: '/staking' },
  { name: 'HELP', href: '/staking' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const Logo = (
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 21 23"
      >
        <path
          fill="currentColor"
          d="M12.53 17.783v-9.08a4.144 4.144 0 0 0-4.14-4.117v14.511a3.8 3.8 0 0 0 3.96 3.841 4.28 4.28 0 0 0 2.816-.816c-2.39-.253-2.635-1.693-2.635-4.339"
        ></path>
        <path
          fill="currentColor"
          d="M3.775.787A3.8 3.8 0 0 0 0 4.587h16.893a3.8 3.8 0 0 0 3.775-3.8z"
        ></path>
      </svg>
    </div>
  );

  const WalletButton = (
    <a
      className="flex gap-1 items-center px-4 py-2 font-semibold text-gray-900 rounded transition-colors"
      target="_self"
      // href="https://bittensor.com/wallet"
    >
      <span>τ</span>
      <span>0.00</span>
    </a>
  );

  return (
    <nav className="flex relative z-20 justify-between items-center px-6 w-full py-3 lg:py-2 bg-[#f8f9fa] md:px-10">
      {/* Left Logo */}
      {Logo}
      {/* Desktop Nav */}
      <ul className="hidden space-x-8 md:flex">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.href}
              className="text-sm font-normal text-gray-800 transition-colors hover:text-black"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* Wallet Button (right) */}
      <div className="hidden md:block">{WalletButton}</div>
      {/* Hamburger Icon */}
      <button
        className="absolute right-6 top-1/2 p-2 -translate-y-1/2 md:hidden focus:outline-none"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="text-gray-500 size-8" />
      </button>
      {/* Mobile Fullscreen Overlay */}
      {menuOpen && (
        <div className="flex fixed inset-0 z-50 flex-col items-center bg-white">
          <button
            className="absolute top-6 right-6 p-2 focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X />
          </button>
          <ul className="flex flex-col mt-16 space-y-8 w-full text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-sm font-normal text-gray-900 transition-colors hover:text-black"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
