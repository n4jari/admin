import Image from "next/image";
import React from "react";

const SingleUser = () => {
  return (
    <div className="flex gap-4">
      <div className="flex-1 h-max bg-soft rounded-md p-4">
        <div className="mb-2 w-full h-64 rounded-md relative overflow-hidden">
          <Image className="" src="/noavatar.png" fill alt="profile picture" />
        </div>
        Amireza Najari
      </div>
      <div style={{ flex: 3 }} className="bg-soft p-4 rounded-md">
        <form className="flex flex-col gap-2">
          <label>Username</label>
          <input
            className="bg text-soft p-2 border border-slate-700 rounded-md "
            type="text"
            name="username"
            placeholder="Amireza Najari"
          />
          <label>Email</label>
          <input
            className="bg text-soft p-2 border border-slate-700 rounded-md "
            type="email"
            name="email"
            placeholder="n4jari@gmail.com"
          />
          <label>Phone</label>
          <input
            className="bg text-soft p-2 border border-slate-700 rounded-md "
            type="phone"
            name="phone"
            placeholder="+12345"
          />
          <label>Address</label>
          <textarea
            className="bg text-soft p-2 border border-slate-700 rounded-md "
            name="address"
            id="address"
            cols="30"
            rows="10"
            placeholder="Iran"
          ></textarea>
          <label>Is Admin?</label>
          <select
            className="bg text-soft p-2 border border-slate-700 rounded-md "
            name="isAdmin"
            id="isAdmin"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label>Is Active?</label>
          <select
            className="bg text-soft p-2 border border-slate-700 rounded-md "
            name="isActive"
            id="isActive"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button className="w-full bg-indigo-500 hover:bg-indigo-600 p-2 rounded-md my-2" type="submit" >Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
