import { useState } from "react";
import { useAddFormMutation } from "../../types";
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
        className="max-w-[600px] mx-auto flex flex-col space-y-6 [&_div]:rounded-md [&_div]:text-md"
      >
        <div className="w-56 relative group mt-12">
          <input
            id="name"
            value={name as string}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full h-10 px-3 text-md peer bg-gray-100 outline-none rounded-lg"
          />
          <label
            htmlFor="name"
            className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
          >
            Name
          </label>
        </div>
        <div className="w-56 relative group mt-12">
          <input
            id="email"
            value={email as string}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-10 px-3 text-md peer bg-gray-100 outline-none rounded-lg"
          />
          <label
            htmlFor="email"
            className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
          >
            Email
          </label>
        </div>
        <div className="w-56 relative group mt-12">
          <input
            id="message"
            value={message as string}
            required
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-10 px-3 text-md peer bg-gray-100 outline-none rounded-lg"
          />
          <label
            htmlFor="message"
            className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
          >
            Message
          </label>
        </div>
        <Button className="text-md text-white w-auto mx-auto">Submit</Button>
      </form>
    </Container>
  );
};
