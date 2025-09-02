import { Outlet } from "react-router-dom";
import Navbar from "./assets/components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
