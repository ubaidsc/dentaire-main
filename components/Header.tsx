import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { HiBars3, HiXMark } from "react-icons/hi2";
import Image from 'next/image';

import logo from '../media/logo.jpg';
import Link from 'next/link';

const navigation = [
    { name: 'Our Firm', href: '/cabinet' },
    { name: 'Care & Services', href: '#' },
    { name: 'Realisations', href: '#' },
    { name: 'Contact us', href: '#' },
  ]

type Props = {}

function Header({}: Props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="px-6 pt-6 xl:pt-14 lg:px-8 h-auto max-w-screen-2xl mx-auto sm:text-xs xl:text-sm">
            <nav className="flex items-center justify-between" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 2xl:text-lg">
                        <Image width={50} height={50} className="h-10 rounded-full w-auto" src={logo} alt="" />
                        <span className="">Smile Dental Office</span>
                    </Link>
                </div>
            <div className="flex lg:hidden">
                <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
                >
                <span className="sr-only">Open main menu</span>
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-semibold leading-6 text-gray-900">
                    {item.name}
                </a>
                ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#location" className="leading-6 text-white bg-purple rounded-md py-2 px-5">
                Shall we call you back ?
                </a>
            </div>
            </nav>
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                    <div className="flex items-center justify-between" id="logo">
                        <Link href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                            <Image width={50} height={50} className="h-10 rounded-full w-auto" src={logo} alt="" />
                            <span className="">Smile Dental Office</span>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <HiXMark className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                                    >
                                    {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-white bg-purple text-center"
                                >
                                    Shall we call you back ?
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
      </div>
    )
}

export default Header