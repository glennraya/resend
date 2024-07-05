import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import MonthlyRevenue from '@/Components/statistics/MonthlyRevenue'
import UserEngagement from '@/Components/statistics/UserEngagement'
import Applicants from '@/Components/statistics/Applicants'
import SalesChart from '@/Components/statistics/SalesChart'
import {
    Card,
    CardDescription,
    CardContent,
    CardHeader,
    CardTitle
} from '@/Components/ui/card'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/Components/ui/table'
import { Badge } from '@/Components/ui/badge'
import { PiQuestionDuotone } from 'react-icons/pi'

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-bold">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="flex h-[800px] flex-col gap-4 py-4">
                <div className="grid h-full w-full grid-cols-4 gap-4 px-8">
                    <MonthlyRevenue />
                    <UserEngagement />
                    <Applicants />
                    <Applicants />
                </div>

                <div className="grid w-full grid-cols-5 gap-4 px-8">
                    <div className="col-span-3 flex h-[600px]">
                        <SalesChart />
                    </div>
                    <div className="col-span-2 flex">
                        <Card className="h-[600px] w-full overflow-hidden">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between text-2xl font-bold">
                                    <span>Support Tickets</span>
                                    <span>
                                        <PiQuestionDuotone className="size-7" />
                                    </span>
                                </CardTitle>
                                <CardDescription>
                                    Recent orders from your store.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="max-h-[80%] overflow-y-scroll scroll-smooth">
                                <Table className="">
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Customer</TableHead>
                                            <TableHead className="hidden sm:table-cell">
                                                Type
                                            </TableHead>
                                            <TableHead className="hidden sm:table-cell">
                                                Status
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                <div className="font-medium">
                                                    Liam Johnson
                                                </div>
                                                <div className="hidden text-sm text-muted-foreground md:inline">
                                                    liam@example.com
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                Sale
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                <Badge
                                                    className="text-xs"
                                                    variant="secondary"
                                                >
                                                    Fulfilled
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
