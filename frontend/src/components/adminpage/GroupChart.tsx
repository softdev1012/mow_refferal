import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';

const GroupChart: React.FC = () => {
    useEffect(() => {
        const options = {
            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49]
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
                text: 'New Groups',
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

        const chart_group = new ApexCharts(document.querySelector("#chart_group"), options);
        chart_group.render();

        // Cleanup function
        return () => {
            chart_group.destroy();
        };
    }, []);

    return (
        <div id="chart_group">
            <Chart options={{}} series={[]} type="line" height={350} />
        </div>
    );
};

export default GroupChart;
