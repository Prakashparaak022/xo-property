const Logo = ({ color = "black" }) => {
  return (
    <div className="flex items-center justify-center text-white font-bold text-5xl">
      <span className={`text-${color} mr-2`}>K</span>
      <span className={`text-${color} mr-2`}>N</span>
      <span className={`text-${color} mr-2`}>M</span>
      <span className={`text-${color}`}>G</span>
    </div>
  );
};

export default Logo;
