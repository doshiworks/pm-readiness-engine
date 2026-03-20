export default function LoginPage({ onLogin }) {
  function handleSubmit(e) {
    e.preventDefault();
    onLogin();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo / wordmark */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">PM Buddy</h1>
          <p className="text-sm text-gray-500 mt-1">Your PM transition co-pilot</p>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h2 className="text-base font-semibold text-gray-900 mb-6">Sign in</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                required
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer mt-2"
            >
              Continue
            </button>
          </form>

          <p className="text-xs text-gray-400 text-center mt-5">
            No account?{" "}
            <button
              onClick={onLogin}
              className="text-gray-700 font-medium underline underline-offset-2 cursor-pointer"
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
