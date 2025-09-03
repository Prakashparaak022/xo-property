const Logo = ({ color = "black", size = 60 }) => {
  console.log("size : ", size);
  
  return (
    <img
      src="/knmg.svg"
      alt="logo"
      className={`w-auto h-[60px] md:h-[60px]`}
    />
  );
};

export default Logo;
