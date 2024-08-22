import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
