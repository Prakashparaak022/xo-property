const Logo = ({ color = "black" }) => {
  return (
    <div className={`flex flex-col items-center justify-center text-${color} font-bold`}>
      <div className="flex text-3xl md:text-4xl tracking-wide">
        <span className="mr-2">K</span>
        <span className="mr-2">N</span>
        <span className="mr-2">M</span>
        <span>G</span>
      </div>
      <span className="text-xs md:text-xs font-normal tracking-[0.35em] md:tracking-[0.55em] uppercase leading-none">
        Properties
      </span>
    </div>
  );
};

export default Logo;
