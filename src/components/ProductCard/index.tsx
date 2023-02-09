import SaveButton from './SaveButton';
import AddButton from './AddButton';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}

function ProductCard({ id, title, price, imageUrl }: ProductCardProps) {
  const isSaved = false;
  const isAdded = false;

  return (
    <div className="relative w-56 rounded-3xl border border-solid border-gray-200 bg-white px-8 pt-5 pb-8 transition-all hover:-translate-y-1 hover:shadow-lg">
      <SaveButton isSaved={isSaved} />

      <img src={imageUrl} width={133} height={112} alt={title} />
      <div className="my-3 text-sm font-normal text-black">{title}</div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs font-normal uppercase text-gray-400">Цена:</span>
          <b className="text-sm font-bold text-black">{price} сум</b>
        </div>

        <AddButton isAdded={isAdded} />
      </div>
    </div>
  );
}

export default ProductCard;
