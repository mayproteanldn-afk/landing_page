import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { waitlistSchema} from "./schemas/WaitlistSchema";
import type { WaitlistFormValues } from "./schemas/WaitlistSchema";

import { cn } from "../../lib/utils";
import { useEffect, useState } from "react";
import axios from "axios";

const WaitlistUpForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    mode: "onTouched",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<WaitlistFormValues> = async (data) => {
    setLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);
      console.log("onSubmit triggered with data:", data); // <-- aquí


    try {
      const response = await axios.post("http://localhost:8000/api/waitlist/", data);

      if (response.data?.status === "success" || response.status === 201) {
        setSuccessMessage("You've been successfully added to the waitlist.");
        reset(); // reset form
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error: any) {
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    if(errors){
        console.log(errors);
        
    }
  }, [])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="waitlistForm"
      className="w-full max-w-xl mx-auto p-6 sm:p-8 space-y-6"
    >
      {/* Mensaje de éxito */}
      {successMessage && (
        <div className="p-3 text-green-700 bg-green-100 border border-green-300 rounded">
          {successMessage}
        </div>
      )}

      {/* Mensaje de error */}
      {errorMessage && (
        <div className="p-3 text-red-700 bg-red-100 border border-red-300 rounded">
          {errorMessage}
        </div>
      )}

      {/* Input Email con botón */}
      <div className="relative w-full">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="email"
              placeholder="Enter your email"
              className={cn(
                "w-full px-4 sm:px-6 py-3 sm:py-4 pr-28 border rounded-full focus:outline-none focus:ring-2 text-gray-700 placeholder-gray-400 transition-all",
                errors.email
                  ? "border-red-400 focus:ring-red-300"
                  : "border-gray-300 focus:ring-gray-400"
              )}
            />
          )}
        />
        <button
          type="submit"
          disabled={!isValid || loading}
          className={cn(
            "absolute right-2 top-2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold transition-colors duration-300 text-sm sm:text-base",
            loading
              ? "bg-gray-500 cursor-not-allowed text-white"
              : !isValid
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-[#0E172B] hover:bg-[#1A2540] text-white"
          )}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin">↻</span>
              ...
            </span>
          ) : (
            "Join"
          )}
        </button>
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
    </form>
  );
};

export default WaitlistUpForm;
