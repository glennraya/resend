import { PropsWithChildren, ReactNode } from 'react'
import { User } from '@/types'
import { Button } from '@/Components/ui/button'
import { Badge } from '@/Components/ui/badge'
import { Link, usePage } from '@inertiajs/react'
import {
    PiChatCenteredDotsFill,
    PiBellFill,
    PiUsersFourDuotone,
    PiLightningDuotone,
    PiCurrencyCircleDollarDuotone
} from 'react-icons/pi'
import menuItems from '@/menus'
import UserDropdownMenu from '@/Components/UserDropdownMenu'
import SearchButton from '@/Components/SearchButton'
import SearchMenu from '@/Components/SearchMenu'

export default function Authenticated({
    user,
    header,
    children
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const { url } = usePage()

    return (
        <div className="min-h-dvh bg-gray-200 dark:bg-black">
            <div className="flex p-3 2xl:h-screen">
                <div className="flex w-full rounded-xl shadow-sm dark:bg-gray-900">
                    {/* Sidebar */}
                    <div className="flex h-full w-96 flex-col justify-between rounded-s-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                        <div className="flex flex-col">
                            <header className="flex h-16 items-center justify-center gap-2 border-b border-gray-200 dark:border-gray-800">
                                <img
                                    src="/images/sample-logo.svg"
                                    alt="Logo"
                                    className="size-6 dark:text-white"
                                />

                                <h1 className="font-bold">PoorManDash v1.0</h1>
                            </header>

                            {/* Main navigation */}
                            <nav className="flex flex-col gap-y-1 overflow-y-scroll py-4 text-sm font-medium xl:h-[85%] 2xl:h-auto">
                                <div className="mb-2 px-3">
                                    <SearchMenu />
                                </div>
                                {menuItems.map((menu, index) =>
                                    menu.label === 'separator' ? (
                                        <div
                                            key={`separator-${index}`}
                                            className="my-2 w-full border-t border-gray-200 dark:border-gray-800"
                                        ></div>
                                    ) : (
                                        <Link
                                            key={`menu-${index}`}
                                            href={menu.href ?? '#'}
                                            className={`mx-3 flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 ${url === menu.href ? 'bg-black text-white hover:bg-black' : 'dark:hover:bg-gray-700'}`}
                                        >
                                            {menu.icon}
                                            <span>{menu.label}</span>
                                        </Link>
                                    )
                                )}
                            </nav>
                        </div>
                        <div className="flex justify-start p-4 text-xs text-gray-400 dark:text-gray-600">
                            <span>PoorManDash v1.0</span>
                        </div>
                    </div>

                    {/* Main contents */}
                    <div className="relative flex w-full flex-col overflow-hidden rounded-e-xl border-b border-e border-r border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                        <div className="flex h-16 w-full items-center justify-between border-b border-gray-200 px-8 dark:border-gray-800">
                            {header}
                            <div className="flex w-80 items-center">
                                <SearchButton />
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="mr-4 flex gap-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="relative rounded-full"
                                    >
                                        <span className="absolute -right-1 -top-3 flex size-6 items-center justify-center rounded-full border-2 border-white bg-red-600 text-xs font-bold text-white dark:border-gray-800">
                                            5
                                        </span>
                                        <PiChatCenteredDotsFill className="size-8" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="relative rounded-full"
                                    >
                                        <span className="absolute -right-1 -top-3 flex size-6 items-center justify-center rounded-full border-2 border-white bg-red-600 text-xs font-bold text-white dark:border-gray-800">
                                            8
                                        </span>
                                        <PiBellFill className="size-8" />
                                    </Button>
                                </div>
                                <UserDropdownMenu user={user} />
                            </div>
                        </div>

                        <main className="flex flex-col">{children}</main>

                        {/* Footer */}
                        <div className="absolute bottom-0 right-0 z-10 flex h-12 w-full items-center justify-between border-t border-gray-200 bg-white px-8 dark:border-gray-800 dark:bg-gray-900">
                            <div className="flex items-center gap-2">
                                <PiUsersFourDuotone className="size-4" />
                                <span className="font-mono text-xs font-medium">
                                    Users Online:{' '}
                                    <span className="font-bold">1,455</span>
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <PiCurrencyCircleDollarDuotone className="size-4" />
                                <span className="font-mono text-xs font-medium">
                                    Today's Sale:{' '}
                                    <span className="font-bold">$3,298.75</span>
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <PiLightningDuotone className="size-4" />
                                <span className="font-mono text-xs font-medium">
                                    System Status:{' '}
                                    <Badge
                                        variant="default"
                                        className="bg-green-500 font-bold"
                                    >
                                        Operational
                                    </Badge>
                                </span>
                            </div>
                        </div>
                        {/* End of footer */}
                    </div>
                </div>
            </div>
        </div>
    )
}
