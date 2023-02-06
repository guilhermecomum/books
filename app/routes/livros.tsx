import { Outlet } from "@remix-run/react";

export default function BooksPage() {
  return (
    <div className="flex">
      <Outlet />
    </div>
  );
}
