// frontend/src/modules/landingPage/components/SignupForm2.tsx

import { useState } from "react";

const API_BASE = "https://monkfish-app-9g9ua.ondigitalocean.app";

type SignupSource = "homepage" | "wellness_drive" | (string & {});

export default function SignupForm({
  signupSource,
  buttonLabel = "Get me in",
  headline,
}: {
  signupSource?: SignupSource;
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

    // ✅ Auto-detect page
    const pathname = window.location.pathname.toLowerCase();

    const finalSource: SignupSource = pathname.includes("thewellnessdrive")
      ? "wellness_drive"
      : signupSource || "homepage";

    try {
      const res = await fetch(`${API_BASE}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          email,
          attributes: {
            SIGNUP_SOURCE: finalSource, // ✅ Brevo attribute (case-sensitive)
          },
          signupSource: finalSource, // ✅ backup / backend compatibility
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
      {headline && (
        <p className="italic text-lg md:text-[17px] xl:text-xl mb-6">
          {headline}
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-center md:items-stretch justify-center md:justify-start gap-4">
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="flex-1 w-full px-6 py-4 rounded-full
                     [background-color:#FFFCF3] [color:#4B2C1A]"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 w-full px-6 py-4 rounded-full
                     [background-color:#013220] [color:#FFFCF3]"
        />

        <button
          onClick={handleSubscribe}
          disabled={status === "loading"}
          className="px-6 py-4 rounded-full border-2
                     [border-color:#4B2C1A] [background-color:#FFFCF3]"
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
