"use client";
import { useState } from "react";
import Animate from "../Common/Animate";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "Why should I choose KNMG Property over other agencies?",
      answer:
        "KNMG combines 20+ years of expertise with a boutique approach. We provide tailored advice, transparent communication, and market insights—ensuring every client feels valued, supported, and confident in their decisions.",
    },
    {
      question: "What are the benefits of buying property in Dubai?",
      answer:
        "Dubai offers tax-free returns, strong rental yields, world-class infrastructure, and global appeal. Whether buying for personal use or investment, the city delivers both lifestyle value and long-term capital growth.",
    },
    {
      question: "How do off-plan properties compare with ready-to-move homes?",
      answer:
        "Off-plan offers lower entry prices, flexible payments, and potential appreciation, while ready homes provide immediate occupancy and rental income. KNMG helps clients decide which option best matches their goals.",
    },
    {
      question: "Can KNMG assist with financing and legal requirements?",
      answer:
        "Yes. We partner with leading mortgage providers and conveyancing specialists, offering end-to-end support—from securing the right mortgage to ensuring smooth legal transfers and ownership handover.",
    },
  ];

  return (
    <div className="mt-4 p-4 md:p-10">
      <div className="border-b border-gray-200 pb-4">
        <Animate>
          <h2 className="text-xl font-semibold">FAQs</h2>
        </Animate>
      </div>
      <div className="mt-4 space-y-4">
        {faqs.map((faq, index) => (
          <Animate key={index}>
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full text-left text-lg font-medium">
                {faq.question}
              </button>
              {open === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          </Animate>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
