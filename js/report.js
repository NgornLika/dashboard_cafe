
// ============================ Show Section =====================
function showSection(id) {
  const sections = document.querySelectorAll(".report-section");
  sections.forEach(section => section.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
// ============================= Daily Report ============================
const reportData = {
  totalSales: 892.50,
  numTransactions: 78,
  paymentMethods: {
    Cash: 35,
    Card: 30,
    "Mobile Pay": 13
  },
  mostSoldItems: [
    { name: "Cappuccino", sold: 25 },
    { name: "Espresso", sold: 19 },
    { name: "Blueberry Muffin", sold: 17 }
  ],
  staffOnDuty: ["Alice", "Ben", "Diana"]
};

// Display total sales
  document.getElementById("totalSales").textContent = `$${reportData.totalSales.toFixed(2)}`;
  document.getElementById("numTransactions").textContent = reportData.numTransactions
// Payment methods
const paymentList = document.getElementById('paymentMethods');
Object.entries(reportData.paymentMethods).forEach(([method, count]) => {
  const li = document.createElement('li');
  li.textContent = `${method}: ${count}`;
  paymentList.appendChild(li);
});

// Most sold items
const itemsList = document.getElementById('topItems');
reportData.mostSoldItems.forEach(item => {
  const li = document.createElement('li');
  li.textContent = `${item.name} (${item.sold})`;
  itemsList.appendChild(li); 
});

// Staff on duty
const staffLists = document.getElementById('staffList');
reportData.staffOnDuty.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  staffLists.appendChild(li);
});

// ============================= Weekly Report ============================
const weeklyData = {
  dailySales: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [120, 180, 160, 200, 240, 300, 210]
  },
  topItems: [
    { name: "Latte", sold: 55 },
    { name: "Iced Americano", sold: 48 },
    { name: "Chocolate Croissant", sold: 45 },
    { name: "Flat White", sold: 40 },
    { name: "Cheesecake", sold: 36 }
  ],
  inventory: [
    "Milk (Low) – Order from FreshDairy",
    "Coffee Beans – In Stock",
    "Cups – Running Low (Order placed)",
    "Sugar – Sufficient",
    "Napkins – Restocked"
  ],
  staffPerformance: [
    "Ben - 5 shifts, 97% on-time, 45 sales handled",
    "Anna - 4 shifts, 100% on-time, 38 sales",
    "Liam - 6 shifts, 95% on-time, 52 sales"
  ]
};

// Render chart
const ctx = document.getElementById('salesCharts').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: weeklyData.dailySales.labels,
    datasets: [{
      label: 'Daily Sales ($)',
      data: weeklyData.dailySales.values,
      backgroundColor: '#4CAF50'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Populate Top Items
const topList = document.getElementById('topWeeklyItems');
weeklyData.topItems.forEach(item => {
  const li = document.createElement('li');
  li.textContent = `${item.name} - ${item.sold} sold`;
  topList.appendChild(li);
});

// Populate Inventory
const invList = document.getElementById('inventoryList');
weeklyData.inventory.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  invList.appendChild(li);
});

// Populate Staff Performance
const staffList = document.getElementById('staffPerformance');
weeklyData.staffPerformance.forEach(info => {
  const li = document.createElement('li');
  li.textContent = info;
  staffList.appendChild(li);
});

// ============================= Monthly Report ============================
const monthlyData = {
  salesGrowth: {
    weeks: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    revenue: [4200, 4700, 5200, 5800]
  },
  financialSummary: [
    "Revenue: $19,900",
    "Expenses: $8,750",
    "Taxes: $1,580",
    "Net Profit: $9,570"
  ],
  reorderAlerts: [
    "Espresso Beans – LOW (Reorder)",
    "To-Go Cups – CRITICAL",
    "Chocolate Syrup – LOW",
    "Whipped Cream – OK"
  ],
  profitEstimation: "$9,570 estimated monthly profit",
  customerInsights: [
    "New Customers: 187",
    "Returning Customers: 342",
    "Avg Order Value: $12.20",
    "Peak Hours: 8-10 AM, 4-6 PM"
  ],
  staffPayroll: [
    "Total Hours: 540 hrs",
    "Payroll Total: $6,200",
    "Top Staff: Emma (98% on-time, 72 sales)"
  ],
  operationalIssues: [
    "1 POS system crash (Week 2)",
    "Late supplier delivery: Milk (Week 3)",
    "2 staff absences unplanned"
  ]
};

// Render Line Chart
const ctxx = document.getElementById('salesGrowthChart').getContext('2d');
new Chart(ctxx, {
  type: 'line',
  data: {
    labels: monthlyData.salesGrowth.weeks,
    datasets: [{
      label: 'Revenue ($)',
      data: monthlyData.salesGrowth.revenue,
      borderColor: '#4CAF50',
      backgroundColor: 'rgba(76, 175, 80, 0.1)',
      tension: 0.3,
      fill: true,
      pointRadius: 5
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});

// Populate report sections
function populateList(id, data) {
  const el = document.getElementById(id);
  data.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    el.appendChild(li);
  });
}

populateList("financialSummary", monthlyData.financialSummary);
populateList("reorderAlerts", monthlyData.reorderAlerts);
populateList("customerInsights", monthlyData.customerInsights);
populateList("staffPayroll", monthlyData.staffPayroll);
populateList("operationalIssues", monthlyData.operationalIssues);

document.getElementById("profitEstimation").textContent = monthlyData.profitEstimation;

// ============================= Yearly Report ============================
const yearlyData = {
  revenue: {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    values: [14000, 13200, 15000, 17000, 18500, 19200, 21000, 22500, 20500, 19800, 18800, 17200]
  },
  profitLoss: [
    "Total Revenue: $229,700",
    "Total Expenses: $108,500",
    "Net Profit: $121,200",
    "Best Month: August ($22,500)",
    "Lowest Month: February ($13,200)"
  ],
  seasonalTrends: [
    "Summer Drink Sales ↑ by 22% (Jun-Aug)",
    "Holiday Treats ↑ in Dec (+18%)",
    "Iced drinks dominate May-Sep",
    "More morning traffic in winter"
  ],
  businessGoals: [
    "Customer Growth: Target 15%, Achieved 18%",
    "Reduce Waste: Target 10%, Achieved 8%",
    "Staff Turnover: Goal <5%, Result: 4%",
    "Launch App - Delayed to Q2 2025"
  ],
  investments: [
    "New Espresso Machine ($4,200)",
    "Outdoor Seating Area ($3,000)",
    "POS Upgrade ($1,800)",
    "Social Media Campaign ($900)"
  ],
  expenses: [
    "Ingredients: $42,300",
    "Payroll: $52,000",
    "Utilities: $6,800",
    "Marketing: $4,200",
    "Maintenance: $3,200"
  ],
  futurePlans: [
    "Launch Loyalty App",
    "Host Monthly Coffee Tasting Events",
    "Add Drive-Thru Lane",
    "Partner with Local Bakeries",
    "Expand Menu: Vegan + Keto Options"
  ]
};

// Chart
const ctxxx = document.getElementById('revenueChart').getContext('2d');
new Chart(ctxxx, {
  type: 'line',
  data: {
    labels: yearlyData.revenue.months,
    datasets: [{
      label: 'Monthly Revenue ($)',
      data: yearlyData.revenue.values,
      borderColor: '#4CAF50',
      backgroundColor: 'rgba(76, 175, 80, 0.1)',
      fill: true,
      tension: 0.3,
      pointRadius: 4
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});

// Render Lists
function fillList(id, items) {
  const container = document.getElementById(id);
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    container.appendChild(li);
  });
}

fillList("profitLossSummary", yearlyData.profitLoss);
fillList("seasonalTrends", yearlyData.seasonalTrends);
fillList("businessGoals", yearlyData.businessGoals);
fillList("investmentsUpgrades", yearlyData.investments);
fillList("expensesBreakdown", yearlyData.expenses);
fillList("futurePlans", yearlyData.futurePlans);

// ============================= Drip-Down ============================

// Sales > Category > Item > Hour
const salesData = {
  "Coffee": {
    "Ice Latte": {
      "08:00": 12,
      "09:00": 18,
      "10:00": 14
    },
    "Hot Americano": {
      "08:00": 9,
      "09:00": 13,
      "10:00": 11
    }
  },
  "Tea": {
    "Green Tea": {
      "11:00": 6,
      "13:00": 10
    },
    "Milk Tea": {
      "14:00": 12,
      "16:00": 15
    }
  },
  "Snacks": {
    "Banana Bread": {
      "10:00": 5,
      "11:00": 7
    },
    "Croissant": {
      "09:00": 6,
      "10:00": 9
    }
  }
};

// Staff > Shift > Task + Sale
const staffData = {
  "Morning Shift": {
    tasks: ["Prepare drinks", "Open register", "Clean tables"],
    sales: ["Emma: $240", "Ali: $180"]
  },
  "Afternoon Shift": {
    tasks: ["Take orders", "Serve snacks", "Clean counter"],
    sales: ["Luna: $210", "James: $195"]
  },
  "Evening Shift": {
    tasks: ["Close register", "Inventory check", "Mop floor"],
    sales: ["Mia: $160", "Tom: $150"]
  }
};

// Inventory > Category > Product > Usage Rate
const inventoryData = {
  "Ingredients": {
    "Espresso Beans": "42kg/month",
    "Milk": "220L/month",
    "Syrups": "12L/month"
  },
  "Packaging": {
    "Cups (12oz)": "1,000/month",
    "Lids": "950/month",
    "Napkins": "3,200/month"
  }
};

// Render Sales
function renderSales() {
  const container = document.getElementById("sales-section");
  for (let category in salesData) {
    const catEl = document.createElement("div");
    catEl.innerHTML = `<h4>${category}</h4>`;
    const items = salesData[category];
    for (let item in items) {
      const itemEl = document.createElement("ul");
      itemEl.innerHTML = `<li><strong>${item}</strong><ul>${Object.entries(items[item])
        .map(([hour, qty]) => `<li>${hour} - ${qty} sold</li>`)
        .join("")}</ul></li>`;
      catEl.appendChild(itemEl);
    }
    container.appendChild(catEl);
  }
}

// Render Staff
function renderStaff() {
  const container = document.getElementById("staff-section");
  for (let shift in staffData) {
    const shiftEl = document.createElement("div");
    shiftEl.innerHTML = `<h4>${shift}</h4>
      <ul>
        <li><strong>Tasks:</strong> <ul>${staffData[shift].tasks.map(task => `<li>${task}</li>`).join("")}</ul></li>
        <li><strong>Sales:</strong> <ul>${staffData[shift].sales.map(sale => `<li>${sale}</li>`).join("")}</ul></li>
      </ul>`;
    container.appendChild(shiftEl);
  }
}

// Render Inventory
function renderInventory() {
  const container = document.getElementById("inventory-section");
  for (let category in inventoryData) {
    const catEl = document.createElement("div");
    catEl.innerHTML = `<h4>${category}</h4>`;
    const prodEl = document.createElement("ul");
    for (let product in inventoryData[category]) {
      prodEl.innerHTML += `<li>${product}: ${inventoryData[category][product]}</li>`;
    }
    catEl.appendChild(prodEl);
    container.appendChild(catEl);
  }
}

renderSales();
renderStaff();
renderInventory();
// ============================= Critial Stock  ============================

const alertData = [
  {
    name: "Oat Milk - Califia Barista Blend",
    quantity: 3,
    dailyUsage: 1.5,
    leadTimeDays: 2
  },
  {
    name: "Espresso Beans - Lavazza",
    quantity: 5,
    dailyUsage: 2,
    leadTimeDays: 3
  },
  {
    name: "Vanilla Syrup - Monin",
    quantity: 1,
    dailyUsage: 0.5,
    leadTimeDays: 4
  },
  {
    name: "Paper Cups (12oz)",
    quantity: 30,
    dailyUsage: 25,
    leadTimeDays: 1
  },
  {
    name: "Fresh Strawberries",
    quantity: 10,
    dailyUsage: 4,
    leadTimeDays: 2
  }
];

function calculateStockoutDays(item) {
  return Math.floor(item.quantity / item.dailyUsage);
}

function generateSuggestion(daysLeft, leadTime, dailyUsage) {
  if (daysLeft <= leadTime) {
    const orderQty = Math.ceil((leadTime + 3) * dailyUsage);
    return `Order ${orderQty} units NOW`;
  }
  return "Stock sufficient";
}

const tableBody = document.querySelector("#alertTable tbody");

alertData.forEach(item => {
  const daysLeft = calculateStockoutDays(item);
  const suggestion = generateSuggestion(daysLeft, item.leadTimeDays, item.dailyUsage);

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${item.name}</td>
    <td>${item.quantity} units</td>
    <td>${daysLeft} day(s)</td>
    <td>${item.leadTimeDays} day(s)</td>
    <td><strong>${suggestion}</strong></td>
  `;
  tableBody.appendChild(row);
});



// =============================  ============================
// window.addEventListener("load", () => {
//   // WEEKLY CHART
//   const weeklyCtx = document.getElementById("weeklyChart");
//   if (weeklyCtx) {
//     new Chart(weeklyCtx, {
//       type: "bar",
//       data: {
//         labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//         datasets: [{
//           label: "Sales ($)",
//           data: [45, 60, 50, 80, 75, 90, 70],
//           backgroundColor: "#b68d55"
//         }]
//       }
//     });
//   }

//   // MONTHLY CHART
//   const monthlyCtx = document.getElementById("monthlyChart");
//   if (monthlyCtx) {
//     new Chart(monthlyCtx, {
//       type: "line",
//       data: {
//         labels: Array.from({length: 30}, (_, i) => `Day ${i + 1}`),
//         datasets: [{
//           label: "Daily Sales ($)",
//           data: Array.from({length: 30}, () => Math.floor(Math.random() * 100 + 30)),
//           borderColor: "#6b4f28",
//           fill: false,
//           tension: 0.2
//         }]
//       }
//     });
//   }

//   // YEARLY CHART
//   const yearlyCtx = document.getElementById("yearlyChart");
//   if (yearlyCtx) {
//     new Chart(yearlyCtx, {
//       type: "line",
//       data: {
//         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//         datasets: [{
//           label: "Monthly Sales ($)",
//           data: [320, 280, 350, 400, 420, 390, 370, 400, 410, 380, 360, 420],
//           borderColor: "#8b5e3c",
//           fill: false,
//           tension: 0.3
//         }]
//       }
//     });
//   }
// });

// function toggleDetails(row) {
//   const next = row.nextElementSibling;
//   next.style.display = next.style.display === "table-row" ? "none" : "table-row";
// }
