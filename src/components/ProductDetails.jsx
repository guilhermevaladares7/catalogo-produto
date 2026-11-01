function formatarPreco(valor) {
  return Number(valor).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

export default function ProductDetails({ product, loading, error, onClose }) {
  let conteudo = null;

  if (loading) {
    conteudo = <p role="status">Carregando detalhes...</p>;
  } else if (error) {
    conteudo = <p role="alert" className="error">{error}</p>;
  } else if (product) {
    conteudo = (
      <>
        <h2>{product.nome}</h2>
        <p>Categoria: {product.categoria}</p>
        <p>{product.descricao}</p>
        <p>Preço: {formatarPreco(product.preco)}</p>
        <p className="id-produto">id: {product.id}</p>
      </>
    );
  }

  return (
    <section className="product-details" aria-label="Detalhes do produto">
      <button type="button" onClick={onClose}>Fechar detalhes</button>
      {conteudo}
    </section>
  );
}
