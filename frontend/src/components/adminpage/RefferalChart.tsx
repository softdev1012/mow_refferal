import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';

const RefferalChart: React.FC = () => {
    useEffect(() => {
        const options = {
            series: [{
                name: "Desktops",
                data: [41, 35, 69, 91, 148]
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
                text: 'Refferals',
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

        const chart_refferal = new ApexCharts(document.querySelector("#chart_refferal"), options);
        chart_refferal.render();

        // Cleanup function
        return () => {
            chart_refferal.destroy();
        };
    }, []);

    return (
        <div id="chart_refferal">
            <Chart options={{}} series={[]} type="line" height={350} />
        </div>
    );
};

export default RefferalChart;
