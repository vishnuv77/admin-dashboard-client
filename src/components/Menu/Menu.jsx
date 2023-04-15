import React from "react";

const Menu = () => {
  const menuItems = [
    { id: 1, name: "Item 1", price: 10.99 },
    { id: 2, name: "Item 2", price: 12.99 },
    { id: 3, name: "Item 3", price: 9.99 },
    { id: 4, name: "Item 4", price: 15.99 },
    { id: 5, name: "Item 5", price: 8.99 },
  ];

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Menu</h2>
      <ul
        style={{
          listStyle: "none",
 
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#f7f7f7",
          borderRadius: "10px",
          boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        {menuItems.map((item) => (
          <li
            key={item.id}
            style={{ marginBottom: "10px", display: "flex", width: "100%" }}
          >
            <span style={{ fontWeight: "bold", flex: 1 }}>{item.name}</span>
            <span style={{ textAlign: "right" }}>{formatPrice(item.price)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
