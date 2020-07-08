import React from "react";

const Form = () => {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <div>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
      </div>
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
      <div data-netlify-recapture="true"></div>
      <div>
        {" "}
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default Form;
