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
  const downloadQRCode = () => {
    const qrCodeSVG = qrRef.current?.querySelector("svg");

    if (qrCodeSVG) {
      const svgData = new XMLSerializer().serializeToString(qrCodeSVG);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const svgSize = qrCodeSVG.getBoundingClientRect();
      canvas.width = svgSize.width;
      canvas.height = svgSize.height;

      const img = new Image();
      const svgBlob = new Blob([svgData], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        ctx?.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);

        // Convert the canvas to a data URL in JPEG format
        const jpegDataUrl = canvas.toDataURL("image/jpeg");

        // Create a temporary link element to trigger the download
        const downloadLink = document.createElement("a");
        downloadLink.href = jpegDataUrl;
        downloadLink.download = "qrcode.jpg";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };

      img.src = url;
    }
  };

  const onSubmit = (data: FormFields) => {
    try {
      setIsSubmitted(true);
      reset();
      downloadQRCode();
      console.log("submitted", data);
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
          Generate QR
        </button>
      </form>
      <div className="h-74 w-full flex items-center justify-center">
        <div
          className={`relative ${!isSubmitted ? "blur-xl" : ""}`} // Apply blur if not submitted
          style={{
            height: "auto",
            maxWidth: 256,
            width: "100%",
          }}
          ref={qrRef}
        >
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value="https://drive.google.com/file/d/1aqzRaGrl7ilUG_8Lxr0AyxJOYTra4TNT/view?usp=Shari"
            viewBox={`0 0 256 256`}
          />
        </div>
      </div>
    </div>
  );
};
