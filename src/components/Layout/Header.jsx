import { FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";

export function Header({ darkMode, toggleDarkMode, toggleSideBar }) {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-slate-300 dark:bg-slate-800">
        <div className="px-3 py-3 lg:px-5 lg:py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-en">
              <button
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={toggleSideBar}
              >
                <HiOutlineMenuAlt2 className="text-2xl " />
              </button>

              <a className="flex items-center ms-2 md:me-24">
                <MdSpaceDashboard className="dark:text-white text-purple-500 me-3 text-xl " />
                <span className="font-semibold dark:text-white whitespace-nowrap">
                  Dashboard
                </span>
              </a>
            </div>

            <div className="flex gap-2 md:gap-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>

              <button
                className=" p-1 dark:bg-slate-50 dark:text-slate-700 rounded-full "
                onClick={toggleDarkMode}
              >
                {darkMode ? <FaMoon /> : <FaSun />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
