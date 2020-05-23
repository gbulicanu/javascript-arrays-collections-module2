let ctx = document.getElementById("monthlySales").getContext("2d");
let pieCtx = document.getElementById("deptSales").getContext("2d");
let yearlyLabel = document.getElementById("yearlyTotal");

let monthlySales = Array.of(1200, 9000, 3000);
let monthlyLabels = Array.of("Oct", "Nov", "Dec");

let deptSales = Array.of(12, 9, 3);
let deptLabels = Array.of("Hiking", "Running", "Hunting");

function addYearlyTotal(a, b, c) {
  return a + b + c;
}

let octNumbers = Array.of(1200, 1000, 9000);
let novNumbers = Array.of(1100, 2000, 9000);
let decNumbers = Array.of(4000, 1000, 5000);

let total = Array.of(
  addYearlyTotal(...octNumbers),
  addYearlyTotal(...novNumbers),
  addYearlyTotal(...decNumbers)
);
alert(addYearlyTotal(...total));

let yearlyTotal = addYearlyTotal(...monthlySales);
yearlyLabel.innerHTML = "$" + yearlyTotal;

// Bar
let monthlySalesChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: monthlyLabels,
    datasets: [
      {
        label: "# of Sales",
        data: monthlySales,
        backgroundColor: [
          "rgba(238, 184, 104, 1)",
          "rgba(75, 166, 223, 1)",
          "rgba(239, 118, 122, 1)",
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

// Pie
let deptSalesChart = new Chart(pieCtx, {
  type: "pie",
  data: {
    labels: deptLabels,
    datasets: [
      {
        label: "# of Sales",
        data: deptSales,
        backgroundColor: [
          "rgba(238, 184, 104, 1)",
          "rgba(75, 166, 223, 1)",
          "rgba(239, 118, 122, 1)",
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {},
});
