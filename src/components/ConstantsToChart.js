export const setup = {
    plugins: {
        title: {
            display: true,
            text: 'Custom Chart Title',
            padding: {
                top: 10,
                bottom: 30
            }
        },
        legend: {
            display: true,
            position: 'bottom',
            reverse: true,
            labels: {
                color: 'rgb(255, 255, 255)'
            }
        }
    }
};

export const dataChart = {
    labels: ['Orange', 'Blue', 'Yellow', 'Green', 'Red', 'Green'],
    datasets: [
        {
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 1, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(245, 11, 34, 1)',
                'rgba(34, 255, 64, 1)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 222, 34, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};