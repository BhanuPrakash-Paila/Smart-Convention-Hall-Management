"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    const endpoint =
      mode === "login" ? "/api/auth/login" : "/api/auth/register";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();
    if (!response.ok) {
      setError(data.error || "Authentication failed");
      return;
    }

    router.push("/admin");
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-3xl flex-col rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl">
        <div className="flex gap-3">
          <button
            onClick={() => setMode("login")}
            className={`rounded-full px-4 py-2 ${mode === "login" ? "bg-cyan-500 text-slate-950" : "bg-slate-800 text-slate-200"}`}
          >
            Login
          </button>
          <button
            onClick={() => setMode("register")}
            className={`rounded-full px-4 py-2 ${mode === "register" ? "bg-cyan-500 text-slate-950" : "bg-slate-800 text-slate-200"}`}
          >
            Register
          </button>
        </div>

        <form onSubmit={submit} className="mt-8 space-y-4">
          {mode === "register" ? (
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3"
              placeholder="Full name"
            />
          ) : null}
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3"
            placeholder="Email"
          />
          <input
            required
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3"
            placeholder="Password"
          />
          {error ? <p className="text-sm text-rose-400">{error}</p> : null}
          <button
            type="submit"
            className="w-full rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950"
          >
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}
