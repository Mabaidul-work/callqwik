"use client";
import {
  Footer,
  Header,
  HeroSection,
  Pricing,
  SalesChallanges,
  Testimonials,
  WorkingSteps,
} from "@/components";
import { CompanyList } from "@/components/ui";
import { integrationCompanies, trustedCompanies } from "@/constants/data";
import { Modal } from "antd";
import { useState } from "react";
import { Resend } from "resend";

export default function Home() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (val) => {
    setEmail(val);
    if (emailError) {
      setEmailError("");
    }
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
      setEmailError("Email is required");
      return false;
    }

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }

    setEmailError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      return;
    }
    setStatus("Sending...");

    // const resend = new Resend("re_ezmHXJPK_MEHUC3CVRWGwbGMAz2F1nLT3");

    // await resend.emails.send({
    //   from: email,
    //   to: "sales@callqwik.ai",
    //   subject: "Join Our Waitlist From CallQwik",
    //   text: "it works!",
    // });

    try {
      // const response = await axios.post("", {
      //   to,
      //   subject,
      //   message,
      // });
      // if (response.data.success) {
      //   setStatus("Email sent successfully!");
      // }

      const resend = new Resend("re_ezmHXJPK_MEHUC3CVRWGwbGMAz2F1nLT3");

      await resend.emails.send({
        from: "website@callqwik.ai",
        to: "sales@callqwik.ai",
        subject: "Join Our Waitlist From CallQwik",
        text: `${email} is interested in joining the CallQwik waitlist.`,
      });

      // async function sendEmail() {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // from: "website@callqwik.ai",
          to: "sales@callqwik.ai",
          subject: "Join Our Waitlist From CallQwik",
          text: `${email} is interested in joining the CallQwik waitlist.`,
        }),
      });

      const data = await response.json();
      console.log(data.message);
      // }

      // setStatus("Email sent successfully!");
      // Clear form after successful submission
      // setEmail("");
      // setTimeout(() => {
      //   setIsModalOpen(false);
      //   setStatus("");
      // }, 2000);
    } catch (error) {
      setStatus("Failed to send email.");
      console.error(error);
    }
  };

  console.log(email);

  return (
    <div className="min-h-screen">
      <Modal
        title="Send Email"
        open={isModalOpen}
        onOk={handleSubmit}
        okText="Send email"
        onCancel={handleCancel}
      >
        <div className="my-5">
          {/* <h1>Send Email</h1> */}
          <form onSubmit={handleSubmit} className="flex-flex-col gap-5 pb-5">
            <div className="flex flex-col gap-3">
              <label htmlFor="to">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => handleChange(e.target.value)}
                required
                className="border border-gray-300 rounded-lg px-3 py-2 text-base focus:outline-orange-300"
              />
            </div>
            {/* <div>
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                required
              />
            </div> */}
            {/* <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => handleChange("message", e.target.value)}
                required
              />
            </div> */}
            {/* <button type="submit">Send Email</button> */}
          </form>
          {status && <p>{status}</p>}
        </div>
      </Modal>

      <Header showModal={showModal} />
      <HeroSection />
      <CompanyList
        companies={trustedCompanies}
        sectionHeaderName={"Trusted by B2B companies globally"}
        marqueeEffect={false}
        headerTextSizes="text-xl md:text-2xl lg:text-3xl"
      />
      <SalesChallanges />
      <WorkingSteps />

      <CompanyList
        companies={integrationCompanies}
        sectionHeaderName={"Integrations"}
        marqueeEffect={false}
        headerTextSizes="text-2.5xl md:text-3xl lg:text-5.5xl"
      />

      <Pricing />

      <Testimonials />
      <Footer />
    </div>
  );
}
