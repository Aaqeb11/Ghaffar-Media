import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "dotenv/config";

type FormFields = {
  name: string;
  number: string;
  email: string;
};

export const ScriptForm = () => {
  const template = process.env.NEXT_PUBLIC_TEMPLATE_SCRIPT;
  const service = process.env.NEXT_PUBLIC_SERVICE_ID;
  const key = process.env.NEXT_PUBLIC_USER_ID;
  const qrRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      name: "",
      number: "",
      email: "",
    },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const onSubmit = (data: FormFields) => {
    emailjs
      .send(service!, template!, data, key)
      .then((response) => {
        setIsSubmitted(true);
        setShowModal(false);
        reset();
        console.log("submitted", data);
        window.open(
          "https://drive.google.com/file/d/1aqzRaGrl7ilUG_8Lxr0AyxJOYTra4TNT/view?usp=Shari",
          "_blank"
        );
      })
      .catch((error) => {
        console.error("FAILED...", error);
      });
  };

  return (
    <div className="flex flex-col w-full items-center gap-14">
      {/* Card Structure */}
      <div
        className="shadow-2xl border-[1px] rounded-xl p-8 w-[90%] max-w-lg flex flex-col items-center"
        style={{
          background:
            "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(240,48,48,1) 100%)",
        }}
      >
        {/* Card Content */}
        <h2 className="md:text-2xl text-xl  font-bold mb-4 text-black">
          GET YOUR FREE SCRIPT!
        </h2>
        <p className="text-white mb-6 text-center text-gray-700 ">
          Enter your details and get instant access!
        </p>

        {/* Button to trigger the modal */}
        <button
          onClick={() => setShowModal(true)}
          className="text-white bg-[#D72323] p-2 rounded-xl w-full font-semibold"
        >
          Open Form
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-xl w-[90%] max-w-lg">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="text-red-500 float-right"
            >
              X
            </button>

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
        </div>
      )}
    </div>
  );
};
