interface PriceItemProps {
  title: string;
  price: number;
}

function PriceItem({ title, price }: PriceItemProps) {
  return (
    <div className="mb-5 flex items-end">
      <span className="text-base font-normal text-black">{title}:</span>
      <span className="mx-2 mb-1 flex-1 border-b border-dashed border-gray-300" />
      <span className="text-base font-semibold text-black">{price} руб.</span>
    </div>
  );
}

export default PriceItem;
