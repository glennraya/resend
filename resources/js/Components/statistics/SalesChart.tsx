import { BarChart } from '@mui/x-charts'
import { Card, CardHeader, CardTitle, CardContent } from '@/Components/ui/card'
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
        <Card className="w-full transition duration-300 ease-linear hover:bg-gray-50">
            <CardHeader>
                <CardTitle className="flex items-center justify-between text-2xl font-bold">
                    <span>Sales Overview</span>
                    <span>
                        <PiCurrencyCircleDollarDuotone className="size-7" />
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent className="h-[500px] w-full p-3">
                <BarChart
                    borderRadius={10}
                    xAxis={[
                        {
                            scaleType: 'band',
                            data: months
                        }
                    ]}
                    // yAxis={[
                    //     {
                    //         axisLine: { stroke: 'red' }, // Set the color of the y-axis line
                    //         tickLine: { stroke: 'red' }, // Set the color of the y-axis ticks
                    //         tick: { fill: 'red' } // Set the color of the y-axis labels
                    //     }
                    // ]}
                    series={[
                        {
                            data: salesData,
                            color: '#94a3b8'
                        }
                    ]}
                />
            </CardContent>
        </Card>
    )
}

export default SalesChart
