import { useState, PropsWithChildren, ReactNode } from 'react'
import { App, User } from '@/types'
import { Button } from '@/Components/ui/button'
import UserDropdownMenu from '@/Components/UserDropdownMenu'
import SearchButton from '@/Components/SearchButton'
import { Link, usePage } from '@inertiajs/react'
import menuItems from '@/menus'
import { PiChatCircleDotsDuotone, PiBellSimpleDuotone } from 'react-icons/pi'

export default function Authenticated({
    user,
    app,
    header,
    children
}: PropsWithChildren<{ user: User; app: App; header?: ReactNode }>) {
    const { url } = usePage()

    return (
        <div className="min-h-screen bg-gray-200 dark:bg-black">
            <div className="flex h-screen p-3">
                <div className="flex w-full rounded-xl shadow-sm dark:bg-gray-900">
                    {/* Sidebar */}
                    <div className="flex h-full w-72 flex-col justify-between rounded-s-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                        <div className="flex flex-col">
                            <header className="flex h-16 items-center justify-center gap-2 border-b border-gray-200">
                                <img
                                    src="/images/sample-logo.svg"
                                    alt="Logo"
                                    className="size-6"
                                />
                                <h1 className="font-bold">BoringAdmin v1.0</h1>
                            </header>

                            {/* Main navigation */}
                            <nav className="flex flex-col gap-y-1 py-4 text-sm font-medium">
                                {menuItems.map((menu, index) => (
                                    <>
                                        {menu.label === 'separator' ? (
                                            <div className="my-2 w-full border-t border-gray-200"></div>
                                        ) : (
                                            <Link
                                                key={index}
                                                href={menu.href}
                                                className={`mx-3 flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 ${url === menu.href ? 'bg-black text-white hover:bg-black' : ''}`}
                                            >
                                                {menu.icon}
                                                <span>{menu.label}</span>
                                            </Link>
                                        )}
                                    </>
                                ))}
                            </nav>
                        </div>
                        <div className="flex justify-end p-4 text-xs text-gray-400 dark:text-gray-600">
                            <span>{app}</span>
                        </div>
                    </div>

                    {/* Main contents */}
                    <div className="flex w-full flex-col rounded-e-xl border-b border-e border-r border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                        <div className="flex h-16 w-full items-center justify-between border-b border-gray-200 px-8 dark:border-gray-800">
                            {header}
                            <div className="flex w-80 items-center">
                                <SearchButton className="" />
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="mr-4 flex gap-1">
                                    <Button variant="ghost" size="icon">
                                        <PiChatCircleDotsDuotone className="size-8" />
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <PiBellSimpleDuotone className="size-8" />
                                    </Button>
                                </div>
                                <UserDropdownMenu user={user} />
                            </div>
                        </div>
                        <main>{children}</main>
                    </div>
                </div>
            </div>
        </div>
    )
}
