import Redis from "ioredis";

const client = new Redis({
  host: "localhost",
  port: 6379,
});

const generateOTP = async (email: string) => {
  try {
    const otp = Math.floor(100000 + Math.random() * 900000);
    const response = await client.set(`otp:${email}`, otp, "EX", 300);
    if (response !== "OK") {
      throw new Error("Failed to generate OTP");
    }
    console.log(`Generated OTP for ${email} is ${otp}`);
    return {
      message: "OTP generated successfully",
    };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to generate OTP");
  }
};

const verifyOTP = async (email: number, otp: number) => {
  try {
    const response = await client.get(`otp:${email}`);
    if (response === null) {
      throw new Error("OTP expired");
    }
    if (parseInt(response) !== otp) {
      throw new Error("Invalid OTP");
    }
    console.log(`Verified OTP for ${email} is ${otp}`);
    return {
      message: "OTP verified successfully",
    };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to verify OTP");
  }
};

export { generateOTP, verifyOTP };

/*In the above code, we have two functions  generateOTP  and  verifyOTP  that generate and verify OTPs respectively. The OTPs are stored in Redis with a TTL of 300 seconds. 
 Now, let’s create a new file  src/utils/otp-worker.ts  to create a worker that will listen to the  otp  queue and process the messages. */
