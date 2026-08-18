'use client';

import Link from 'next/link';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left ">
      <MenuButton className="inline-flex items-center gap-2 bg-primary border-none px-5 py-2 text-sm font-medium">
        Services
        <ChevronDownIcon className="h-5 w-5" />
      </MenuButton>

      <MenuItems
        anchor="bottom end"
        transition
        className="mt-2 w-56 fixed z-50 origin-top-right rounded-xl bg-white/80 backdrop-blur-md   transition duration-200 ease-out
        data-closed:scale-95
        data-closed:opacity-0"
      >
        <div className="py-2">
          <MenuItem>
            {({ focus }) => (
              <Link
                href="/services/rehabilitation-services"
                className={`block px-4 py-2 text-sm ${
                  focus
                    ? 'bg-primary text-[#1eb560]'
                    : 'text-gray-700'
                }`}
              >
                Rehabilitation Services
              </Link>
            )}
          </MenuItem>

          <MenuItem>
            {({ focus }) => (
              <Link
                href="/services/counselling-services"
                className={`block px-4 py-2 text-sm ${
                  focus
                    ? 'bg-primary text-[#1eb560]'
                    : 'text-gray-700'
                }`}
              >
                Counselling Services
              </Link>
            )}
          </MenuItem>

          <MenuItem>
            {({ focus }) => (
              <Link
                href="/services/research-and-publication"
                className={`block px-4 py-2 text-sm ${
                  focus
                    ? 'bg-primary text-[#1eb560]'
                    : 'text-gray-700'
                }`}
              >
                Research & Publication
              </Link>
            )}
          </MenuItem>

          <MenuItem>
            {({ focus }) => (
              <Link
                href="/services/internship-and-training"
                className={`block px-4 py-2 text-sm ${
                  focus
                    ? 'bg-primary text-[#1eb560]'
                    : 'text-gray-700'
                }`}
              >
                Internship & Training
              </Link>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}