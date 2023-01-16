import { useState } from "react";
import { useAddFormMutation } from "../types";
import { Button } from "./Button";
import { Container } from "./Container";

export const Form = () => {
  const [formSent, setFormSent] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [addForm] = useAddFormMutation();

  let form = {
    variables: {
      input: {
        email: email,
        name: name,
        message: message,
      },
    },
  };

  const onFinish = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    function sendForm() {
      addForm(form);
      setTimeout(() => {
        setFormSent(!formSent);
      }, 500);
    }

    sendForm();

    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
    }, 500);
  };

  return (
    <Container>
      <form
        onSubmit={onFinish}
        className="max-w-[600px] mx-auto flex flex-col space-y-4 [&_div]:rounded-md [&_div]:text-md"
      >
        <div className="flex items-start  justify-center flex-col text-[rgb(0,0,0)]">
          <input
            id="name"
            value={name as string}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-xl w-full text-[rgb(0,0,0)]"
          />
        </div>
        <div className="flex items-start  justify-center flex-col">
          <input
            id="email"
            value={email as string}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-xl w-full text-[rgb(0,0,0)]"
          />
        </div>
        <div className="flex items-start  justify-center flex-col">
          <textarea
            rows={4}
            cols={50}
            value={message as string}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            className="text-[rgb(0,0,0)] p-3 rounded-xl w-full resize-none"
          />
        </div>
        <button>Submit</button>
      </form>
    </Container>
  );
};
