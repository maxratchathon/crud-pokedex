import React, { useState } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";

const DeleteModal = ({ onCloseModal, pokemon }) => {
  const router = useRouter();
  async function onDelete() {
    try {
      console.log("pokemon id:", pokemon._id);
      const response = await axios.delete(
        `http://localhost:8000/api/pokemon/${pokemon._id}`
      );
      console.log(`sent delete request with id: ${pokemon._id}`);
      router.refresh();
    } catch (error) {
      console.log("PokemonCard error: ", error);
    }
  }

  return (
    <>
      <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div className="relative w-full max-w-md p-6 bg-white rounded-md shadow-lg">
          <div className="my-8 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline w-16 fill-red-500"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                data-original="#000000"
              />
              <path
                d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                data-original="#000000"
              />
            </svg>
            <h4 className="mt-6 text-xl font-semibold">
              Are you sure you want to delete this Pokemon?
            </h4>
            <p className="mt-4 text-sm text-gray-500">
              This pokemon will be permarnently delete from the database.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <button
              type="button"
              className="px-6 py-2.5 rounded-md text-white text-sm font-semibold border-none outline-none bg-red-500 hover:bg-red-600 active:bg-red-500"
              onClick={onDelete}
            >
              Delete
            </button>
            <button
              type="button"
              className="px-6 py-2.5 rounded-md text-black text-sm font-semibold border-none outline-none bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
              onClick={onCloseModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
