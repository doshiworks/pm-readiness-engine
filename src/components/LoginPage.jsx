import Logo from "./Logo";

export default function LoginPage({ onLogin }) {
  function handleSubmit(e) {
    e.preventDefault();
    onLogin();
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: "linear-gradient(135deg, #faf5ff 0%, #eff6ff 50%, #f0fdf4 100%)" }}>
      <div className="w-full max-w-sm">

        {/* Logo + wordmark */}
        <div className="flex flex-col items-center mb-10">
          <Logo size={52} />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">PM Buddy</h1>
          <p className="text-sm text-gray-500 mt-1.5">Your PM transition co-pilot</p>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-base font-semibold text-gray-900 mb-6">Sign in</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                required
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent placeholder-gray-300"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white text-sm font-semibold py-2.5 rounded-lg transition-opacity cursor-pointer mt-2"
              style={{ background: "linear-gradient(135deg, #c084fc, #818cf8)" }}
            >
              Continue →
            </button>
          </form>

          <p className="text-xs text-gray-400 text-center mt-5">
            No account?{" "}
            <button
              onClick={onLogin}
              className="text-violet-600 font-medium underline underline-offset-2 cursor-pointer"
            >
              Create one free
            </button>
          </p>
        </div>

        <p className="text-xs text-gray-400 text-center mt-6">
          Built for professionals making the move to PM.
        </p>
      </div>
    </div>
  );
}
