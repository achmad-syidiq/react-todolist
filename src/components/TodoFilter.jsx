/* eslint-disable react/prop-types */

const TodoFilter = ({ filter, onFilterChange, isDropdownOpen, setIsDropdownOpen }) => {
  const dropdownText = () => {
    switch (filter) {
      case "all":
        return "All";
      case "completed":
        return "Completed";
      case "incompleted":
        return "Incompleted";
      default:
        return "";
    }
  };

  const handleFilterChange = (newFilter) => {
    onFilterChange(newFilter);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-right">
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md bg-white px-4 py-3 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
        id="menu-button"
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {dropdownText()}
        <svg
          className="-mr-1 size-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <div
          className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <button
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => handleFilterChange("all")}
            >
              All
            </button>
            <button
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => handleFilterChange("completed")}
            >
              Completed
            </button>
            <button
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => handleFilterChange("incompleted")}
            >
              Incompleted
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoFilter;
