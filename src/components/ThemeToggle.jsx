import useDarkMode from '../hooks/useDarkMode';
import { FiSun, FiMoon } from 'react-icons/fi'; // Necesitas instalar react-icons

export default function ThemeToggle() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <button
      onClick={() => setTheme(colorTheme)}
      className="p-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {colorTheme === 'light' ? (
        <FiSun className="text-yellow-400 w-6 h-6" />
      ) : (
        <FiMoon className="text-indigo-600 w-6 h-6" />
      )}
    </button>
  );
}