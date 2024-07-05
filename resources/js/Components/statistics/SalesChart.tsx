import { BarChart } from '@mui/x-charts'
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription
} from '@/Components/ui/card'
import { PiCurrencyCircleDollarDuotone } from 'react-icons/pi'

const SalesChart = () => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ]
    const salesData = [500, 700, 300, 1250, 600, 900, 97]

    return (
        <Card className="w-full transition duration-300 ease-linear hover:bg-gray-50 dark:hover:bg-gray-800">
            <CardHeader>
                <CardTitle className="flex items-center justify-between text-2xl font-bold">
                    <span>Sales Overview</span>
                    <span>
                        <PiCurrencyCircleDollarDuotone className="size-7" />
                    </span>
                </CardTitle>
                <CardDescription>Average Revenue per Month</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px] w-full px-4">
                {/* Bar chart gradient */}
                <svg style={{ width: 0, height: 0 }}>
                    <defs>
                        <linearGradient
                            id="gradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop offset="0%" stopColor="#cbd5e1" />
                            <stop offset="100%" stopColor="#94a3b8" />
                        </linearGradient>
                    </defs>
                </svg>
                <BarChart
                    borderRadius={10}
                    xAxis={[
                        {
                            scaleType: 'band',
                            data: months
                        }
                    ]}
                    series={[
                        {
                            data: salesData,
                            color: 'url(#gradient)',
                            label: 'Sales per month (USD)'
                        }
                    ]}
                />
            </CardContent>
        </Card>
    )
}

export default SalesChart
