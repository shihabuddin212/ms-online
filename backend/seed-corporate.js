const Package = require("./src/models/Package.model");

async function seed() {
  const packages = [
    {
      service: "corporate",
      name: "Corporate Business",
      speed: "20 Mbps",
      price: 8000,
      period: "Per Month",
      color: "#1e3a8a",
      isPopular: false,
      sortOrder: 1,
      features: [
        "Dedicated Bandwidth",
        "SLA Backed Uptime",
        "Real IP Included",
        "24/7 NOC Support",
        "Free Installation",
        "OTC - 5000 Taka"
      ]
    },
    {
      service: "corporate",
      name: "Corporate Premium",
      speed: "50 Mbps",
      price: 18000,
      period: "Per Month",
      color: "#0ea5e9",
      isPopular: true,
      sortOrder: 2,
      features: [
        "Dedicated Bandwidth",
        "SLA Backed Uptime",
        "Real IP Included",
        "Redundant Link",
        "24/7 NOC Support",
        "Free Installation",
        "OTC - 5000 Taka"
      ]
    },
    {
      service: "corporate",
      name: "Corporate Enterprise",
      speed: "100 Mbps",
      price: 35000,
      period: "Per Month",
      color: "#1e293b",
      isPopular: false,
      sortOrder: 3,
      features: [
        "Dedicated Bandwidth",
        "SLA Backed Uptime",
        "Real IP Included",
        "Redundant Link",
        "MPLS Connectivity",
        "24/7 NOC Support",
        "OTC - 5000 Taka"
      ]
    }
  ];

  for (const pkg of packages) {
    const created = await Package.create(pkg);
    console.log("Created:", created.name);
  }

  console.log("Done! 3 corporate packages added to database.");
}

seed();
