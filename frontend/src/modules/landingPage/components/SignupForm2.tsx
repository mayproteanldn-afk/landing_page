// frontend/src/modules/landingPage/components/SignupForm2.tsx

import { useState } from "react";

const API_BASE = "https://monkfish-app-9g9ua.ondigitalocean.app";

type SignupSource = "homepage" | "wellness_drive" | (string & {});

export default function SignupForm({
  signupSource,
  buttonLabel = "Get me in",
  headline,
}: {
  signupSource?: SignupSource; // optional (auto-detects by URL)
  buttonLabel?: string;
  headline?: string;
}) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    setStatus("loading");
    setMessage("");

    // ✅ Auto-detect based on URL path
    const pathname = window.location.pathname.toLowerCase();
    const detectedSource: SignupSource = pathname.includes("thewellnessdrive")
      ? "wellness_drive"
      : "homepage";

    // If prop exists, use it — but wellness drive detection always wins
    const finalSource: SignupSource = pathname.includes("thewellnessdrive")
      ? "wellness_drive"
      : signupSource || detectedSource;

    try {
      const res = await fetch(`${API_BASE}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          email,
          attributes: {
            // ✅ MUST be uppercase key
            SIGNUP_SOURCE: finalSource,
          },
          signupSource: finalSource,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong");
      }

      setStatus("success");
      setMessage("You’re on the list ✅");
      setFirstName("");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Couldn’t sign you up — try again.");
    }
  };

  return (
    <div>
      {headline ? (
        <p className="italic text-lg md:text-[17px] xl:text-xl mb-6">
          {headline}
        </p>
      ) : null}

      <div className="flex flex-col sm:flex-row items-center md:items-stretch justify-center md:justify-start gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          aria-label="First name"
          autoComplete="given-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="flex-1 w-full px-6 py-4 rounded-full border border-transparent
                     focus:outline-none focus:ring-2 focus:ring-gray-300
                     [background-color:#FFFCF3] [color:#4B2C1A] [placeholder-color:#A06C4D]"
        />

        <input
          type="email"
          placeholder="Email"
          aria-label="Email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 w-full px-6 py-4 rounded-full border border-transparent
                     focus:outline-none focus:ring-2 focus:ring-gray-300
                     [background-color:#013220] [color:#FFFCF3] [placeholder-color:#FFFCF3]"
        />

        <button
          type="button"
          onClick={handleSubscribe}
          disabled={status === "loading"}
          className="px-6 py-4 rounded-full border-2 [border-color:#4B2C1A]
                     [background-color:#FFFCF3] [color:#4B2C1A] font-semibold
                     hover:[background-color:#e9e2d1] transition-colors
                     disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Adding..." : buttonLabel}
        </button>
      </div>

      {message && (
        <p className="mt-3 text-sm text-[#4B2C1A] opacity-80">{message}</p>
      )}
    </div>
  );
}
