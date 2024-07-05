import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import MonthlyRevenue from '@/Components/statistics/MonthlyRevenue'
import UserEngagement from '@/Components/statistics/UserEngagement'
import Applicants from '@/Components/statistics/Applicants'
import SalesChart from '@/Components/statistics/SalesChart'

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-bold">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="grid h-full w-full grid-cols-4 gap-4 p-8">
                <MonthlyRevenue />
                <UserEngagement />
                <Applicants />
                <Applicants />

                <div className="col-span-2 flex">
                    <SalesChart />
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
