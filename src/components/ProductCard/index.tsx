import AddIcon from '../Icons/AddIcon';

import productImg from '../../assets/images/sneakers/1.jpg';

function ProductCard() {
  return (
    <div className="w-56 rounded-3xl border border-solid border-gray-300 bg-white px-8 pt-5 pb-8">
      <img src={productImg} width={133} height={12} alt={'Title'} />
      <div className="my-3 text-sm font-normal text-black">Мужские Кроссовки Nike Blazer Mid Suede</div>
      <div className="flex">
        <div className="flex flex-col">
          <span className="text- text-xs font-normal">Цена:</span>
          <b>12 999 руб.</b>
        </div>

        <button>
          <AddIcon />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
