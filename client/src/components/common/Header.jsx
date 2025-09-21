import React from "react";

const Header = (props) => {
  return (
    <header className={`dark:bg-neutral-800 py-2.5 z-48 md:z-59 bg-white md:flex-nowrap md:justify-start flex-wrap flex fixed top-0 inset-x-0 transition-all duration-300
    ${props.isCollapsed ? "md:ms-13" : "md:ms-64"}`}>
      <nav className="px-4 sm:px-5.5 flex basis-full justify-between items-center w-full mx-auto">
        {/* Button Group */}
        <div className="flex items-center sm:gap-x-1.5 truncate">
          {/* Sidebar Toggle */}
          <button 
            type="button" 
            className="md:hidden flex justify-center items-center flex-none gap-x-3 size-9 text-sm text-gray-500 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" 
            onClick={() => {props.setIsSidebarOpen(!props.isSidebarOpen); props.setIsCollapsed(false)}}
          >
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M15 3v18"></path>
              <path d="m8 9 3 3-3 3"></path>
            </svg>
            <span className="sr-only">Sidebar Toggle</span>
          </button>

          <span className="truncate font-medium text-sm sm:text-base text-gray-800 dark:text-neutral-200">
            Preline UI Overview
          </span>

          <a 
            className="flex justify-center items-center gap-x-1.5 py-2 px-2.5 text-sm whitespace-nowrap text-cyan-700 rounded-lg hover:bg-cyan-700/10 focus:outline-hidden focus:bg-cyan-700/10 disabled:opacity-50 disabled:pointer-events-none dark:text-cyan-500 dark:hover:bg-cyan-700/20 dark:focus:bg-cyan-700/20" 
            href="#"
          >
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
              <path d="M20 3v4"/>
              <path d="M22 5h-4"/>
              <path d="M4 17v2"/>
              <path d="M5 18H3"/>
            </svg>
            Get Plus
          </a>
        </div>

        {/* Right Button Group */}
        <div className="flex items-center sm:gap-x-1.5">
          {/* More Dropdown */}
          <div className="hs-dropdown [--strategy:absolute] [--placement:bottom-right] relative inline-flex">
            <button 
              type="button" 
              className="flex justify-center items-center gap-x-3 size-9 text-sm text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
            >
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"/>
                <circle cx="12" cy="5" r="1"/>
                <circle cx="12" cy="19" r="1"/>
              </svg>
            </button>

            {/* More Dropdown Menu */}
            <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-11 bg-white border border-gray-200 rounded-xl shadow-lg before:absolute before:-top-4 before:start-0 before:w-full before:h-5 dark:bg-neutral-950 dark:border-neutral-700" role="menu" aria-orientation="vertical">
              <div className="p-1 space-y-0.5">
                <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v13"/>
                    <path d="m16 6-4-4-4 4"/>
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                  </svg>
                  Share
                </button>
                <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>
                    <path d="m15 5 4 4"/>
                  </svg>
                  Rename
                </button>
                <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="5" x="2" y="3" rx="1"/>
                    <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/>
                    <path d="M10 12h4"/>
                  </svg>
                  Archive
                </button>
                <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-red-600 hover:bg-red-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-red-50 dark:text-red-500 dark:hover:bg-red-500/20 dark:focus:bg-red-500/20">
                  <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18"/>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    <line x1="10" x2="10" y1="11" y2="17"/>
                    <line x1="14" x2="14" y1="11" y2="17"/>
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* Language Dropdown */}
          <div className="hs-dropdown [--strategy:absolute] [--placement:bottom-right] relative inline-flex">
            <button 
              type="button" 
              className="flex justify-center items-center gap-x-3 size-9 text-sm text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
            >
              <svg className="shrink-0 size-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 8 6 6"/>
                <path d="m4 14 6-6 2-3"/>
                <path d="M2 5h12"/>
                <path d="M7 2h1"/>
                <path d="m22 22-5-10-5 10"/>
                <path d="M14 18h6"/>
              </svg>
              <span className="sr-only">Language</span>
            </button>

            {/* Language Dropdown Menu */}
            <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-11 bg-white border border-gray-200 rounded-xl shadow-lg before:absolute before:-top-4 before:start-0 before:w-full before:h-5 dark:bg-neutral-950 dark:border-neutral-700" role="menu" aria-orientation="vertical">
              <div className="p-1 space-y-0.5">
                <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  English (US)
                </button>
                <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  English (UK)
                </button>
                <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  Deutsch
                </button>
                <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  Dansk
                </button>
                <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  Italiano
                </button>
                <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                  中文 (繁體)
                </button>
              </div>
            </div>
          </div>

          <div className="h-8">
            {/* Account Dropdown */}
            <div className="hs-dropdown inline-flex [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative text-start">
              <button 
                type="button" 
                className="p-0.5 inline-flex shrink-0 items-center gap-x-3 text-start rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:bg-neutral-800 dark:focus:text-neutral-200 dark:text-neutral-500" 
                aria-haspopup="menu" 
                aria-expanded="false" 
                aria-label="Dropdown"
              >
                <img 
                  className="shrink-0 size-8 rounded-full" 
                  src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" 
                  alt="Avatar" 
                />
              </button>

              {/* Account Dropdown Menu */}
              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-neutral-900 dark:border-neutral-700" role="menu" aria-orientation="vertical">
                <div className="py-2 px-3.5">
                  <span className="font-medium text-gray-800 dark:text-neutral-300">
                    James Collison
                  </span>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    jamescollison@site.com
                  </p>
                  <div className="mt-1.5">
                    <a 
                      className="flex justify-center items-center gap-x-1.5 py-2 px-2.5 font-medium text-[13px] bg-cyan-700 text-white rounded-lg hover:bg-cyan-600 focus:outline-hidden focus:bg-cyan-600 disabled:opacity-50 disabled:pointer-events-none" 
                      href="#"
                    >
                      Upgrade plan
                    </a>
                  </div>
                </div>
                <div className="px-4 py-2 border-t border-gray-200 dark:border-neutral-800">
                  {/* Theme Toggle */}
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <span className="flex-1 cursor-pointer text-sm text-gray-600 dark:text-neutral-400">Theme</span>
                    <div className="p-0.5 inline-flex cursor-pointer bg-gray-100 rounded-full dark:bg-neutral-800">
                      <button 
                        type="button" 
                        className="size-7 flex justify-center items-center bg-white shadow-sm text-gray-800 rounded-full dark:text-neutral-200 hs-auto-mode-active:bg-transparent hs-auto-mode-active:shadow-none hs-dark-mode-active:bg-transparent hs-dark-mode-active:shadow-none" 
                        data-hs-theme-click-value="default"
                      >
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="4"/>
                          <path d="M12 3v1"/>
                          <path d="M12 20v1"/>
                          <path d="M3 12h1"/>
                          <path d="M20 12h1"/>
                          <path d="m18.364 5.636-.707.707"/>
                          <path d="m6.343 17.657-.707.707"/>
                          <path d="m5.636 5.636.707.707"/>
                          <path d="m17.657 17.657.707.707"/>
                        </svg>
                        <span className="sr-only">Default (Light)</span>
                      </button>
                      <button 
                        type="button" 
                        className="size-7 flex justify-center items-center text-gray-800 rounded-full dark:text-neutral-200 hs-dark-mode-active:bg-white hs-dark-mode-active:shadow-sm hs-dark-mode-active:text-neutral-800" 
                        data-hs-theme-click-value="dark"
                      >
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                        </svg>
                        <span className="sr-only">Dark</span>
                      </button>
                      <button 
                        type="button" 
                        className="size-7 flex justify-center items-center text-gray-800 rounded-full dark:text-neutral-200 hs-auto-light-mode-active:bg-white hs-auto-dark-mode-active:bg-red-800 hs-auto-mode-active:shadow-sm" 
                        data-hs-theme-click-value="auto"
                      >
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="14" x="2" y="3" rx="2"/>
                          <line x1="8" x2="16" y1="21" y2="21"/>
                          <line x1="12" x2="12" y1="17" y2="21"/>
                        </svg>
                        <span className="sr-only">Auto (System)</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-1 border-t border-gray-200 dark:border-neutral-800">
                  <a 
                    className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" 
                    href="#"
                  >
                    <svg className="shrink-0 mt-0.5 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    Profile
                  </a>
                  <a 
                    className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" 
                    href="#"
                  >
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                      <circle cx="12" cy="13" r="3"/>
                    </svg>
                    Settings
                  </a>
                  <a 
                    className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" 
                    href="#"
                  >
                    <svg className="shrink-0 mt-0.5 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m16 17 5-5-5-5"/>
                      <path d="M21 12H9"/>
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                    </svg>
                    Log out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
