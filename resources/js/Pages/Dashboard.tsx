import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-bold">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="flex w-full p-8">Main contents</div>
        </AuthenticatedLayout>
    )
}
