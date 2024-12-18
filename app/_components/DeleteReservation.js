"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteBooking } from "../_lib/actions";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

function DeleteReservation({ bookingId }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm("Delete this reservation?")) {
      startTransition(() => deleteBooking(bookingId));
    }
  };
  return (
    <button
      onClick={handleDelete}
      className="flex items-center flex-grow gap-2 px-3 text-xs font-bold uppercase transition-colors group text-primary-300 hover:bg-accent-600 hover:text-primary-900"
    >
      {!isPending ? (
        <>
          <TrashIcon className="w-5 h-5 transition-colors text-primary-600 group-hover:text-primary-800" />
          <span className="mt-1">Delete</span>
        </>
      ) : (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}

export default DeleteReservation;
