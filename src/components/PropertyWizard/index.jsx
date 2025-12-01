"use client";
import React, { useState } from "react";
import properties from "@/assets/json/properties.json";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBed,
  FaChartPie,
  FaClock,
  FaRegAddressCard,
} from "react-icons/fa";
import Animate from "../Common/Animate";
import Form from "./Form";

export default function PropertyWizard() {
  const [step, setStep] = useState(0);
  const steps = [
    { label: "Community", icon: <FaMapMarkerAlt /> },
    { label: "Budget", icon: <FaMoneyBillWave /> },
    { label: "Bedrooms", icon: <FaBed /> },
    { label: "Investments", icon: <FaChartPie /> },
    { label: "Buying Time", icon: <FaClock /> },
    { label: "Contact Form", icon: <FaRegAddressCard /> },
  ];

  const budgets = [
    "Below AED 1M",
    "AED 1M - 3M",
    "AED 3M - 5M",
    "AED 5M - 10M",
    "AED 10M - 20M",
    "AED 20M - 30M",
    "AED 30M - 40M",
    "Above AED 40M+",
  ];

  const bedrooms = [
    "Studio",
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "4 Bedrooms",
    "NOT SURE",
  ];

  const investments = [
    "Residential Purpose",
    "Capital Appreciation",
    "Golden Visa Benefits",
  ];

  const buyingTimes = ["Immediately", "This Month", "Within 1-3 Months"];
  const [preferences, setPreferences] = useState({
    community: null,
    budget: null,
    bedroom: null,
    investment: null,
    buyingTime: null,
  });

  const percent = Math.round((step / (steps.length - 1)) * 100);

  function next() {
    if (step < steps.length - 1) setStep((s) => s + 1);
  }
  function back() {
    if (step > 0) setStep((s) => s - 1);
  }

  const buttonDisable =
    (step === 0 && preferences.community === null) ||
    (step === 1 && preferences.budget === null) ||
    (step === 2 && preferences.bedroom === null) ||
    (step === 3 && preferences.investment === null) ||
    (step === 4 && preferences.buyingTime === null);

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* header */}
        <p className="text-sm text-center text-gray-500 py-6">
          Explore the most trending Properties by Binghatti
        </p>

        {/* Step Progress Bar */}
        <div className="w-full flex items-center justify-between mb-10">
          {steps.map((item, i) => (
            <div key={i} className="flex flex-col items-center flex-1 relative">
              {/* Left Line */}
              {i !== 0 && (
                <div
                  className={`absolute left-0 top-5 h-[2px] w-1/2 
                  ${
                    i <= step ? "bg-[var(--text-secondary)]" : "bg-gray-300"
                  }`}></div>
              )}

              {/* Right Line */}
              {i !== steps.length - 1 && (
                <div
                  className={`absolute right-0 top-5 h-[2px] w-1/2 
                  ${
                    i < step ? "bg-[var(--text-secondary)]" : "bg-gray-300"
                  }`}></div>
              )}

              {/* Circle */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 z-10
                ${
                  i === step
                    ? step === 5
                      ? "bg-emerald-700 text-white"
                      : "bg-[var(--text-secondary)] text-white"
                    : i < step
                      ? "bg-amber-600 text-white"
                      : "bg-gray-200 border-gray-300 text-gray-700"
                }`}>
                {item.icon}
              </div>

              {/* Label */}
              <span
                className={`mt-2 text-sm ${
                  i === step
                    ? step === 5
                      ? "text-emerald-700"
                      : "text-[var(--text-secondary)] font-semibold"
                    : "text-gray-500"
                }`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* content card */}
        <div
          className={`${
            step === 5 ? "" : " bg-white shadow-sm p-6 rounded-lg"
          }`}>
          {step === 0 && (
            <div>
              <Animate animation="fadeIn">
                <h2 className="text-3xl font-bold mb-6">
                  Choose community preference:
                </h2>
              </Animate>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {properties.map((p) => (
                  <Animate key={p.title} animation="slideRightFade">
                    <button
                      onClick={() => {
                        setPreferences((prev) => ({
                          ...prev,
                          community: p.title,
                        }));
                        setTimeout(() => {
                          next();
                        }, 300);
                      }}
                      className={`text-left rounded-md overflow-hidden border transition-shadow hover:shadow-md focus:outline-none ${
                        preferences.community === p.title
                          ? "border-2 border-[var(--text-secondary)] shadow-lg"
                          : "border border-gray-200"
                      }`}>
                      <div className="h-48 bg-gray-200 overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 border-t bg-white">
                        <div className="text-sm font-semibold text-gray-700">
                          {p.title}
                        </div>
                      </div>
                    </button>
                  </Animate>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <RadioButtonList
              title={"Preferable Budget:"}
              name={"budget"}
              list={budgets}
              selectedvalue={preferences.budget}
              setSelectedValue={setPreferences}
              next={next}
            />
          )}

          {step === 2 && (
            <RadioButtonList
              title={"Number of bedroom preferred:"}
              name={"bedroom"}
              list={bedrooms}
              selectedvalue={preferences.bedroom}
              setSelectedValue={setPreferences}
              next={next}
            />
          )}

          {step === 3 && (
            <RadioButtonList
              title={"Purpose of Investment:"}
              name={"investment"}
              list={investments}
              selectedvalue={preferences.investment}
              setSelectedValue={setPreferences}
              next={next}
            />
          )}

          {step === 4 && (
            <RadioButtonList
              title={"How soon you are looking to buy?"}
              name={"buyingTime"}
              list={buyingTimes}
              selectedvalue={preferences.buyingTime}
              setSelectedValue={setPreferences}
              next={next}
            />
          )}

          {step === 5 && <Form preferences={preferences} />}
        </div>

        {/* navigation buttons */}
        {step !== 5 && (
          <div className="fixed px-6 max-w-6xl mx-auto bottom-0 left-0 right-0 bg-white py-4 flex items-center justify-between z-50">
            <div>
              <button
                onClick={() => {
                  setStep(0);
                  setPreferences({
                    community: null,
                    budget: null,
                    bedroom: null,
                    investment: null,
                    buyingTime: null,
                  });
                }}
                className="px-4 h-10 rounded-[0.25rem] border border-gray-300 bg-white">
                Reset
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={back}
                disabled={step === 0}
                className="px-3 h-10 rounded-[0.25rem] border border-gray-300 disabled:opacity-50 flex items-center gap-2">
                <FiArrowLeft className="text-lg" />
              </button>

              <button
                onClick={next}
                disabled={buttonDisable}
                className={`px-4 h-10 rounded-[0.25rem] bg-amber-500 text-white font-semibold flex items-center gap-2
                ${buttonDisable ? "opacity-40 cursor-not-allowed" : ""}`}>
                <span className="hidden sm:inline">Next</span>
                <FiArrowRight className="text-lg" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const RadioButtonList = ({
  title,
  list,
  name,
  selectedvalue,
  setSelectedValue,
  next,
}) => {
  return (
    <div>
      <Animate animation="fadeIn">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
      </Animate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map((item, index) => (
          <Animate key={index} animation="slideRightFade">
            <div>
              <label
                key={name}
                className={`flex items-center gap-4 p-4 rounded-md border ${
                  selectedvalue === item
                    ? "border-amber-300 bg-amber-50"
                    : "border-gray-200 bg-white"
                }`}>
                <input
                  type="radio"
                  name={name}
                  checked={selectedvalue === item}
                  onChange={() => {
                    setSelectedValue((prev) => ({
                      ...prev,
                      [name]: list[index],
                    }));
                    setTimeout(() => {
                      next();
                    }, 300);
                  }}
                  className="w-5 h-5"
                />
                <span className="text-gray-700 font-medium">{item}</span>
              </label>
            </div>
          </Animate>
        ))}
      </div>
    </div>
  );
};
