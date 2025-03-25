import Navbar from "./Navbar";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzSESP9dIwmvELBpz59HsVpoXVh2gU1lpJFxLvkju34fBjJX1-HHPxBiLtJvp9hQQej/exec";

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.target);
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("Message sent successfully!");
        e.target.reset(); // Formni tozalash
      } else {
        setMessage("Failed to send message. Try again.");
      }
    } catch (error) {
      setMessage("Error occurred! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:rounded-xl bg-gray-600 md:m-7 flex-1 p-5">
      <Navbar />
      <div className="mt-7">
        <div data-aos="fade-up" data-aos-duration="500">
          <h2 className="text-white font-bold text-3xl mb-2">Contact Me</h2>
          <hr className="border-3 text-yellow-500 w-12 rounded-4xl" />
        </div>
        <div className="mt-10" data-aos="zoom-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.006922387953!2d71.74996151047976!3d40.47511186920102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb778d3ee826ab%3A0xc6f6982e0bbae5ea!2sKombinat!5e0!3m2!1sen!2s!4v1742456438975!5m2!1sen!2s"
            loading="lazy"
            className="w-full h-[450px] rounded-2xl"
          ></iframe>
        </div>
        <div className="mt-10">
          <h2
            className="text-white font-bold text-2xl mb-2"
            data-aos="fade-right"
          >
            Contact Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-7">
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="text-white font-semibold border-2 p-3 rounded-xl bg-gray-800 w-full"
                required
                data-aos="fade-right"
                data-aos-duration="600"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="text-white font-semibold border-2 p-3 rounded-xl bg-gray-800 w-full"
                required
                data-aos="fade-left"
                data-aos-duration="600"
              />
              <input
                name="number"
                type="number"
                placeholder="Phone number"
                className="text-white font-semibold border-2 p-3 rounded-xl bg-gray-800 w-full"
                required
                data-aos="fade-up"
                data-aos-duration="600"
              />
            </div>
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              className="text-white font-semibold border-2 p-3 rounded-xl bg-gray-800 w-full"
              required
              data-aos="zoom-in"
              data-aos-duration="600"
            ></textarea>

            <div className="w-full flex justify-center md:justify-end">
              <button
                type="submit"
                className="w-full md:w-auto flex gap-3 items-center px-6 py-3 rounded-xl font-semibold bg-gray-800 text-yellow-600 border border-gray-300 cursor-pointer hover:bg-yellow-600 hover:text-black transition hover:scale-105"
                disabled={loading}
              >
                <FaPaperPlane />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>

            {message && (
              <p
                className="text-center text-white font-semibold mt-3"
                data-aos="fade-up"
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
