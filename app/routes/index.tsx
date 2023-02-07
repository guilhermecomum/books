import { Link, useLoaderData } from "@remix-run/react";
import { json, LoaderArgs } from "@remix-run/server-runtime";
import { Books } from "~/books.json";

export async function loader({ request }: LoaderArgs) {
  return json({ books: Books });
}

const slugify = (text) => {
  return text
    .toString() // Cast to string (optional)
    .normalize("NFKD") // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\_/g, "-") // Replace _ with -
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/\-$/g, ""); // Remove trailing -
};

export default function Index() {
  const { books } = useLoaderData<typeof loader>();

  return (
    <main className="relative bg-white flex flex-col mt-8">
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
            {books.map(({ name, author }) => (
              <Link
                to={`/livros/${slugify(name)}`}
                className="flex flex-col mt-10 w-28"
              >
                <img className="w-28 grayscale" src="/capa.jpg" />
                <p className="text-lg text-gray-900 mt-4">{name}</p>
                <p className="mt-2 block text-gray-500">{author}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
