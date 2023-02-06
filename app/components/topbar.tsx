import { Link, NavLink } from "@remix-run/react";

function Topbar() {
  return (
    <header className="flex lg:flex-row flex-col py-2 lg:py-4 justify-center items-center bg-blue-50">
      <div className="container mx-auto flex w-full justify-center lg:justify-start items-center lg:px-4 px-6">
        <Link to="/" className="flex items-center">
          <img className="pr-4 h-10" src="/book_head.png" />
          <h1 className="text-2xl pt-1 font-bold text-blue-500">
            Guia De Estudo
          </h1>
        </Link>
      </div>
    </header>
  );
}

export { Topbar };
