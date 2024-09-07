import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import QRCode from "react-qr-code";

type FormFields = {
  name: string;
  number: string;
  email: string;
};

export const ScriptFrorm = () => {
  const qrRef = useRef<HTMLDivElement>(null);
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
    },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormFields) => {
    try {
      setIsSubmitted(true);
      reset();
      console.log("submitted", data);
      window.open(
        "https://drive.google.com/file/d/1aqzRaGrl7ilUG_8Lxr0AyxJOYTra4TNT/view?usp=Shari",
        "_blank"
      );
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="flex flex-col w-[90%] mx-auto items-center gap-14">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-5"
      >
        <input
          {...register("name", {
            required: "Name is required",
          })}
          type="text"
          placeholder="Name"
          className="rounded-xl p-2 border"
        />
        {errors.name && (
          <div className="text-red-500">{errors.name.message}</div>
        )}

        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          type="email"
          placeholder="Email"
          className="rounded-xl p-2 border"
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}

        <input
          {...register("number", {
            required: "Number is required",
            minLength: {
              value: 10,
              message: "Enter correct number",
            },
          })}
          type="text"
          placeholder="Number"
          className="rounded-xl p-2 border"
        />
        {errors.number && (
          <div className="text-red-500">{errors.number.message}</div>
        )}
        <button
          type="submit"
          className="w-full bg-[#D72323] text-white p-2 rounded-xl"
        >
          Get Now
        </button>
      </form>
    </div>
  );
};
