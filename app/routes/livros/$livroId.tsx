import { useLoaderData } from "@remix-run/react";
import { json, LoaderArgs } from "@remix-run/server-runtime";
import { Books } from "~/books.json";

export async function loader({ request }: LoaderArgs) {
  return json({ books: Books[0] });
}

export default function BooksDetailsPage() {
  const { books } = useLoaderData<typeof loader>();
  const {
    name,
    author,
    book_url,
    sinopse,
    author_style,
    trama_personagens,
    author_obras_relation,
    analise_tematica,
    consideracoes_finais,
  } = books;
  return (
    <div className="container flex flex-col lg:flex-row mx-auto p-6 lg:p-4">
      <div className="flex flex-col flex-1">
        <h2 className="text-3xl text-rgay-900">{name}</h2>
        <p className="text-xl mt-2 block text-gray-500">{author}</p>
        <hr className="my-4" />

        <h3 className="text-2xl text-gray-900 font-semibold">Sinópse</h3>
        <p className="pt-2">{sinopse}</p>

        <h3 className="text-2xl text-gray-900 mt-8 font-semibold">
          Análise da trama e dos personagens
        </h3>
        <p className="pt-2">{trama_personagens}</p>

        <h3 className="text-2xl text-gray-900 mt-8 font-semibold">
          Discussão sobre a escrita e estilo do autor
        </h3>
        <p className="pt-2">{author_style}</p>

        <h3 className="text-2xl text-gray-900 mt-8 font-semibold">
          Comparação com outras obras do mesmo gênero ou do autor
        </h3>
        <p className="pt-2">{author_obras_relation}</p>

        <h3 className="text-2xl text-gray-900 mt-8 font-semibold">
          Análise temática e simbólica
        </h3>
        <p className="pt-2">{analise_tematica}</p>
        <h3 className="text-2xl text-gray-900 mt-8 font-semibold">
          Considerações finais e recomendação de leitura
        </h3>
        <p className="pt-2">{consideracoes_finais}</p>
      </div>

      <div className="flex flex-col md:w-full lg:w-96 lg:ml-28 mt-6 lg:mt-0">
        <img className="md:w-full w-96 grayscale" src="/capa.jpg" />
        <a
          className="bg-gray-900 text-white mt-10 p-3 rounded w-auto inline-block text-center"
          href={book_url}
          target="_blank"
        >
          Compar agora na Amazon
        </a>
      </div>
    </div>
  );
}
