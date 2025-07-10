import React, { useState } from "react";
import Spinner from "../../components/Spinner";

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500); // Simulate loading
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <form onSubmit={handleLogin} className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-bold mb-2">Sign in</h1>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input type="password" className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors" disabled={loading}>
          {loading ? <Spinner /> : "Sign in"}
        </button>
        <button type="button" className="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-neutral-700 py-2 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors">
          <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.1 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 3l6.1-6.1C34.5 6.5 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 20-9 20-20 0-1.3-.1-2.7-.5-4z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.5 16.1 19.4 13 24 13c3.1 0 5.9 1.1 8.1 3l6.1-6.1C34.5 6.5 29.6 4 24 4c-7.2 0-13.3 4.1-16.7 10.7z"/><path fill="#FBBC05" d="M24 44c5.6 0 10.5-1.9 14.3-5.1l-6.6-5.4C29.7 35.5 27 36.5 24 36.5c-6.1 0-10.7-2.9-13.7-7.1l-7 5.4C7.1 39.9 14.9 44 24 44z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.6 4.1-6.1 7.5-11.7 7.5-6.1 0-10.7-2.9-13.7-7.1l-7 5.4C7.1 39.9 14.9 44 24 44c11 0 20-9 20-20 0-1.3-.1-2.7-.5-4z"/></g></svg>
          Continue with Google
        </button>
        <div className="text-right">
          <a href="/login/forgot" className="text-blue-600 hover:underline text-sm">Forgot password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login; 