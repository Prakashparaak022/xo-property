import React from "react";
import { Controller, useForm } from "react-hook-form";
import { FaEnvelope, FaChevronDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { toast } from "react-toastify";

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

const PhoneNumberInput = ({
  label,
  name,
  placeholder,
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
      <div className="relative w-full h-full flex items-center">
        <div
          className={`${getTextFieldStyles(
            error
          )} w-full flex items-center gap-2 max-w-26 rounded-[0.25rem] rounded-r-none border-r-0`}>
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
          type={type}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${getTextFieldStyles(
            error
          )} flex-1 rounded-l-none border-l-none`}
        />
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

export default function Form({ preferences }) {
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
      privacy: false,
    },
  });

  const onSubmit = async (formData) => {
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        body: JSON.stringify({ ...formData, preferences }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thanks for your message!");
        reset();
      } else {
        toast.error("Failed to send. Please try again.");
      }
    } catch (err) {
      toast.error("An unexpected error occurred.");
      console.error("An unexpected error occurred: ", err);
    }
  };

  return (
    <div className="max-w-xl mx-auto mb-5 p-8 space-y-4 bg-white shadow-md rounded-[0.25rem]">
      <h2 className="text-2xl font-semibold text-center">
        Please fill in your details:
      </h2>

      <p className="font-medium text-gray-500 leading-[1.5] text-base">
        Fill in your information to view results and secure exclusive discounts!
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        {formFields.map((field) => (
          <Controller
            key={field.id}
            control={control}
            name={field.name}
            rules={field.rules}
            render={({ field: { value, onChange }, fieldState: { error } }) =>
              field.id === "phone" ? (
                <PhoneNumberInput
                  label={field.label}
                  name={field.name}
                  placeholder={field.placeholder}
                  icon={field.icon}
                  value={value}
                  onChange={onChange}
                  error={error?.message}
                  type={field.type}
                />
              ) : (
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
              )
            }
          />
        ))}

        {/* Privacy Policy Checkbox */}
        <Controller
          control={control}
          name="privacy"
          rules={{ required: "You must agree to the Privacy Policy" }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <div className="mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={value ?? false}
                  onChange={(e) => onChange(e.target.checked)}
                  className="mr-2"
                />
                <label
                  htmlFor="privacy"
                  className="text-xs font-semibold text-gray-600">
                  I agree with the
                  <span className="text-blue-500"> Privacy policy</span>
                </label>
              </div>

              {error && (
                <p className="text-red-600 text-xs mt-1">{error.message}</p>
              )}
            </div>
          )}
        />

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-white p-2 rounded-[0.25rem] hover:bg-amber-600 hover:shadow-lg transition-all focus:outline-none flex items-center justify-center gap-2
            ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
            style={{
              backgroundColor: "#f8c94d",
              boxShadow: "0 .1875rem .625rem 0 rgba(248, 201, 77, 0.5)",
            }}>
            {isSubmitting ? (
              <>
                <Spinner />
                Sending...
              </>
            ) : (
              "Send again"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

const Spinner = () => (
  <div className="flex items-center gap-1">
    <div className="w-1 h-4 bg-white animate-[wave_1s_ease-in-out_infinite]"></div>
    <div className="w-1 h-4 bg-white animate-[wave_1s_ease-in-out_infinite_0.2s]"></div>
    <div className="w-1 h-4 bg-white animate-[wave_1s_ease-in-out_infinite_0.4s]"></div>

    <style jsx>{`
      @keyframes wave {
        0% {
          transform: scaleY(0.4);
        }
        50% {
          transform: scaleY(1);
        }
        100% {
          transform: scaleY(0.4);
        }
      }
    `}</style>
  </div>
);
