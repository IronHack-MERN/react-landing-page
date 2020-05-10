import React from "react";
import FooterDetail from "./FooterDetail";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon3.png";
import '../css/footer.css';

const Footer = () => {
  const dataArray = [
    {
      icon: icon1,
      title: "Declarative",
      content: "React makes it painless to create interactive UIs.",
    },
    {
      icon: icon2,
      title: "Components",
      content: "Build encapsulated components that manage their state.",
    },
    {
      icon: icon3,
      title: "Single-Way",
      content: "A set of immutable values are passed to the component`s.",
    },
    {
      icon: icon4,
      title: "JSX",
      content: "Statically-typed, designed to run on modern browsers.",
    },
  ];

  return (
    <div className='footer-content'>
      <section>
        {dataArray.map((data, index) => {
          return (
            <FooterDetail 
              imagen={data.icon}
              title={data.title}
              paragraph={data.content}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Footer;
