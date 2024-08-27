import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormFields = {
  name: string;
  number: string;
  email: string;
  description: string;
};
const AppointmentForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      number: "",
      email: "",
      description: "",
    },
  });

  const onSubmit = async (data: FormFields) => {
    try {
      // Simulating form submission
      console.log("Form data:", data);
      reset();
      toast.success("Form Submitted Successfully!");
    } catch (err) {
      console.error("FAILED...", err);
      toast.error("Form Submission Failed!");
    }
  };

  return (
    <form
      className="flex flex-col md:w-[70%] w-[90%] mx-auto space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("name", { required: "Name is required" })}
        type="text"
        placeholder="Name"
        className="rounded-xl p-2 border"
      />
      {errors.name && <div className="text-red-500">{errors.name.message}</div>}

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            type="text"
            placeholder="Email"
            className="rounded-xl p-2 border w-full"
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>

        <div className="flex-1">
          <input
            {...register("number", {
              required: "Phone number is required",
              minLength: {
                value: 10,
                message: "Phone number must be at least 10 digits",
              },
            })}
            type="text"
            placeholder="Number"
            className="rounded-xl p-2 border w-full"
          />
          {errors.number && (
            <div className="text-red-500">{errors.number.message}</div>
          )}
        </div>
      </div>

      <textarea
        {...register("description", {
          required: "Description is required",
          minLength: {
            value: 5,
            message: "Description must be at least 5 characters long",
          },
        })}
        placeholder="Description"
        className="rounded-xl p-2 border"
        rows={4}
      />
      {errors.description && (
        <div className="text-red-500">{errors.description.message}</div>
      )}

      <button
        type="submit"
        className="w-full bg-[#D72323] text-white p-2 rounded-xl"
      >
        Contact Us
      </button>
    </form>
  );
};

export default AppointmentForm;