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
    <div>
      <h2>Our Services</h2>
      {servicesData.map((service) => (
        <div key={service.id} style={{ marginBottom: "20px" }}>
          <h3 style={{ marginBottom: "10px" }}>{service.name}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
