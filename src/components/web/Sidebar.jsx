import React, { useEffect } from 'react';
import Logo from '/images/Assured-BID-Logo.svg';
import {
  Calendar1,
  ChevronDown,
  ChevronUp,
  Ellipsis,
  Files,
  FileText,
  FolderOpen,
  Folders,
  House,
  LibraryBig,
  Settings,
  UserCog,
  Users,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div>
      {/* <!-- Navigation Toggle --> */}
      <div className="lg:hidden py-5 text-center">
        <button
          type="button"
          className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-p-primary border border-gray-800 text-white text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-gray-50 hover:text-p-primary focus:outline-none focus:bg-gray-900 dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200 dark:focus:bg-neutral-200"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="hs-sidebar-collapsible-group"
          aria-label="Toggle navigation"
          data-hs-overlay="#hs-sidebar-collapsible-group"
        >
          <Ellipsis />
        </button>
      </div>
      {/* <!-- End Navigation Toggle --> */}

      {/* <!-- Sidebar --> */}
      <div
        id="hs-sidebar-collapsible-group"
        className="hs-overlay [--auto-close:lg] lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 w-64
hs-overlay-open:translate-x-0
-translate-x-full transition-all duration-300 transform
h-full
hidden
fixed top-0 start-0 bottom-0 z-[60]
bg-white border-e border-gray-200 dark:bg-neutral-800 dark:border-neutral-700"
        role="dialog"
        tabindex="-1"
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col h-full max-h-full ">
          <img src={Logo} alt="" className="px-5 pt-5 pb-6" />
          {/* <!-- Header --> */}
          <header className="p-4 flex justify-between items-center gap-x-2">
            <a
              className="flex-none font-medium text-[12px] text-p-secondary-black focus:outline-none focus:opacity-80 dark:text-white"
              href="#"
              aria-label="Brand"
            >
              MAIN MENU
            </a>

            <div className="lg:hidden -me-2">
              {/* <!-- Close Button --> */}
              <button
                type="button"
                className="flex justify-center items-center gap-x-3 size-6 bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                data-hs-overlay="#hs-sidebar-collapsible-group"
              >
                <X />
                <span className="sr-only">Close</span>
              </button>
              {/* <!-- End Close Button --> */}
            </div>
          </header>
          {/* <!-- End Header --> */}

          {/* <!-- Body --> */}
          <nav className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div
              className="hs-accordion-group pb-0 px-2  w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open
            >
              <ul className="space-y-1">
                <li>
                  <Link className="flex items-center gap-x-3 py-2 px-2.5 bg-p-primary text-[14px] font-medium text-white rounded-lg hover:bg-gray-100 hover:text-p-primary dark:bg-gray-100 dark:text-white">
                    <House size={18} />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="available-tender"
                    className="flex items-center gap-x-3 py-2 px-2.5 text-[14px] font-medium text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                    href="#"
                  >
                    <FolderOpen size={18} />
                    Available Tender
                  </Link>
                </li>

                <li className="hs-accordion" id="account-accordion">
                  <button
                    type="button"
                    className="hs-accordion-toggle w-full text-start flex items-center gap-x-3 py-2 px-2.5 text-[14px] font-medium text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hs-accordion-active:text-white dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                    aria-expanded="true"
                    aria-controls="account-accordion-sub-1-collapse-1"
                  >
                    <FileText size={18} />
                    My Tender
                    <ChevronUp className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" />
                    <ChevronDown className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" />
                  </button>

                  <div
                    id="account-accordion-sub-1-collapse-1"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    role="region"
                    aria-labelledby="account-accordion"
                  >
                    <ul className="pt-1 ps-7 space-y-1">
                      <li>
                        <a
                          className="flex items-center gap-x-3 py-2 px-2.5 text-[14px] font-medium text-[#72777A] rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                          href="#"
                        >
                          Pending Tenders
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3 py-2 px-2.5 text-[14px] font-medium text-[#72777A] rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                          href="#"
                        >
                          Awarded Tenders
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3 py-2 px-2.5 text-[14px] font-medium text-[#72777A] rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                          href="#"
                        >
                          Favourite Tenders
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3 py-2 px-2.5 text-[14px] font-medium text-[#72777A] rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                          href="#"
                        >
                          Archived Tenders
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link to='tender'
                    className="flex items-center gap-x-3 py-2 px-2.5 text-[14px] font-medium text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                    href="#"
                  >
                    <Users size={18} />
                    Users
                  </Link>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3 py-2 px-2.5 text-[14px] font-medium text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                    href="#"
                  >
                    <Settings size={18} />
                    Upgrade Plan
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3 py-2 px-2.5 text-[14px] font-medium text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                    href="#"
                  >
                    <LibraryBig size={18} />
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {/* <!-- End Body --> */}
        </div>
      </div>
      {/* <!-- End Sidebar --> */}
    </div>
  );
}
