"use client";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  Dialog,
  Disclosure,
  PopoverGroup,
  Popover,
  PopoverButton,
  Transition,
  PopoverPanel,
  Description,
  DialogPanel,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    {
      name: "Book a Stay",
      description: "Get a better understanding of your traffic",
      href: "#",
      icon: HomeIcon,
    },
    {
      name: "Book a Flight",
      description: "Speak directly to your customers",
      href: "#",
      icon: PaperAirplaneIcon,
    },
    {
      name: "Contact our Support Team",
      description: "Your customers data will be safe and secure",
      href: "#",
      icon: ChatBubbleLeftIcon,
    },
  ];

  const callsToActions = [
    { name: "See Demo Booking", href: "#", icon: PlayCircleIcon },
    { name: "Contact Support", href: "#", icon: PhoneIcon },
  ];

  return (
    <>
      <header className="bg-blue-900">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          {/* logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Booking.com</span>
              <img
                className="h-12 w-auto"
                src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w"
                alt=""
              />
            </Link>
          </div>
          {/* logo */}

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounder-md p-2.5 text-white"
              onClick={() => {
                setMobileMenuOpen(true);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                Stays
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-white"
                  aria-hidden="true"
                />
              </PopoverButton>
              <Transition
                as={Fragment}
                enter="transition ease-out durtaion-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounder-3xl shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item, index) => (
                      <div
                        key={index}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounder-lg bg-gray-50 group-hover:bg-gray-200">
                          <item.icon
                            className="h-6 w-6 group-hover:text-blue-600"
                            aria-hidden="true"
                          />
                        </div>

                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-blue-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-blue-900">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToActions.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading6 text-blue-800 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-blue-800"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </PopoverPanel>
              </Transition>
            </Popover>

            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Flights
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Car Rentals
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Attractions
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Flight + Hotel
            </a>
          </PopoverGroup>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10">
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blue-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only"></span>
                  <img
                    className="h-8 w-auto"
                    src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounder-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-blue-800">
                            Stays
                            <ChevronDownIcon
                              className={cn(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                            />
                          </DisclosureButton>
                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...products, ...callsToActions].map(
                              (item, index) => (
                                <DisclosureButton
                                  key={index}
                                  as="a"
                                  href={item.href}
                                  className="block rounder-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                                >
                                  {item.name}
                                </DisclosureButton>
                              )
                            )}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                    <a
                      href="#"
                      className="-mx-3 block rounder-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                    >
                      Flights
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounder-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                    >
                      Car Rentals
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounder-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                    >
                      Attractions
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounder-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                    >
                      Flight + Hotel
                    </a>
                  </div>

                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </header>
    </>
  );
};

export default Header;
