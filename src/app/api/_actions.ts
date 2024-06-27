"use server";

import { IFormInput } from "@/components/ui/contact-form";
import axios from "axios";

const sendEmailNotification = async (data: IFormInput) => {
  const apiUrl = process.env.MAIL_SERVER_API_URL;

  try {
    const response = await axios.post(
      apiUrl + "/email/send-notification",
      data,
      {
        headers: {
          "x-api-key": process.env.MAIL_SERVER_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      return { success: response.data.msg, message: response.data.message };
    }
  } catch (error: any) {
    return { success: false, error: error.response.data.error };
  }
};

export default sendEmailNotification;
