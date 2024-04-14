import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";

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
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  "use server";
  const { title, price, stock, color, size, cat, desc } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const newProduct = new Product({
      title,
      price,
      stock,
      color,
      size,
      cat,
      desc,
    });
    newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
