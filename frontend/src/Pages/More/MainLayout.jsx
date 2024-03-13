import { Outlet } from "react-router-dom";
// import Footer from "../../assets/Component/Footer";
// import Navbar from "../../assets/Component/Navbar";
// Main Layout used as a template so that Navbar and Footer can be called once but be used in every page
const MainLayout = () => {

  return (
    <div className="">
      {/* <Navbar/> */}
      <div className="py-0">
        <Outlet />
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default MainLayout;