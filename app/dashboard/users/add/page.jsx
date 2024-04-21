import { addUser } from "@/lib/actions";

const AddUser = () => {
  return (
    <div className="bg-soft p-4 rounded-md">
      <form action={addUser} className="flex flex-wrap justify-between">
        <input
          required
          type="text"
          name="username"
          placeholder="username"
          className="w-5/12 p-4 mb-6 rounded-md bg border text-soft border-slate-700"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="email"
          className="w-5/12 p-4 mb-6 rounded-md bg border text-soft border-slate-700"
        />
        <input
          required
          type="password"
          name="password"
          placeholder="password"
          className="w-5/12 p-4 mb-6 rounded-md bg border text-soft border-slate-700"
        />
        <input
          type="phone"
          name="phone"
          placeholder="phone"
          className="w-5/12 p-4 mb-6 rounded-md bg border text-soft border-slate-700"
        />
        <select
          name="isAdmin"
          id="isAdmin"
          className="w-5/12 p-4 mb-6 rounded-md bg   border text-soft border-slate-700"
        >
          <option value="true" selected>
            is Admin?
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <textarea
          className="p-4 mb-6 rounded-md bg border text-soft border-slate-700 w-full"
          name="address"
          id="address"
          placeholder="Address"
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

export default AddUser;
