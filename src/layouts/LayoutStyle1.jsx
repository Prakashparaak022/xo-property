import Footer from "./footer";
import HeaderStyle1 from "./HeaderStyle1";

const LayoutStyle1 = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <HeaderStyle1 />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default LayoutStyle1;
