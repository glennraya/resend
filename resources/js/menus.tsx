import {
    PiLayoutDuotone,
    PiFilesDuotone,
    PiUsersThreeDuotone,
    PiChartLineUpDuotone,
    PiWarehouseDuotone,
    PiUsersDuotone,
    PiHandTapDuotone,
    PiChartPieDuotone
} from 'react-icons/pi'

const menuItems = [
    {
        label: 'Dashboard',
        icon: <PiLayoutDuotone className="size-5" />,
        href: '/dashboard'
    },
    {
        label: 'Transactions',
        icon: <PiFilesDuotone className="size-5" />,
        href: '/transactions'
    },
    {
        label: 'Inventory',
        icon: <PiWarehouseDuotone className="size-5" />,
        href: '/inventory'
    },
    {
        label: 'Analytics',
        icon: <PiChartLineUpDuotone className="size-5" />,
        href: '/analytics'
    },
    {
        label: 'separator',
        icon: null,
        href: null
    },
    {
        label: 'Subscribers',
        icon: <PiUsersThreeDuotone className="size-5" />,
        href: '/subscribers'
    },
    {
        label: 'Clients',
        icon: <PiUsersDuotone className="size-5" />,
        href: '/clients'
    },
    {
        label: 'User Engagements',
        icon: <PiHandTapDuotone className="size-5" />,
        href: '/clients'
    },
    {
        label: 'separator',
        icon: null,
        href: null
    },
    {
        label: 'Reports',
        icon: <PiChartPieDuotone className="size-5" />,
        href: '/reports'
    }
]

export default menuItems
