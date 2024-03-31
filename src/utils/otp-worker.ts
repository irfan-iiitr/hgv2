import Redis from "ioredis";
import nodemailer from "nodemailer";
import {
  SMTP_EMAIL,
  SMTP_PASSWORD,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_PASSWORD,
} from "../config";

const client = new Redis({
  host: REDIS_HOST as any | "localhost",
  port: REDIS_PORT as any | 6379,
  password: REDIS_PASSWORD as any | undefined,
});

const generateOTP = async (email: string) => {
  try {
    const otp = Math.floor(100000 + Math.random() * 900000);
    const response = await client.set(`otp:${email}`, otp, "EX", 300);
    if (response !== "OK") {
      throw new Error("Failed to generate OTP");
    }
    console.log(`Generated OTP for ${email} is ${otp}`);
    sendMail(email, otp);
    return true;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to generate OTP");
  }
};

const verifyOTP = async (email: string, otp: number) => {
  try {
    const response = await client.get(`otp:${email}`);
    if (response === null) {
      throw new Error("OTP expired");
    }
    if (parseInt(response) !== otp) {
      throw new Error("Invalid OTP");
    }

    await client.del(`otp:${email}`);

    console.log(`Verified OTP for ${email} is ${otp}`);
    return true;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to verify OTP");
  }
};

const sendMail = async (email: string, otp: number) => {
  try {
    console.log(process.env.Email, process.env.PASSWORD);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "OTP for password reset",
      text: `Your OTP for password reset is ${otp}`,
    };

    const response = await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${email} with OTP ${otp}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to send OTP");
  }
};

export { generateOTP, verifyOTP };

/*In the above code, we have two functions  generateOTP  and  verifyOTP  that generate and verify OTPs respectively. The OTPs are stored in Redis with a TTL of 300 seconds. */
