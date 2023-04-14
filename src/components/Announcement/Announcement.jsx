import React from "react";

const Announcement = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8d7da",
        color: "#721c24",
        padding: "10px",
        border: "1px solid #f5c6cb",
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
