import React, { useState } from "react";

interface Props {
  src: string;
}

const Image: React.FC<Props> = ({ src }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        onClick={() => setModalIsOpen(true)}
        className="rounded-lg cursor-pointer"
      />
      {modalIsOpen && (
        <div className="absolute inset-0 flex items-center justify-center p-4 bg-gray-900 bg-opacity-50">
          <div className="relative p-6 bg-white rounded-lg">
            <h2 className="text-lg font-medium mb-4">Image Options</h2>
            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={() => alert("Replace Image")}
              >
                Replace
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                onClick={() => alert("Delete Image")}
              >
                Delete
              </button>
            </div>
            <button
              className="absolute top-0 right-0 p-2 text-gray-800"
              onClick={() => setModalIsOpen(false)}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Image;
