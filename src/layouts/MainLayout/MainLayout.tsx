import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return <div className="h-screen flex flex-col">
    {/* Header */}
    <div className="mt-8">
        <Outlet />
    </div>
    {/* Footer */}
  </div>;
};

export default MainLayout;
