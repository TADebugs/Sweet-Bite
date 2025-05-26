
function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
	//because one works in safari and the other in any other browser like chrome , safari etc.
}


document.addEventListener('DOMContentLoaded', function() {//using the chart.js here
    var ctx = document.getElementById('salesChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Monthly Sales ($)',
                data: [12000, 19000, 15000, 17000, 22000, 24000, 25000, 28000, 30000, 32000, 35000, 40000],
                borderColor: '#F25A00',
                tension: 0.4,//to make the graph trend follow a smooth curve
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Sweet Bites BBQ - Monthly Sales 2024'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,//so that it showes the value of a certain point
                    title: {
                        display: true,
                        text: 'Sales ($)'
                    }
                }
            }
        }
    });
});

//tried to implement map but was not working in safari

