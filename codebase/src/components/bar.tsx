interface ChartData {
    data: number[],
    barWidth: number;
    barSpacing: number,
    colors: string[]
}

const BarChart = ({ data, barWidth, barSpacing, colors }: ChartData) => {
    const barStyles = {
        display: 'flex',
        justifyContent: 'center',
        height: '10%',
        width: `${barWidth}px`,
        marginRight: `${barSpacing}px`,
        backgroundColor: colors[0],
    };

    const bars = data.map((value: number, index: number) => (
        <div
            key={index}
            style={{ ...barStyles, height: `${value}px`, backgroundColor: colors[index % colors.length] }}
        />
    ));

    return <div style={{ display: 'flex', height: '280px', width: '100%', justifyContent: 'center', alignItems:"flex-end" }}>{bars}</div>;
};

export default BarChart;

