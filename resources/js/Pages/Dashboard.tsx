import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'

export default function Dashboard({ auth, app }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            app={app}
            header={<h2 className="text-xl font-bold">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="flex p-8">Main contents</div>
        </AuthenticatedLayout>
    )
}
