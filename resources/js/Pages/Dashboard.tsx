import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import MonthlyRevenue from '@/Components/statistics/MonthlyRevenue'
import UserEngagement from '@/Components/statistics/UserEngagement'
import SalesChart from '@/Components/statistics/SalesChart'
import SentEmails from '@/Components/SentEmails'

export default function Dashboard({ auth, users }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-2xl font-black">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="flex flex-col gap-4 overflow-y-scroll scroll-smooth py-4">
                <div className="grid grid-cols-2 gap-4 px-8">
                    <div className="grid w-full grid-cols-2 gap-4">
                        <MonthlyRevenue />
                        <UserEngagement />
                        <div className="col-span-2 flex">
                            <SalesChart />
                        </div>
                        {/* <Applicants />
                        <Subscriptions /> */}
                    </div>

                    <SentEmails users={users} />
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
