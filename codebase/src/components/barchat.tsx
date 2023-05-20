import React from 'react';
import BarChart from './bar';

export function Chart (){
    const data1 = [100, 30, 140, 165];
    const barWidth = 22;
    const barSpacing = 7;
    const colors = ['#1D157B', ' #1252CF', '#DB4427', "#BDEAF3"];

    const data2 = [170, 180, 155, 165];

    const data3 = [205, 193, 30, 140];

    const data4 = [20, 50, 80, 170];
    
    const data5 = [100, 170, 10, 150];
    return (
        <div style={{
            display: "flex",
             flexDirection: "row",
              alignItems: "center", height: 
              "210px", paddingBottom: "70px", 
              borderLeft: "1.435px solid #000000",
               borderBottom: "1.435px solid #000000"
}}>
            <BarChart data={data1} barWidth={barWidth} barSpacing={barSpacing} colors={colors} />
            <BarChart data={data2} barWidth={barWidth} barSpacing={barSpacing} colors={colors} />
            <BarChart data={data3} barWidth={barWidth} barSpacing={barSpacing} colors={colors} />
            <BarChart data={data4} barWidth={barWidth} barSpacing={barSpacing} colors={colors} />
            <BarChart data={data5} barWidth={barWidth} barSpacing={barSpacing} colors={colors} />
        </div>
    );
};

