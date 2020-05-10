import React from "react";

const FooterDetail = ({ imagen, title, paragraph }) => {
  return (
    <div>
      <img src={imagen} className="footer-detail" alt="logo" />
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default FooterDetail;
