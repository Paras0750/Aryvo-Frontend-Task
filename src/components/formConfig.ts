import { z } from "zod";

export const schema = z.object({
  fullName: z.number(),
  contactNumber: z.string(),
  emailAddress: z.string().email(),
  accountingRef: z.string(),
  nominalCode: z.string(),
  callSign: z.string(),
  commission: z.string(),
  weeklyCharge: z.string(),
  driverGroup: z.string(),
  homeAddress: z.string(),
  licenseNumber: z.string(),
  driverType: z.string(),
  issuedBy: z.string(),
  badgeNumber: z.string(),
  registration: z.string(),
  model: z.string(),
  passengers: z.string(),
  rideType: z.string(),
  bodyType: z.string(),
  insuranceNumber: z.string(),
});

export type FormFields = z.infer<typeof schema>;

export const SignupSectionSchema = z.object({
  fullName: z.string(),
  contactNumber: z.string(),
  emailAddress: z.string().email(),
  accountingRef: z.string(),
  nominalCode: z.string(),
  callSign: z.string(),
  commission: z.string(),
  weeklyCharge: z.string(),
  driverGroup: z.string(),
  homeAddress: z.string(),
  licenseNumber: z.string(),
});

export const TaxiInfoSchema = z.object({
  driverType: z.string(),
  issuedBy: z.string(),
  badgeNumber: z.string(),
});

export const VehicleInformationSchema = z.object({
  registration: z.string(),
  model: z.string(),
  passengers: z.string(),
  rideType: z.string(),
  bodyType: z.string(),
  insuranceNumber: z.string(),
});
