import "./callToAction.css";
import { Button } from "../button/Button";

export const CallToAction = () => {
  return (
    <section className="call-to-action">
      <h1>Join Us Today!</h1>
      <p>Start your journey with us and unlock amazing benefits.</p>
      <Button btnLabel="Sign Up Now" fontSize="24px" color="yellow"></Button>
    </section>
  );
};
