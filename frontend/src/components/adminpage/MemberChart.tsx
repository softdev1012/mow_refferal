import React, { useEffect } from 'react';

import Chart from 'react-apexcharts';

const MemberChart: React.FC = () => {
    useEffect(() => {
        const options = {
            series: [{
                name: "Desktops",
                data: [41,  51, 49, 69,  148]
            }],
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'New Members',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
            }
        };

        const chart_member = new ApexCharts(document.querySelector("#chart_member"), options);
        chart_member.render();

        // Cleanup function
        return () => {
            chart_member.destroy();
        };
    }, []);

    return (
        <div id="chart_member">
             <Chart options={{}} series={[]} type="line" height={350} />
        </div>
    );
};

export default MemberChart;
