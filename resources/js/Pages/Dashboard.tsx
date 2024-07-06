import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'
import Subscriptions from '@/Components/statistics/Subscriptions'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import MonthlyRevenue from '@/Components/statistics/MonthlyRevenue'
import UserEngagement from '@/Components/statistics/UserEngagement'
import Applicants from '@/Components/statistics/Applicants'
import SalesChart from '@/Components/statistics/SalesChart'
import SentEmails from '@/Components/SentEmails'

export default function Dashboard({ auth, users }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-2xl font-black">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="flex flex-col gap-4 overflow-y-scroll scroll-smooth py-4 2xl:h-[900px]">
                <div className="grid w-full grow-0 grid-cols-4 gap-4 px-8">
                    <MonthlyRevenue />
                    <UserEngagement />
                    <Applicants />
                    <Subscriptions />
                </div>

                <div className="col-span-5 grid w-full grid-cols-5 gap-4 px-8">
                    <div className="col-span-3 flex h-[600px]">
                        <SalesChart />
                    </div>
                    <div className="col-span-2 flex">
                        <SentEmails users={users} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
