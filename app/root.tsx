import { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";

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

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen">
        <section className="container mx-auto  p-6 lg:p-4">
          <div className="bg-gray-50 border-dashed border-2 border-gray-400 w-full h-28 pt-2 flex justify-center items-center">
            publicidade
          </div>
        </section>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <section className="container mx-auto  p-6 lg:p-4">
          <div className="bg-gray-50 border-dashed border-2 border-gray-400 w-full h-28 pt-2 flex justify-center items-center">
            publicidade
          </div>
        </section>
      </body>
    </html>
  );
}
