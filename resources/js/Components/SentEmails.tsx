import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/Components/ui/table'
import {
    Card,
    CardDescription,
    CardContent,
    CardHeader,
    CardTitle
} from '@/Components/ui/card'
import { Badge } from '@/Components/ui/badge'
import { PiEnvelopeDuotone } from 'react-icons/pi'
import { User } from '@/types'

const SentEmails = ({ users }: { users: User[] }) => {
    return (
        <Card className="h-[600px] w-full overflow-hidden hover:bg-gray-50 dark:hover:bg-gray-800">
            <CardHeader>
                <CardTitle className="flex items-center justify-between text-2xl font-bold">
                    <span>Task Emails for Developers</span>
                    <span>
                        <PiEnvelopeDuotone className="size-7" />
                    </span>
                </CardTitle>
                <CardDescription>
                    Sent project task emails to developers.
                </CardDescription>
            </CardHeader>
            <CardContent className="max-h-[80%] overflow-y-scroll scroll-smooth">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Member</TableHead>
                            {/* <TableHead className="hidden sm:table-cell">
                                Role
                            </TableHead> */}
                            <TableHead className="hidden sm:table-cell">
                                Status
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users?.map(user => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <div className="font-medium">
                                        {user.name}
                                    </div>
                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                        {user.email}
                                    </div>
                                </TableCell>
                                {/* <TableCell className="hidden sm:table-cell">
                                Fullstack Web Developer
                            </TableCell> */}
                                <TableCell className="hidden sm:table-cell">
                                    <Badge
                                        className="text-xs"
                                        variant="secondary"
                                    >
                                        Unread
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default SentEmails
