import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

import Header from './Header';
import ProductCard from '../../components/ProductCard';
import Skeleton from '../../components/ProductCard/Skeleton';

import { Product } from '../../types/Product.1';

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);

      try {
        const res = await axios.get(`${process.env.REACT_APP_PUBLIC_URL}/products`);

        setProducts(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const productCards = useMemo(
    () => products.map((product) => <ProductCard key={product.id} {...product} />),
    [products],
  );
  const skeletons = useMemo(() => [...new Array(12)].map((_, i) => <Skeleton key={i} />), []);

  return (
    <div className="px-11 py-9">
      <Header />

      <div className="grid grid-cols-4 gap-9">{isLoading ? skeletons : productCards}</div>
    </div>
  );
}

export default Home;
