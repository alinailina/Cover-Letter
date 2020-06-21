import React from "react";
import data from "./data.json";

// Children
import Item from "./Item";

const Acc = () => {
  return (
    <div className="accordion">
      {data.map((faq) => (
        <Item key={faq.id} question={faq.question}>
          <div
            dangerouslySetInnerHTML={{
              __html: faq.answer,
            }}
          ></div>
        </Item>
      ))}
    </div>
  );
};

export default Acc;
