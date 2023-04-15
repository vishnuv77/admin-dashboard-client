import React from "react";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Service 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id enim vitae nisl consequat congue.",
    },
    {
      id: 2,
      name: "Service 2",
      description:
        "Nulla facilisi. Proin eu nulla a eros efficitur tincidunt. Etiam eu arcu vel massa bibendum ullamcorper.",
    },
    {
      id: 3,
      name: "Service 3",
      description:
        "Donec gravida eget magna sed bibendum. Fusce non congue nibh. Aliquam vel tincidunt nunc.",
    },
    {
      id: 4,
      name: "Service 4",
      description:
        "Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Our Services
      </h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {servicesData.map((service) => (
          <div
            key={service.id}
            style={{
              width: "23%",
              padding: "20px",
              backgroundColor: "#f2f2f2",
              borderRadius: "10px",
            }}
          >
            <h3
              style={{
                marginBottom: "10px",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              {service.name}
            </h3>
            <p style={{ fontSize: "16px" }}>{service.description}</p>
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
