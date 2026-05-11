import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      className="theme-btn"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;