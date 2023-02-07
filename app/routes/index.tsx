import { Link, useLoaderData } from "@remix-run/react";
import { json, LoaderArgs } from "@remix-run/server-runtime";
import { Books } from "~/books.json";

export async function loader({ request }: LoaderArgs) {
  return json({ books: Books });
}

export default function Index() {
  const { books } = useLoaderData<typeof loader>();

  return (
    <main className="relative bg-white flex flex-col mt-8">
      <section className="container mx-auto ">
        <div className="bg-gray-50 border-dashed border-2 border-gray-400 w-full h-28 pt-2 flex justify-center items-center">
          publicidade
        </div>
      </section>
      <section className="w-full mt-10 lg:h-96 flex items-center bg-gray-200">
        <div className="container mx-auto flex items-center p-6">
          <h1 className="w-3/6 text-6xl text-grey-900">
            Descubra novos mundos com nossos <strong>resumos de livros</strong>
          </h1>
        </div>
      </section>
      <section className="w-full my-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl text-gray-900">Adicionados recentemente</h3>
          <div className="flex space-x-4">
            {books.map(({ Name, Author }) => (
              <Link to="/livros/blah" className="flex flex-col mt-10 w-28">
                <img className="w-28 grayscale" src="/capa.jpg" />
                <p className="text-lg text-gray-900 mt-4">{Name}</p>
                <p className="mt-2 block text-gray-500">{Author}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
