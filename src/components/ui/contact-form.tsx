"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "./button";
import sendEmailNotification from "@/app/api/_actions";
import toast, { Toaster } from "react-hot-toast";
import { PulseLoader } from "react-spinners";

type Props = {};

export interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const result = await sendEmailNotification(data);

    if (result?.success) {
      toast.success("Thank you for reaching out.");
      //   reset();
      return;
    }
    if (result?.error) {
      toast.error(result.error);
      return;
    }
  };

  return (
    <form
      className="flex flex-col items-start space-y-2 text-base"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Toaster
        position="bottom-right"
        toastOptions={{
          success: {
            style: {
              background: "#191919",
              color: "#E5E7EB",
              border: "1px solid #86EFAC",
            },
          },
          error: {
            style: {
              background: "#191919",
              color: "#E5E7EB",
              border: "1px solid #FCA5A5",
            },
          },
        }}
      />
      <div className="flex flex-col items-start space-y-2">
        <label className="text-gray-200 uppercase" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          placeholder="James Bond"
          className="input-text"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <span className="text-red-300 text-sm">{errors.name.message}</span>
        )}
      </div>
      <div className="flex flex-col items-start space-y-2">
        <label className="text-gray-200 uppercase" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          placeholder="james@bond.com"
          className="input-text"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
        />
        {errors.email && (
          <span className="text-red-300 text-sm">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col items-start space-y-2">
        <label className="text-gray-200 uppercase" htmlFor="message">
          Message
        </label>
        <textarea
          placeholder="How can I help you?"
          className="input-text h-40"
          {...register("message", { required: "Message is required." })}
        />
        {errors.message && (
          <span className="text-red-300 text-sm">{errors.message.message}</span>
        )}
      </div>
      <div className="flex flex-col items-start">
        <Button
          type="submit"
          className="flex justify-center items-center px-2 py-2 w-80"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <PulseLoader size={12} color="#191919" />
          ) : (
            "Say Hello 👋"
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
