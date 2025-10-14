const Logo = ({ color = "black", size = 60 }) => {  
  return (
    <img
      src="/knmg.svg"
      alt="logo"
      className={`w-auto h-[60px] md:h-[60px]`}
    />
  );
};

export default Logo;
