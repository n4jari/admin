import Image from "next/image";

const SingleUser = () => {
  return (
    <div className="flex gap-12">
      <div className="flex-1 bg-soft p-4 rounded-md font-bold text-soft h-max">
        <div className="w-full h-80 overflow-hidden relative rounded-md mb-4">
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        Amireza Najari
      </div>
      <div className="bg-soft p-4 rounded-md" style={{ flex: 3 }}>
        <form className="flex flex-col gap-3">
          <label className="trext-sm">Username</label>
          <input
            className="bg text-soft border border-slate-700  p-2 rounded-md"
            type="text"
            name="username"
            placeholder="Amireza Najari"
          />
          <label className="trext-sm">Email</label>
          <input
            className="bg text-soft border border-slate-700  p-2 rounded-md"
            type="email"
            name="email"
            placeholder="n4jari@gmail.com"
          />
          <label className="trext-sm">password</label>
          <input
            className="bg text-soft border border-slate-700  p-2 rounded-md"
            type="password"
            name="password"
            placeholder="&H@FG!@"
          />
          <label className="trext-sm">Phone</label>
          <input
            className="bg text-soft border border-slate-700  p-2 rounded-md"
            type="phone"
            name="phone"
            placeholder="+123456789"
          />
          <label className="trext-sm">Address</label>
          <input
            className="bg text-soft border border-slate-700  p-2 rounded-md"
            type="text"
            name="address"
            placeholder="Iran , Tehran"
          />
          <label className="trext-sm">Is Admin?</label>
          <select
            className="bg text-soft border border-slate-700  p-2 rounded-md"
            name="isAdmin"
            id="isAdmin"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label className="trext-sm">Is Active?</label>
          <select
            className="bg text-soft border border-slate-700  p-2 rounded-md"
            name="isActive"
            id="isActive"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
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
