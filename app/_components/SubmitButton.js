"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ pendingLabel, children }) {
  // useFormStatus hook can only be called in a component that's rendered inside of a form
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="px-8 py-4 font-semibold transition-all bg-accent-500 text-primary-800 hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
