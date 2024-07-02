import { useState, PropsWithChildren, ReactNode } from 'react'
import { User } from '@/types'

export default function Authenticated({
    user,
    header,
    children
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    return (
        <div className="min-h-screen bg-gray-200">
            <main>{children}</main>
        </div>
    )
}
