export const Tab = ({ active, erroring, label, ...props }) => (
  <button
    className={`${erroring && "bg-red-900 text-white"} ${
      active && "bg-gray-900 text-white"
    } px-3 py-2 rounded-md text-sm font-medium`}
    {...props}
  >
    {label}
  </button>
);
