"use client";
import { useForm, Controller } from "react-hook-form";
import Animate from "../Common/Animate";
// import { toast } from 'react-hot-toast';

const ContactForm = () => {
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
      telephone: "",
      department: "",
      message: "",
    },
  });

  const onSubmit = async (formData) => {
    console.log("formData : ", formData);
    reset();
  };

  const formFields = [
    {
      id: "name",
      name: "name",
      label: "Name*",
      placeholder: "Your name",
      type: "text",
      rules: { required: "Name is required" },
    },
    {
      id: "email",
      name: "email",
      label: "Email Address*",
      placeholder: "Enter Email Address",
      type: "email",
      rules: {
        required: "Email is required",
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Invalid email format",
        },
      },
    },
    {
      id: "telephone",
      name: "telephone",
      label: "Telephone Number*",
      placeholder: "Enter Telephone Number",
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
      id: "department",
      name: "department",
      label: "Department*",
      type: "select",
      options: [
        { value: "", label: "Department" },
        { value: "sales", label: "Sales" },
        { value: "rent", label: "Rentals" },
      ],
      rules: { required: "Department is required" },
    },
    {
      id: "message",
      name: "message",
      label: "Message",
      placeholder: "Write your message here...",
      type: "textarea",
      rules: {
        minLength: {
          value: 10,
          message: "Minimum 10 characters required",
        },
      },
    },
  ];

  return (
    <div className="max-w-3xl mx-auto pt-20">
      <Animate>
        <h2 className="text-lg md:text-xl font-semibold text-center mb-6">
          Contact KNMG Property Estate Agents
        </h2>
      </Animate>
      <Animate>
        <p className="text-2xl md:text-4xl font-semibold text-center mb-10">
          We're here to answer questions or connect you with the right people.
        </p>
      </Animate>
      <Animate>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mx-4">
          {formFields.map((field) => (
            <div key={field.id}>
              <label className="block text-sm font-semibold mb-1">
                {field.label}
              </label>

              <Controller
                control={control}
                name={field.name}
                rules={field.rules}
                render={({ field: controllerField }) => {
                  if (field.type === "textarea") {
                    return (
                      <textarea
                        {...controllerField}
                        placeholder={field.placeholder}
                        className="w-full border px-4 py-2 rounded h-28"
                      />
                    );
                  }

                  if (field.type === "select") {
                    return (
                      <select
                        {...controllerField}
                        className="w-full border px-4 py-2 rounded">
                        {field.options.map((opt, index) => (
                          <option key={index} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    );
                  }

                  return (
                    <input
                      {...controllerField}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full border px-4 py-2 rounded"
                    />
                  );
                }}
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.name]?.message}
                </p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full border-2 border-black text-black font-semibold py-2 rounded hover-bg hover:text-white transition">
            {isSubmitting ? "Sending..." : "Submit Details"}
          </button>

          <p className="text-xs text-center mt-4 mb-6">
            By clicking Send Message, you agree to our{" "}
            <a href="#" className="underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </Animate>
    </div>
  );
};

export default ContactForm;
