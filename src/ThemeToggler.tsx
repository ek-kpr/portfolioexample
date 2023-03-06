import React from 'react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";



type Props = {}

const ThemeToggler = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      className="mx-2 px-2 bg-transparent w-8 h-8 flex items-center justify-center rounded-lg hover:ring-2 ring-orange-600 transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        <MoonIcon className="text-gray-500 w-5 h-5" />
      ) : (
        <SunIcon className="text-gray-500 w-5 h-5" />
      )}
    </button>
  );
};
export default ThemeToggler;
