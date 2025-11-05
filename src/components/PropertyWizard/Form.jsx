import React from "react";
import { Controller, useForm } from "react-hook-form";
import { FaEnvelope, FaChevronDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const getTextFieldStyles = (error) => {
  return `w-full p-3 h-15 border rounded-[0.25rem] shadow-sm text-[0.9375rem] font-medium focus:outline-none
        ${error ? "border-red-600" : "border-gray-300 focus:border-blue-500"}`;
};

const labelStyles =
  "uppercase text-[0.75rem] font-bold leading-none tracking-[0.075rem] text-left text-gray-500";

const TextField = ({
  label,
  name,
  placeholder,
  icon,
  value,
  onChange,
  error,
  type = "text",
}) => {
  return (
    <div className="relative w-full">
      <label htmlFor={name} className={labelStyles}>
        {label}
      </label>
      <div className="relative w-full">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            {React.cloneElement(icon, { className: "text-gray-400 mr-2" })}
          </div>
        )}
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${getTextFieldStyles(error)} ${icon ? "pl-10" : ""}`}
        />
        {error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600">
            <svg
              className="mdi-icon mdi-36px text-red-600"
              viewBox="0 0 24 24"
              width="24"
              height="24">
              <title>mdi-alert-circle</title>
              <path
                d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                strokeWidth="0"
                fill="currentColor"
                fillRule="nonzero"
              />
            </svg>
          </div>
        )}
      </div>
      {error && <span className="text-red-600 text-sm">{error}</span>}
    </div>
  );
};

const formFields = [
  {
    id: "name",
    name: "name",
    label: "Enter your name*",
    placeholder: "Enter Full Name",
    type: "text",
    rules: { required: "Name is required" },
    icon: <FaUser />,
  },
  {
    id: "email",
    name: "email",
    label: "Enter your email",
    placeholder: "email@domain.com",
    type: "email",
    rules: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Invalid email format",
      },
    },
    icon: <FaEnvelope />,
  },
  {
    id: "phone",
    name: "phone",
    label: "Enter phone number",
    placeholder: "Enter your phone number *",
    type: "tel",
    rules: {
      required: "Phone is required",
      pattern: {
        value: /^[0-9+\-\s]{7,}$/,
        message: "Invalid phone number",
      },
    },
  },
  {
    id: "cityCountry",
    name: "cityCountry",
    label: "Please enter City, Country*",
    placeholder: "Please enter City, Country",
    rules: { required: "Name is required" },
  },
];

const countryOptions = [
  { code: "+971", label: "UAE", flagUrl: "https://flagcdn.com/w20/ae.png" },
  { code: "+1", label: "USA", flagUrl: "https://flagcdn.com/w20/us.png" },
  { code: "+91", label: "India", flagUrl: "https://flagcdn.com/w20/in.png" },
];

export default function Form() {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      cityCountry: "",
    },
  });

  const onSubmit = async (formData) => {
    console.log("formData : ", formData);
    reset();
  };

  return (
    <div className="max-w-xl mx-auto mb-10 p-8 space-y-4 bg-white shadow-md rounded-[0.25rem]">
      <h2 className="text-2xl font-semibold text-center">
        Please fill in your details:
      </h2>

      <p className="text-sm text-center text-gray-500">
        Fill in your information to view results and secure exclusive discounts!
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        {formFields.map((field) =>
          field.id === "phone" ? (
            <div key={field.id} className="w-full">
              <label htmlFor="phone" className={labelStyles}>
                {field.label}
              </label>
              <div
                className={`w-full h-15 flex items-center border border-gray-300 rounded-[0.25rem] shadow-sm text-[0.9375rem] font-medium`}>
                <div className="h-full flex items-center gap-2 px-4 border-r border-gray-300 bg-white">
                  <img
                    src="https://flagcdn.com/w20/ae.png"
                    alt="UAE flag"
                    className="w-5 h-4 object-cover"
                  />
                  <span className="text-[0.9375rem] font-medium text-gray-700">
                    +971
                  </span>
                  <FaChevronDown className="text-gray-500 text-xs" />
                </div>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full h-full flex-1 pl-2 rounded-r-[0.25rem] focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
            </div>
          ) : (
            <Controller
              key={field.id}
              control={control}
              name={field.name}
              rules={field.rules}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <TextField
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  icon={field.icon}
                  value={value}
                  onChange={onChange}
                  error={error?.message}
                  type={field.type}
                />
              )}
            />
          )
        )}

        {/* Privacy Policy Checkbox */}
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="privacy" className="mr-2" />
          <label htmlFor="privacy" className="text-sm text-gray-600">
            I agree with the
            <span className="text-blue-500">Privacy policy</span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-[0.25rem] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Send again
          </button>
        </div>
      </form>
    </div>
  );
}
