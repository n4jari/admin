import Image from "next/image";

const SingleProduct = () => {
  return (
    <div className="flex gap-4">
      <div className="flex-1 h-max bg-soft rounded-md p-4">
        <div className="mb-2 w-full h-64 rounded-md relative overflow-hidden">
          <Image className="" src="/noproduct.jpg" fill alt="iphone picture" />
        </div>
        Iphone
      </div>
      <div style={{ flex: 3 }} className="bg-soft p-4 rounded-md">
        <form className="flex flex-col gap-2">
          <label>Title</label>
          <input
            className="bg text-soft p-2 border border-slate-700 rounded-md "
            type="text"
            name="title"
            placeholder="Iphone"
          />
          <label>Price</label>
          <input
            className="bg text-soft p-2 border border-slate-700 rounded-md "
            type="number"
            name="price"
            placeholder="$99"
          />
          <label>stock</label>
          <input
            className="bg text-soft p-2 border border-slate-700 rounded-md "
            type="number"
            name="stock"
            placeholder="23"
          />
          <label>Color</label>
          <input
            className="bg text-soft p-2 border border-slate-700 rounded-md "
            type="text"
            name="color"
            placeholder="Red"
          />
          <label>Size</label>
          <input
            className="bg text-soft p-2 border border-slate-700 rounded-md"
            type="text"
            name="size"
            placeholder="Large"
          />
          <label>Cat</label>
          <select
            className="bg text-soft p-2 border border-slate-700 rounded-md "
            name="cat"
            id="cat"
          >
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="des"
            id="des"
            cols="30"
            rows="10"
            placeholder="Description"
            className="bg text-soft p-2 border border-slate-700 rounded-md"
          ></textarea>
          <button
            className="w-full bg-indigo-500 hover:bg-indigo-600 p-2 rounded-md my-2"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
