import { Form } from "../components/Form";
import Hero from "../components/Hero";
import contactImage from "../public/headerImage.jpeg";

const Contact = () => {
  return (
    <div>
      <Hero subHeading="Here to help" image={contactImage} logo={false}>
        <p>Taking the First Step</p>
      </Hero>
      <Form />
    </div>
  );
};

export default Contact;
