import React from "react";

const AddProduct = () => {
  return (
    <div className="bg-soft p-4 rounded-md">
      <form className="flex flex-wrap justify-between">
        <input
          required
          name="title"
          placeholder="title"
          className="w-5/12 p-4 mb-6 rounded-md bg border text-soft border-slate-700"
        />
        <select
          name="cat"
          id="cat"
          className="w-5/12 p-4 mb-6 rounded-md bg border text-soft border-slate-700"
        >
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input
          className="w-5/12 p-4 mb-6 rounded-md bg border text-soft border-slate-700"
          type="number"
          placeholder="price"
          name="price"
        />
        <input
          className="w-5/12 p-4 mb-6 rounded-md bg border text-soft border-slate-700"
          type="number"
          placeholder="stock"
          name="stock"
        />
        <input
          className="w-5/12 p-4 mb-6 rounded-md bg border text-soft border-slate-700"
          type="text"
          placeholder="color"
          name="color"
        />
        <input
          className="w-5/12 p-4 mb-6 rounded-md bg border text-soft border-slate-700"
          type="text"
          placeholder="size"
          name="size"
        />
        <textarea
          className="p-4 mb-6 rounded-md bg border text-soft border-slate-700 w-full"
          name="des"
          id="des"
          placeholder="Description"
          rows="16"
        ></textarea>
        <button
          type="submit"
          className=" font-medium bg-indigo-500 p-2 rounded-md w-full hover:bg-indigo-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
