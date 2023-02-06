import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="relative bg-white flex flex-col mt-8">
      <section className="container mx-auto ">
        <div className="bg-gray-50 border-dashed border-2 border-gray-400 w-full h-28 pt-2 flex justify-center items-center">
          publicidade
        </div>
      </section>
      <section className="w-full mt-10 lg:h-96 flex items-center bg-blue-100">
        <div className="container mx-auto flex items-center">
          <h1 className="w-3/6 text-6xl text-blue-800">
            Descubra novos mundos com nossos <strong>resumos de livros</strong>
          </h1>
        </div>
      </section>
      <section className="w-full my-20">
        <div className="container mx-auto ">
          <h3 className="text-3xl text-blue-800">Adicionados recentemente</h3>
          <Link to="/livros/blah" className="flex flex-col mt-10 w-28">
            <img className="w-28" src="/capa.jpg" />
            <p className="text-lg text-blue-900 mt-4">
              É assim que começa (Vol. 2 É assim que acaba)
            </p>
            <p className="mt-2 block text-gray-500">Colleen Hoover</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
