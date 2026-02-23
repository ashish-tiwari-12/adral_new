import { Outlet } from "react-router";
import { Header } from "./Header";

export function Root() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
}
