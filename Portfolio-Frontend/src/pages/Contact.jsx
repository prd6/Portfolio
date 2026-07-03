import { useRef } from "react";
import Lottie from "lottie-react";
import Button from "../Components/Button";
import sendAnimation from "../assets/send.json";

const Contact = () => {
  const lottieRef = useRef();

  const playAnimation = (e) => {
    e.preventDefault(); // Prevent form refresh

    lottieRef.current?.stop();
    lottieRef.current?.goToAndPlay(0, true);

    // Later you can also send the form here
    // sendEmail();
  };

  return (
    <div
    id="contact"
    className="w-full min-h-screen flex items-center justify-between px-20">

      {/* Left Side */}
      <div className="flex items-center w-1/2 pl-40">
        <div className="flex flex-col gap-16 leading-7">

          <div>
            <h2 className="text-8xl font-semibold">
              Contact
            </h2>

            <p className="text-lg">
              Please feel free to contact and I will get back to you as soon as I can.
            </p>
          </div>

          <form className="contact-form
          space-y-6 w-2/3
          ">

            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full px-4 py-3 resize-none outline-none scrollbar-none"
            />

            <Button onClick={playAnimation} />

          </form>

        </div>
      </div>

      {/* Right Side */}
      <div className="animation-div w-1/2 flex justify-center items-center">

        <Lottie.default
          lottieRef={lottieRef}
          animationData={sendAnimation}
          autoplay={false}
          loop={false}
          className="w-125"
        />

      </div>

    </div>
  );
};

export default Contact;