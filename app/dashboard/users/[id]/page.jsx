import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import Image from "next/image";

const SingleUser = async ({ params }) => {
  const user = await fetchUser(params.id);
  return (
    <div className="flex gap-4 max-md:flex-col">
      <div className="flex-1 bg-soft p-4 rounded-md font-bold text-soft h-max">
        <div className="w-full h-80 max-lg:h-40 max-md:h-80  overflow-hidden relative rounded-md mb-4 max-lg:text-sm">
          <Image src={user.img || "/noavatar.png"} alt="profile" fill />
        </div>
        {user.username}
      </div>
      <div className="bg-soft p-4 rounded-md" style={{ flex: 3 }}>
        <form action={updateUser} className="flex flex-col gap-2">
          <input type="hidden" name="id" value={user.id} />
          <label className="trext-sm">Username</label>
          <input
            className="bg text-soft border border-slate-700  p-2 rounded-md"
            type="text"
            name="username"
            placeholder={user.username}
          />
          <label className="trext-sm">Email</label>
          <input
            className="bg text-soft border border-slate-700  p-2 rounded-md"
            type="email"
            name="email"
            placeholder={user.email}
          />
          <label className="trext-sm">password</label>
          <input
            className="bg text-soft border border-slate-700  p-2 rounded-md"
            type="password"
            name="password"
            placeholder={user.password}
          />
          <label className="trext-sm">Phone</label>
          <input
            className="bg text-soft border border-slate-700  p-2 rounded-md"
            type="phone"
            name="phone"
            placeholder={user.phone}
          />
          <label className="trext-sm">Address</label>
          <input
            className="bg text-soft border border-slate-700  p-2 rounded-md"
            type="text"
            name="address"
            placeholder={user.address}
          />
          <label className="trext-sm">Is Admin?</label>
          <select
            defaultValue={user.isAdmin}
            className="bg text-soft border border-slate-700  p-2 rounded-md"
            name="isAdmin"
            id="isAdmin"
          >
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>

          <label className="trext-sm">Is Active?</label>
          <select
            defaultValue={user.isActive}
            className="bg text-soft border border-slate-700  p-2 rounded-md"
            name="isActive"
            id="isActive"
          >
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>

          <button
            type="submit"
            className=" font-medium bg-indigo-500 p-2 rounded-md w-full hover:bg-indigo-600"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
