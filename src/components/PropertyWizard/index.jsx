"use client";
import React, { useState } from "react";
import properties from "@/assets/json/properties.json";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Animate from "../Common/Animate";

export default function PropertyWizard() {
  const [step, setStep] = useState(0);
  const steps = [
    "Community",
    "Budget",
    "Bedrooms",
    "Investments",
    "Buying Time",
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

  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedBedroom, setSelectedBedroom] = useState(null);
  const [selectedInvestment, setSelectedInvestment] = useState(null);
  const [selectedBuyingTime, setSelectedBuyingTime] = useState(null);

  const percent = Math.round((step / (steps.length - 1)) * 100);

  function next() {
    if (step < steps.length - 1) setStep((s) => s + 1);
  }
  function back() {
    if (step > 0) setStep((s) => s - 1);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* header */}
        <p className="text-sm text-center text-gray-500 py-6">
          Explore the most trending Properties by Binghatti
        </p>

        {/* Progress Bar */}
        <div className="mb-8 w-full">
          <div className="w-full flex items-center justify-between gap-3 text-sm text-gray-500 pb-5">
            {steps.map((s, i) => (
              <div
                key={s}
                className={`flex-1 text-center py-1 ${
                  i === step ? "text-[var(--text-highlight)] font-semibold" : ""
                }`}>
                {s}
              </div>
            ))}
          </div>

          <div className="relative w-full">
            <div className="h-2 w-full bg-gray-200 rounded-full"></div>
            <div
              className="h-2 bg-amber-400 rounded-full absolute top-0 left-0 transition-all duration-300"
              style={{ width: `${percent}%` }}></div>

            <div
              className="absolute flex flex-col items-center transition-all duration-300"
              style={{ left: `calc(${percent}% - 8px)`, top: "-25px" }}>
              <span className="text-amber-400 font-semibold text-sm">
                {percent}%
              </span>
              <span className="w-4 h-4 bg-[var(--text-secondary)] rounded-full border-2 border-white"></span>
            </div>
          </div>
        </div>

        {/* content card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {step === 0 && (
            <div>
              <Animate animation="fadeIn">
                <h2 className="text-3xl font-bold mb-6">
                  Choose community preference:
                </h2>
              </Animate>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {properties.map((p) => (
                  <Animate key={p.id} animation="slideRightFade">
                    <button
                      onClick={() => {
                        setSelectedCommunity(p.id);
                        setTimeout(() => {
                          next();
                        }, 300);
                      }}
                      className={`text-left rounded-md overflow-hidden border transition-shadow hover:shadow-md focus:outline-none ${
                        selectedCommunity === p.id
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
              selectedvalue={selectedBudget}
              setSelectedValue={setSelectedBudget}
              next={next}
            />
          )}

          {step === 2 && (
            <RadioButtonList
              title={"Number of bedroom preferred:"}
              name={"bedroom"}
              list={bedrooms}
              selectedvalue={selectedBedroom}
              setSelectedValue={setSelectedBedroom}
              next={next}
            />
          )}

          {step === 3 && (
            <RadioButtonList
              title={"Purpose of Investment:"}
              name={"investment"}
              list={investments}
              selectedvalue={selectedInvestment}
              setSelectedValue={setSelectedInvestment}
              next={next}
            />
          )}

          {step === 4 && (
            <RadioButtonList
              title={"How soon you are looking to buy?"}
              name={"buy"}
              list={buyingTimes}
              selectedvalue={selectedBuyingTime}
              setSelectedValue={setSelectedBuyingTime}
              next={next}
            />
          )}
        </div>

        {/* navigation buttons */}
        <div className="fixed px-6 max-w-6xl mx-auto bottom-0 left-0 right-0 bg-white py-4 flex items-center justify-between z-50">
          <div>
            <button
              onClick={() => {
                setStep(0);
                setSelectedCommunity(null);
                setSelectedBudget(null);
                setSelectedBedroom(null);
                setSelectedInvestment(null);
                setSelectedBuyingTime(null);
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
            {step < steps.length - 1 ? (
              <button
                onClick={next}
                className="px-4 h-10 rounded-[0.25rem] bg-amber-500 text-white font-semibold flex items-center gap-2">
                <span className="hidden sm:inline">Next</span>
                <FiArrowRight className="text-lg" />
              </button>
            ) : (
              <button
                onClick={() => alert("Submitted!")}
                className="px-6 h-10 rounded-md bg-emerald-600 text-white font-semibold">
                Submit
              </button>
            )}
          </div>
        </div>
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
                  selectedvalue === index
                    ? "border-amber-300 bg-amber-50"
                    : "border-gray-200 bg-white"
                }`}>
                <input
                  type="radio"
                  name={name}
                  checked={selectedvalue === index}
                  onChange={() => {
                    setSelectedValue(index);
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
