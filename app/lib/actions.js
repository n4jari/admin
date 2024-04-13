import { User } from "./models";
import { connectToDB } from "./utils";

export const addUser = async (formData) => {
  "use server";
  const { username, email, password, phone, isAdmin, address } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const newUser = new User({
      username,
      email,
      password,
      phone,
      isAdmin,
      address,
    });
    newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }
};
