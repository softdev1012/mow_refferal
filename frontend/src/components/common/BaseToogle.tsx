import { IBaseToogleProps } from "../../types";
import { useState } from "react";


const BaseToogle: React.FC<IBaseToogleProps> = ({ register, status }) => {
  const [isChecked, setIsChecked] = useState(register(status));

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer me-5">
      <input
        type="checkbox"
        {...register(status)}
        className="sr-only peer"
        onChange={handleToggle}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
      <span className="text-sm font-medium text-gray-500 ms-3 dark:text-gray-300">
        {isChecked ? "Inactive" : "Active"}
      </span>
    </label>
  );
};

export default BaseToogle;
