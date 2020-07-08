import React from "react";

const Form = () => {
  return (
    <form name="contact" action="POST" data-netlify="true">
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
      <div>
        {" "}
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default Form;
