"use client";

import { useState } from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    // Reset form and status when reopening modal
    if (!isModalOpen) {
      setFormData({ name: "", email: "", query: "" });
      setSubmitStatus(null);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.query) {
      alert("Please fill all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.query,
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", query: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-index-0">
          <div
            className="absolute inset-0 opacity-5 -z-10 "
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                {`Let's create something amazing together`}
              </h2>
              <p className="text-sm md:text-base mt-2">
                {`Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals.`}
              </p>
            </div>
            <div>
              <button
                onClick={toggleModal}
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white p-8 rounded-xl w-96 relative">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              &times;
            </button>
            <h3 className="font-serif text-xl mb-4">Contact Me</h3>

            {submitStatus === "success" ? (
              <div className="text-center py-6">
                <div className="text-emerald-300 text-xl mb-3">✓</div>
                <h4 className="font-medium text-lg">Thank you!</h4>
                <p className="text-gray-400 mt-2">
                  Your message has been sent successfully.
                </p>
                <button
                  onClick={toggleModal}
                  className="mt-6 bg-emerald-300 text-gray-900 px-4 py-2 rounded-lg font-semibold"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="query"
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="query"
                    rows={4}
                    value={formData.query}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                    required
                  ></textarea>
                </div>
                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm mb-4">
                    There was an error sending your message. Please try again
                    later.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-emerald-300 text-gray-900 px-4 py-2 rounded-lg font-semibold w-full disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
