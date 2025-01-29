import bcrypt from "bcrypt";

export const hashValue = async (value: string, saltRounds?: number) => {
  const salt = saltRounds || 10;
  return bcrypt.hash(value, salt);
};

export const compareValue = async (value: string, hashedValue: string) => {
  return bcrypt.compare(value, hashedValue).catch(() => false);
};
