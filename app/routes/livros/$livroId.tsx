export default function BooksDetailsPage() {
  return (
    <div className="container flex flex-col lg:flex-row mx-auto p-6 lg:p-4">
      <div className="flex flex-col flex-1">
        <h2 className="text-3xl text-rgay-900">
          É assim que começa (Vol. 2 É assim que acaba)
        </h2>
        <p className="text-xl mt-2 block text-gray-500">Colleen Hoover</p>
        <hr className="my-4" />

        <h3 className="text-2xl text-gray-900">Resumo</h3>
        <p className="pt-4">
          Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna
          nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Nullam
          volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non
          consequat odio.Casamentiss faiz malandris se pirulitá.Interagi no mé,
          cursus quis, vehicula ac nisi.
        </p>
        <p className="pt-4">
          Quem num gosta di mé, boa gentis num é.A ordem dos tratores não altera
          o pão duris.Paisis, filhis, espiritis santis.Si u mundo tá muito
          paradis? Toma um mé que o mundo vai girarzis!
        </p>
        <p className="pt-4">
          Leite de capivaris, leite de mula manquis sem cabeça.Interagi no mé,
          cursus quis, vehicula ac nisi.Quem num gosta di mim que vai caçá sua
          turmis!Mauris nec dolor in eros commodo tempor. Aenean aliquam
          molestie leo, vitae iaculis nisl.
        </p>
        <p className="pt-4">
          Casamentiss faiz malandris se pirulitá.Posuere libero varius. Nullam a
          nisl ut ante blandit hendrerit. Aenean sit amet nisi.Vehicula non. Ut
          sed ex eros. Vivamus sit amet nibh non tellus tristique
          interdum.Praesent malesuada urna nisi, quis volutpat erat hendrerit
          non. Nam vulputate dapibus.
        </p>
      </div>
      <div className="flex flex-col md:w-full lg:w-96 lg:ml-28 mt-6 lg:mt-0">
        <img className="md:w-full w-96 grayscale" src="/capa.jpg" />
        <a className="bg-gray-900 text-white mt-10 p-3 rounded w-auto inline-block text-center">
          Compar agora na Amazon
        </a>
      </div>
    </div>
  );
}
