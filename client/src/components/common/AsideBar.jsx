import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const AsideBar = (props) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        props.setIsSidebarOpen(false);
      }
    };

    // Run once on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <aside
        className={`hs-overlay transition-all duration-300 transform fixed inset-y-0 z-70 start-0 overflow-hidden bg-white border-e border-gray-200 dark:border-neutral-700 dark:bg-neutral-800 md:translate-x-0 md:block
            ${props.isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            ${props.isCollapsed ? "md:w-13" : "w-64"}
        `}
        role="dialog"
        tabIndex="-1"
        aria-label="Sidebar"
      >
        {/* Header */}
        <header
          className={`py-2.5 justify-between items-center gap-x-2 transition-all duration-300 ${
            props.isCollapsed ? "block gap-x-0 px-2" : "flex px-4"
          }`}
        >
          <div
            className={`-ms-2 flex items-center gap-x-1 transition-all duration-300 ${
              props.isCollapsed ? "mb-3" : "mb-0"
            }`}
          >
            <div className="">
              <a
                className={`px-2 py-1 rounded-lg transition-all duration-300 font-semibold text-gray-800 dark:text-neutral-200 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 ${
                  props.isCollapsed ? "text-sm" : "text-xl"
                }`}
                href="#"
                aria-label="Preline"
              >
                OPCA
              </a>
            </div>
          </div>

          {/* Sidebar Toggle */}
          <button
            type="button"
            className="md:flex hidden justify-center items-center flex-none gap-x-3 size-9 text-sm text-gray-500 rounded-lg transition-all duration-300 transform hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            onClick={() => props.setIsCollapsed(!props.isCollapsed)}
          >
            <svg
              className={`shrink-0 size-4 transition-all duration-300 transform ${
                props.isCollapsed ? "block" : "hidden"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M15 3v18"></path>
              <path d="m8 9 3 3-3 3"></path>
            </svg>
            <svg
              className={`shrink-0 size-4 transition-all duration-300 transform ${
                props.isCollapsed ? "hidden" : "block"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M15 3v18"></path>
              <path d="m10 15-3-3 3-3"></path>
            </svg>
            <span className="sr-only">Sidebar Toggle</span>
          </button>

          {/* Mobile Close Button */}
          <button
            type="button"
            className="flex md:hidden justify-center items-center gap-x-3 size-6 bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
            onClick={() => props.setIsSidebarOpen(!props.isSidebarOpen)}
          >
            <svg
              className="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Close</span>
          </button>
        </header>

        <div className="mb-5 px-2 flex flex-col gap-y-5">
          {/* Navigation List */}
          <ul className="flex flex-col gap-y-0.5">
            <li>
              <a
                className="group relative w-full flex items-center gap-1 py-1.5 px-2.5 relative text-sm text-gray-800 rounded-lg before:absolute before:inset-y-0 before:-start-2 before:rounded-e-full before:w-1 before:h-full hover:bg-gray-100/70 focus:outline-hidden focus:bg-gray-100/70 dark:hover:bg-neutral-700/50 dark:focus:bg-neutral-700/50 dark:text-neutral-200"
                href="#"
              >
                <span className="-ms-[5px] flex shrink-0 justify-center items-center size-6">
                  <svg
                    className="shrink-0 size-4 group-hover:scale-115 group-focus:scale-115 transition-transform duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </span>
                <span className="truncate hs-overlay-minified:opacity-0 transition-opacity duration-300">
                  New chat
                </span>
              </a>
            </li>
            <li>
              <button
                type="button"
                className="group w-full flex items-center gap-1 py-1.5 px-2.5 text-sm text-gray-800 truncate rounded-lg hover:bg-gray-100/70 focus:outline-hidden focus:bg-gray-100/70 dark:hover:bg-neutral-700/50 dark:focus:bg-neutral-700/50 dark:text-neutral-200"
                aria-haspopup="dialog"
                aria-expanded="false"
              >
                <span className="-ms-[5px] flex shrink-0 justify-center items-center size-6">
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      className="group-hover:scale-100 group-focus:scale-100 scale-115 scale-115 transition-transform duration-300"
                      d="m21 21-4.34-4.34"
                    />
                    <circle cx="11" cy="11" r="8" />
                  </svg>
                </span>
                <span className="truncate hs-overlay-minified:opacity-0 transition-opacity duration-300">
                  Search chats
                </span>
              </button>
            </li>
            <li>
              <a
                className="group relative w-full flex items-center gap-1 py-1.5 px-2.5 relative text-sm text-gray-800 rounded-lg before:absolute before:inset-y-0 before:-start-2 before:rounded-e-full before:w-1 before:h-full hover:bg-gray-100/70 focus:outline-hidden focus:bg-gray-100/70 dark:hover:bg-neutral-700/50 dark:focus:bg-neutral-700/50 dark:text-neutral-200"
                href="#"
              >
                <span className="-ms-[5px] flex shrink-0 justify-center items-center size-6">
                  <svg
                    className="shrink-0 size-4 group-hover:rotate-180 group-focus:rotate-180 transition-transform duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </span>
                <span className="truncate hs-overlay-minified:opacity-0 transition-opacity duration-300">
                  Explore
                </span>
              </a>
            </li>
            <li>
              <a
                className="group relative w-full flex items-center gap-1 py-1.5 px-2.5 relative text-sm text-gray-800 rounded-lg before:absolute before:inset-y-0 before:-start-2 before:rounded-e-full before:w-1 before:h-full hover:bg-gray-100/70 focus:outline-hidden focus:bg-gray-100/70 dark:hover:bg-neutral-700/50 dark:focus:bg-neutral-700/50 dark:text-neutral-200"
                href="#"
              >
                <span className="-ms-[5px] flex shrink-0 justify-center items-center size-6">
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      className="group-hover:scale-110 group-focus:scale-110 transition-transform duration-300"
                      d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"
                    />
                    <path
                      className="group-hover:scale-95 group-focus:scale-95 transition-transform duration-300"
                      d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
                    />
                  </svg>
                </span>
                <span className="truncate hs-overlay-minified:opacity-0 transition-opacity duration-300">
                  Chat details
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AsideBar;
