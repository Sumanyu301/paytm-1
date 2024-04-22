import React from "react";

const InputBox = ({ label, placeholder, onPress }) => {
  return (
    <div>
      <div>
        <label
          htmlFor="UserEmail"
          className="block text-s font-medium text-gray-900 mt-3"
        >
          {" "}
          {label}{" "}
        </label>

        <input
          onChange={onPress}
          type="email"
          id="UserEmail"
          placeholder={placeholder}
          className="mt-1 w-full rounded-md border-gray-700 shadow-md sm:text-sm h-7 p-2"
        />
      </div>
    </div>
  );
};

export default InputBox;
