"use server";

import { IFormInput } from "@/components/ui/contact-form";
import axios from "axios";

const sendEmailNotification = async (data: IFormInput) => {
  const apiUrl = process.env.MAIL_SERVER_API_URL;

  if (!apiUrl) {
    return { success: false, error: "Mail server URL is not configured." };
  }

  try {
    const response = await axios.post(apiUrl, data, {
      headers: {
        "x-api-key": process.env.MAIL_SERVER_API_KEY,
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      return { success: response.data.msg, message: response.data.message };
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        error:
          error.response?.data?.error ||
          error.message ||
          "Failed to send the email notification.",
      };
    }

    return { success: false, error: "Failed to send the email notification." };
  }
};

export default sendEmailNotification;
