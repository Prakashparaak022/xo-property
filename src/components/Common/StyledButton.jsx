const StyledButton = ({ variant = "white-filled", children }) => {
  const baseClasses =
    "text-lg px-8 py-4 font-semibold w-full md:w-fit transition cursor-pointer";
  let buttonClasses = "";

  switch (variant) {
    case "white-filled":
      buttonClasses = `bg-white text-black hover-bg hover:text-white ${baseClasses}`;
      break;
    case "black-filled":
      buttonClasses = `bg-default text-white hover:bg-white hover:text-black ${baseClasses}`;
      break;
    case "white-outlined":
      buttonClasses = `border border-white text-white hover-bg hover:border-black hover:text-white ${baseClasses}`;
      break;
    case "black-outlined":
    default:
      buttonClasses = `border border-black text-black hover-bg hover:text-white ${baseClasses}`;
      break;
  }

  return <button className={buttonClasses}>{children}</button>;
};

export default StyledButton;
