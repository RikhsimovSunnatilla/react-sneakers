import Header from './Header';
import ProductCard from '../../components/ProductCard';

function Home() {
  return (
    <div className="px-11 py-9">
      <Header />

      <div className="grid grid-cols-4 gap-9">
        {Array.from({ length: 10 })
          .fill(null)
          .map((_, i) => (
            <ProductCard key={i} />
          ))}
      </div>
    </div>
  );
}

export default Home;
