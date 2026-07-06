import { useRef, useState } from "react";
import Lottie from "lottie-react";
import Button from "../Components/Button";
import sendAnimation from "../assets/send.json";
import API_URL from "../api/api";

const Contact = () => {
  const lottieRef = useRef();

  const playAnimation = () => {
    lottieRef.current.stop();
    lottieRef.current.goToAndPlay(0, true);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        playAnimation();

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div
      id="contact"
      className="w-full min-h-screen flex items-center justify-between px-20"
    >
      {/* Left Side */}
      <div className="flex items-center w-1/2 pl-40">
        <div className="flex flex-col gap-16 leading-7">
          <div>
            <h2 className="text-8xl font-semibold">Contact</h2>

            <p className="text-lg">
              Please feel free to contact and I will get back to you as soon as
              I can.
            </p>
          </div>

          <form
            onSubmit={submitHandler}
            className="contact-form space-y-6 w-2/3"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 outline-none"
              required
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 resize-none outline-none scrollbar-none"
              required
            />

            <Button type="submit" />
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