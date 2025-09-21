import React from "react";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";

const OptionChainData = () => {
  return (
    <main className="pb-4 h-screen flex flex-col bg-white dark:bg-neutral-800">
      <div className="h-full flex flex-col justify-between sm:justify-center max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col justify-center items-center grow sm:flex-none">
          <h1 className="mb-8 text-3xl text-center text-gray-800 dark:text-neutral-200">
            What can I help with?
          </h1>
        </div>

        {/* Body */}
        <div>
          {/* Textarea */}
          <div className="bg-white border border-gray-300 rounded-2xl shadow-xs dark:bg-neutral-800 dark:border-neutral-600">
            <label htmlFor="hs-pro-aimt" className="sr-only">Ask anything...</label>

            <div className="pb-2 px-2">
              <textarea 
                id="hs-pro-aimt" 
                className="max-h-36 mt-2 pt-4 pb-2 ps-2 pe-4 block w-full bg-transparent border-transparent resize-none text-gray-800 placeholder-gray-500 focus:outline-hidden focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:text-neutral-200 dark:placeholder-neutral-500 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" 
                placeholder="Ask anything..." 
                rows="1"
              ></textarea>

              <div className="pt-2 flex justify-between items-center gap-x-1">
                {/* Left Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Add Media Dropdown */}
                  <div className="hs-dropdown [--scope:window] relative inline-flex">
                    <button 
                      type="button" 
                      className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    >
                      <svg className="shrink-0 size-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/>
                        <path d="M12 5v14"/>
                      </svg>
                      <span className="sr-only">Add Media</span>
                    </button>

                    {/* Add Media Dropdown Menu */}
                    <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-50 transition-[opacity,margin] duration opacity-0 hidden z-11 bg-white border border-gray-200 rounded-xl shadow-lg before:absolute before:-top-4 before:start-0 before:w-full before:h-5 dark:bg-neutral-950 dark:border-neutral-700" role="menu" aria-orientation="vertical">
                      <div className="p-1 space-y-0.5">
                        <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                          <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/>
                          </svg>
                          Upload a file
                        </button>
                        <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                          <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                            <circle cx="12" cy="13" r="3"/>
                          </svg>
                          Add a screenshot
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Tools Dropdown */}
                  <div className="hs-dropdown [--scope:window] relative inline-flex">
                    <button 
                      type="button" 
                      className="flex justify-center items-center gap-x-1 py-1.5 px-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    >
                      <svg className="shrink-0 size-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 17H5"/>
                        <path d="M19 7h-9"/>
                        <circle cx="17" cy="17" r="3"/>
                        <circle cx="7" cy="7" r="3"/>
                      </svg>
                      Tools
                    </button>

                    {/* Tools Dropdown Menu */}
                    <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-50 transition-[opacity,margin] duration opacity-0 hidden z-11 bg-white border border-gray-200 rounded-xl shadow-lg before:absolute before:-top-4 before:start-0 before:w-full before:h-5 dark:bg-neutral-950 dark:border-neutral-700" role="menu" aria-orientation="vertical">
                      <div className="p-1 space-y-0.5">
                        <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                          <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 22H4a2 2 0 0 1-2-2V6"/>
                            <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"/>
                            <circle cx="12" cy="8" r="2"/>
                            <rect width="16" height="16" x="6" y="2" rx="2"/>
                          </svg>
                          Create an image
                        </button>
                        <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                          <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                            <path d="M2 12h20"/>
                          </svg>
                          Search the web
                        </button>
                        <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                          <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>
                            <path d="m15 5 4 4"/>
                          </svg>
                          Write or code
                        </button>
                        <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                          <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"/>
                            <path d="m13.56 11.747 4.332-.924"/>
                            <path d="m16 21-3.105-6.21"/>
                            <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"/>
                            <path d="m6.158 8.633 1.114 4.456"/>
                            <path d="m8 21 3.105-6.21"/>
                            <circle cx="12" cy="13" r="2"/>
                          </svg>
                          Run deep research
                        </button>
                        <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                          <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
                            <path d="M9 18h6"/>
                            <path d="M10 22h4"/>
                          </svg>
                          Think for longer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Model Select */}
                  <div className="relative inline-block md:-ms-2.5">
                    <select 
                      id="hs-pro-select-model" 
                      className="relative py-1.5 ps-3 pe-7 inline-flex justify-center items-center text-start bg-white text-gray-800 text-sm rounded-lg align-middle hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 before:absolute before:inset-0 before:z-1 hover:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    >
                      <option value="">Choose Model</option>
                      <option value="1">Claude-4-sonnet</option>
                      <option value="2">Claude-3.5-sonnet</option>
                      <option value="3" selected>gpt-o3</option>
                      <option value="4">gpt-4.1</option>
                      <option value="5">gpt-4o</option>
                    </select>
                    <div className="absolute top-1/2 end-2 cursor-pointer -translate-y-1/2">
                      <svg className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </div>
                  </div>

                  {/* Voice Button */}
                  <button 
                    type="button" 
                    className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  >
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                      <line x1="12" x2="12" y1="19" y2="22"/>
                    </svg>
                    <span className="sr-only">Send voice message</span>
                  </button>

                  {/* Send Button */}
                  <button 
                    type="button" 
                    className="inline-flex shrink-0 justify-center items-center size-8 text-sm font-medium rounded-lg text-white bg-cyan-700 hover:bg-cyan-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-cyan-600"
                  >
                    <span className="sr-only">Send</span>
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 7-7 7 7"/>
                      <path d="M12 19V5"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Category Labels */}
          <div className="mt-4">
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
              <a 
                className="py-1.5 px-2.5 inline-flex items-center gap-x-1.5 text-sm text-gray-800 bg-gray-100 hover:text-cyan-700 rounded-lg focus:outline-hidden focus:text-cyan-700 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" 
                href="#"
              >
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
                Health
              </a>
              <a 
                className="py-1.5 px-2.5 inline-flex items-center gap-x-1.5 text-sm text-gray-800 bg-gray-100 hover:text-cyan-700 rounded-lg focus:outline-hidden focus:text-cyan-700 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" 
                href="#"
              >
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/>
                  <path d="M22 10v6"/>
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
                </svg>
                Learn
              </a>
              <a 
                className="py-1.5 px-2.5 inline-flex items-center gap-x-1.5 text-sm text-gray-800 bg-gray-100 hover:text-cyan-700 rounded-lg focus:outline-hidden focus:text-cyan-700 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" 
                href="#"
              >
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20v2"/>
                  <path d="M12 2v2"/>
                  <path d="M17 20v2"/>
                  <path d="M17 2v2"/>
                  <path d="M2 12h2"/>
                  <path d="M2 17h2"/>
                  <path d="M2 7h2"/>
                  <path d="M20 12h2"/>
                  <path d="M20 17h2"/>
                  <path d="M20 7h2"/>
                  <path d="M7 20v2"/>
                  <path d="M7 2v2"/>
                  <rect x="4" y="4" width="16" height="16" rx="2"/>
                  <rect x="8" y="8" width="8" height="8" rx="1"/>
                </svg>
                Technology
              </a>
              <a 
                className="py-1.5 px-2.5 inline-flex items-center gap-x-1.5 text-sm text-gray-800 bg-gray-100 hover:text-cyan-700 rounded-lg focus:outline-hidden focus:text-cyan-700 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" 
                href="#"
              >
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 2v2"/>
                  <path d="M14 2v2"/>
                  <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/>
                  <path d="M6 2v2"/>
                </svg>
                Life stuff
              </a>
              <a 
                className="py-1.5 px-2.5 inline-flex items-center gap-x-1.5 text-sm text-gray-800 bg-gray-100 hover:text-cyan-700 rounded-lg focus:outline-hidden focus:text-cyan-700 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" 
                href="#"
              >
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18h8"/>
                  <path d="M3 22h18"/>
                  <path d="M14 22a7 7 0 1 0 0-14h-1"/>
                  <path d="M9 14h2"/>
                  <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/>
                  <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>
                </svg>
                Science
              </a>
              <a 
                className="py-1.5 px-2.5 inline-flex items-center gap-x-1.5 text-sm text-gray-800 bg-gray-100 hover:text-cyan-700 rounded-lg focus:outline-hidden focus:text-cyan-700 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" 
                href="#"
              >
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 8 6 6"/>
                  <path d="m4 14 6-6 2-3"/>
                  <path d="M2 5h12"/>
                  <path d="M7 2h1"/>
                  <path d="m22 22-5-10-5 10"/>
                  <path d="M14 18h6"/>
                </svg>
                Language
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OptionChainData;
