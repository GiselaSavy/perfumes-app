import perfumes from "../data/perfumes";
import ProductCard from "../components/ProductCard";

function PerfumesFemeninos() {
  const femeninos = perfumes.filter(p => p.tipo === "femenino");

  return (
    <div className="grid">
      {femeninos.map(p => (
        <ProductCard key={p.id} perfume={p} />
      ))}
    </div>
  );
}

export default PerfumesFemeninos;