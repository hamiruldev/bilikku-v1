import React, { useState } from "react";
import Spinner from "../../components/Spinner";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-bold mb-2">Forgot Password</h1>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors" disabled={loading || sent}>
          {loading ? <Spinner /> : sent ? "Email Sent!" : "Send Reset Link"}
        </button>
        <div className="text-right">
          <a href="/login" className="text-blue-600 hover:underline text-sm">Back to login</a>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword; 