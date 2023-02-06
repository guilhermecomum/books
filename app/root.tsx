import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import { getUser } from "./session.server";
import { Topbar } from "./components/topbar";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "icon", href: "/book_head-300x300.png", sizes: "32x32" },
    { rel: "icon", href: "/book_head-300x300.png", sizes: "192x192" },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Guia de Estudos",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen">
        <Topbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <div className="mt-auto bg-blue-100 flex flex-col lg:flex-row space-y-8 text-center lg:space-y-0 lg:text-left justify-between py-8 items-center px-8"></div>
      </body>
    </html>
  );
}
