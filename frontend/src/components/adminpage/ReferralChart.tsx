import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';

const ReferralChart: React.FC = () => {
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
                text: 'Referrals',
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

        const chart_referral = new ApexCharts(document.querySelector("#chart_referral"), options);
        chart_referral.render();

        // Cleanup function
        return () => {
            chart_referral.destroy();
        };
    }, []);

    return (
        <div id="chart_referral">
            <Chart options={{}} series={[]} type="line" height={350} />
        </div>
    );
};

export default ReferralChart;
