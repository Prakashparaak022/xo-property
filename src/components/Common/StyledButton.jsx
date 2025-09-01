const StyledButton = ({ variant = "white-filled", children }) => {
  const baseClasses = "px-6 py-3 font-medium w-fit transition";

  let buttonClasses = "";

  switch (variant) {
    case "white-filled":
      buttonClasses = `bg-white text-black hover:bg-black hover:text-white ${baseClasses}`;
      break;
    case "black-filled":
      buttonClasses = `bg-black text-white hover:bg-white hover:text-black ${baseClasses}`;
      break;
    case "white-outlined":
      buttonClasses = `border-2 border-white text-white hover:bg-black hover:border-black hover:text-white ${baseClasses}`;
      break;
    case "black-outlined":
    default:
      buttonClasses = `border-2 border-black text-black hover:bg-black hover:text-white ${baseClasses}`;
      break;
  }

  return <button className={buttonClasses}>{children}</button>;
};

export default StyledButton;
