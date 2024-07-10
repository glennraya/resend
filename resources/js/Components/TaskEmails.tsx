import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/Components/ui/table'
import { useToast } from '@/Components/ui/use-toast'

import {
    Card,
    CardDescription,
    CardContent,
    CardHeader,
    CardTitle
} from '@/Components/ui/card'
import { Badge } from '@/Components/ui/badge'
import { Button } from '@/Components/ui/button'
import { PiEnvelopeDuotone } from 'react-icons/pi'
import { User } from '@/types'
import CustomTooltip from '@/Components/CustomTooltip'
import { useEffect, useState } from 'react'

const TaskEmails = ({ users, user }: { users: User[]; user: User }) => {
    const sendEmail = async (email: string) => {
        await axios
            .post('/send-tasks-email', {
                email: email
            })
            .then(res => {
                toast({
                    title: 'Sent!',
                    description: 'Your email has been sent.'
                })
            })
            .catch(err => {
                // console.log(err)
            })
    }

    const { toast } = useToast()

    const [members, setMembers] = useState<User[]>(users)
    const [updateEmail, setUpdateEmail] = useState<string>('')
    useEffect(() => {
        Echo.private(`webhook.${user.id}`).listen('WebhookReceived', event => {
            setUpdateEmail(event.webhook_payload.data.to[0])
        })
    }, [])

    return (
        <Card className="relative h-fit w-full overflow-hidden">
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
            <CardContent className="relative overflow-y-scroll scroll-smooth">
                <Table className="mb-4 h-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Member</TableHead>
                            <TableHead className="hidden text-right sm:table-cell">
                                Status
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {members?.data.map(user => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <div className="font-medium">
                                        {user.name}
                                    </div>
                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                        {user.email}
                                    </div>
                                </TableCell>
                                <TableCell className="hidden text-right sm:table-cell">
                                    <div className="flex items-center justify-end">
                                        <CustomTooltip label="Send task email">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                type="button"
                                                onClick={() =>
                                                    sendEmail(user.email)
                                                }
                                                className="mr-2"
                                            >
                                                <PiEnvelopeDuotone className="size-4" />
                                            </Button>
                                        </CustomTooltip>
                                        <Badge
                                            className={`text-xs ${user.task_checked_at !== null || user.email === updateEmail ? 'bg-green-500 text-white hover:bg-green-500' : 'text-black'}`}
                                            variant="secondary"
                                        >
                                            {updateEmail === user.email ||
                                            user.task_checked_at !== null
                                                ? 'Clicked'
                                                : 'Pending'}
                                        </Badge>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" type="button">
                        Prev
                    </Button>
                    <Button variant="outline" size="sm" type="button">
                        Next
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default TaskEmails
