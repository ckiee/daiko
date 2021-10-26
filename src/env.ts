import dotenv from "dotenv-safe";
dotenv.config();

export const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID!;
export const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN!;
export const messagingServiceSid = process.env.MESSAGING_SERVICE_SID;
export const phoneNumber = process.env.PHONE_NUMBER!;
export const iscoolSubdomain = process.env.ISCOOL_SUBDOMAIN!;
export const iscoolClassIndex = process.env.ISCOOL_CLASS_INDEX!;
