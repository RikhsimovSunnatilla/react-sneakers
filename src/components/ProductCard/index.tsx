import Skeleton from './Skeleton';
import HeartOutlinedIcon from '../Icons/HeartOutlinedIcon';
import HeartFilledIcon from '../Icons/HeartFilledIcon';
import AddIcon from '../Icons/AddIcon';
import CheckIcon from '../Icons/CheckIcon';

import productImg from '../../assets/images/sneakers/1.jpg';

function ProductCard() {
  const isLoading = true;
  const isSaved = false;
  const isAdded = false;

  // if (isLoading) {
  //   return <Skeleton />;
  // }

  return (
    <div className="relative w-56 rounded-3xl border border-solid border-gray-200 bg-white px-8 pt-5 pb-8 transition-all hover:-translate-y-1 hover:shadow-lg">
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <button
            className={`absolute top-6 left-8 flex h-8 w-8 items-center justify-center rounded-lg ${
              isSaved ? 'bg-red-100' : 'border border-gray-200 bg-white hover:bg-gray-100'
            }`}>
            {isSaved ? (
              <HeartFilledIcon className="h-4 w-4 fill-red-500" />
            ) : (
              <HeartOutlinedIcon className="h-4 w-4 [&>path]:fill-gray-300" />
            )}
          </button>

          <img src={productImg} width={133} height={12} alt={'Title'} />
          <div className="my-3 text-sm font-normal text-black">Мужские Кроссовки Nike Blazer Mid Suede</div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-normal uppercase text-gray-400">Цена:</span>
              <b className="text-sm font-bold text-black">12 999 руб.</b>
            </div>

            <button
              className={`ml-2 flex h-8 w-8 items-center justify-center rounded-lg ${
                isAdded
                  ? 'bg-gradient-to-b from-green-300 to-green-500'
                  : 'border border-gray-200 bg-white hover:bg-gray-100'
              }`}>
              {isAdded ? <CheckIcon className="h-3 w-3" /> : <AddIcon className="h-3 w-3 [&>path]:fill-gray-300" />}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductCard;
