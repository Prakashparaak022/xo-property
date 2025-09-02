"use client";
import { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "How do I know the development will be completed?",
      answer:
        "Each development comes with a clear timeline and regular updates from trusted developers.",
    },
    {
      question: "Can I purchase off-plan with finance?",
      answer:
        "Yes, financing options are available depending on the developer and project.",
    },
    {
      question: "What is a payment plan?",
      answer:
        "Payment plans can be customized with staggered installments, ensuring flexibility in payments.",
    },
    {
      question: "Who are the most trusted and reputable developers?",
      answer:
        "We work with a curated list of developers with proven track records in delivering projects.",
    },
  ];

  return (
    <div className="mt-4 p-4 md:p-10">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-xl font-semibold">Frequently asked questions</h2>
      </div>
      <div className="mt-4 space-y-4">
        {faqs.map((faq, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default FAQ;
