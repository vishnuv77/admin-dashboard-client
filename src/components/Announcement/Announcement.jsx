import React from "react";

const Announcement = () => {
  return (
    <div
      style={{
        backgroundColor: "#fce5cd",
        color: "#663300",
        padding: "20px",
        border: "2px solid #ffc107",
        borderRadius: "10px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        marginTop: "20px"
      }}
    >
      <h2 style={{ margin: "0 0 10px" }}>Important Announcement</h2>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
        ex vel tellus tristique blandit.
      </p>
      <p style={{ marginTop: "10px" }}>
        Nullam tincidunt enim ex, non finibus libero tristique non. Fusce in ex
        ullamcorper, suscipit felis vel, pulvinar sapien. Duis porttitor
        dignissim gravida.
      </p>
    </div>
  );
};

export default Announcement;

