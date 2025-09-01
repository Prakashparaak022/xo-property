import Footer from "./Footer";
import HeaderStyle2 from "./HeaderStyle2";

const LayoutStyle2 = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <HeaderStyle2 />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default LayoutStyle2;
