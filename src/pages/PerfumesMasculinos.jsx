import perfumes from "../data/perfumes";
import ProductCard from "../components/ProductCard";

function PerfumesMasculinos() {
  const masculinos = perfumes.filter(p => p.tipo === "masculino");

  return (
    <div className="grid">
      {masculinos.map(p => (
        <ProductCard key={p.id} perfume={p} />
      ))}
    </div>
  );
}

export default PerfumesMasculinos;