function formatarPreco(valor) {
  return Number(valor).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

export default function ProductCard({ product, onViewDetails }) {
  return (
    <article className="product-card">
      <h2>{product.nome}</h2>
      <p className="categoria">{product.categoria}</p>
      <strong>{formatarPreco(product.preco)}</strong>
      <button type="button" onClick={() => onViewDetails(product.id)}>
        Ver detalhes
      </button>
    </article>
  );
}
