import React from "react";

interface Props {
  onCheckBoxChange: (selectedGender: string) => void;
  selectedGender: string;
}

const GenderCheckbox: React.FC<Props> = ({
  onCheckBoxChange,
  selectedGender,
}) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="ml-48 text-2xl text-gray-500">Male</span>
          <input
            type="checkbox"
            className="ml-2 border-slate-900 size-5"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="ml-4 text-2xl text-gray-500">Female</span>
          <input
            type="checkbox"
            className="ml-2 border-slate-900 size-5"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
