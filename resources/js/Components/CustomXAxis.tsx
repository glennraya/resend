import { XAxis } from 'recharts'

const CustomXAxis = ({
    dataKey = 'month',
    tickLine = false,
    axisLine = false,
    tickMargin = 8,
    tickFormatter = value => value.slice(0, 3)
}) => (
    <XAxis
        dataKey={dataKey}
        tickLine={tickLine}
        axisLine={axisLine}
        tickMargin={tickMargin}
        tickFormatter={tickFormatter}
    />
)

export default CustomXAxis
