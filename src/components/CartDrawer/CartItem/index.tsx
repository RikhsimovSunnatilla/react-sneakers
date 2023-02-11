import IconButton from '../../IconButton';
import AddIcon from '../../Icons/AddIcon';

interface CartItemProps {}

function CartItem({}: CartItemProps) {
  return (
    <div className="mb-5 flex items-center rounded-2xl border border-solid border-gray-200 bg-white py-7 px-5">
      <img className="mr-5" src={'images/sneakers/1.jpg'} width={70} height={70} alt="NAME" />
      <div className="flex flex-col">
        <div className="mb-2 text-sm font-normal text-black">Мужские Кроссовки Nike Air Max 270</div>
        <span className=" text-sm font-bold text-black">12 999 руб.</span>
      </div>
      <IconButton className="ml-3 flex-shrink-0 flex-grow basis-auto">
        <AddIcon className="rotate-45" />
      </IconButton>
    </div>
  );
}

export default CartItem;
