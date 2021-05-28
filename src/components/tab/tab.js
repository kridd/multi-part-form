export const Tab = ({ active, erroring, label, ...props }) => (
  <button
    className={`${erroring && "bg-red-900 text-white"} ${
      active && "bg-gray-900 text-white"
    } ${
      props.disabled && "bg-gray-200 text-gray-800 cursor-not-allowed"
    } px-6 py-2 rounded-md text-sm font-medium border`}
    {...props}
  >
    {label}
  </button>
);
