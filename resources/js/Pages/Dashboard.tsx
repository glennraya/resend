import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'
import { Button } from '@/Components/ui/button'
import UserDropdownMenu from '@/Components/UserDropdownMenu'

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="flex h-screen p-3">
                <div className="flex w-full rounded-xl shadow-lg">
                    <div className="h-full w-72 rounded-s-xl border border-gray-300 bg-white"></div>
                    <div className="flex w-full rounded-e-xl border-b border-e border-r border-t border-gray-300 bg-white">
                        <div className="flex h-16 w-full items-center justify-between border-b border-gray-300 px-3">
                            <h1 className="text-xl font-bold">Dashboard</h1>
                            <UserDropdownMenu user={auth.user} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
