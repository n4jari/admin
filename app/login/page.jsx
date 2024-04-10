const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="flex flex-col text-center bg-soft p-4 gap-3 min-w-96 min-h-72  rounded-md justify-center">
        <h2 className=" text-xl font-bold">Login</h2>
        <input
          className="rounded-md p-2 bg border border-slate-700 text-soft"
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className="rounded-md p-2 bg border border-slate-700 text-soft"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="bg-indigo-500 hover:bg-indigo-600 p-2 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
