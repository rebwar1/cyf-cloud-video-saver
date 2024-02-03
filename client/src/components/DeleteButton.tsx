import React from "react";
import classNames from "classnames";

interface DeleteButtonProps {
  handleDelete: (id: string) => void;
  id: string;
  className?: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
  handleDelete,
  id,
  className = "",
}) => {
  const handleClick = () => handleDelete(id);

  return (
    <button
      onClick={handleClick}
      className={classNames(
        "rounded-md bg-gray-500 px-4 py-2 font-bold text-white transition duration-300 ease-in-out hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-50",
        className,
      )}
    >
      Delete ❌
    </button>
  );
};

export default DeleteButton;
