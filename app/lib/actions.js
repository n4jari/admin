"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
  const { username, email, password, phone, isAdmin, address } =
    Object.fromEntries(formData);

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    connectToDB();
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
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

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      username,
      email,
      password,
      phone,
      isAdmin,
      isActive,
      address,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        updateFields[key] === "" || (undefined && delete updateFields[key])
    );
    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateProduct = async (formData) => {
  const { id, title, price, stock, color, size, cat, desc } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = { title, price, stock, color, size, cat, desc };
    Object.keys(updateFields).forEach(
      (key) =>
        updateFields[key] === "" || (undefined && delete updateFields[key])
    );
    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await User.findOneAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }
  revalidatePath("/dashboard/users");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await Product.findOneAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }
  revalidatePath("/dashboard/products");
};
