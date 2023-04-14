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
    <div>
      <h2>Menu</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {menuItems.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>{item.name}</span>
            <span style={{ float: "right" }}>{formatPrice(item.price)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
