import CartItem from './CartItem';
import PriceItem from './PriceItem';
import Button from '../Button';
import IconButton from '../IconButton';
import AddIcon from '../Icons/AddIcon';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  return (
    <div className={`fixed inset-0 z-10 transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-all duration-200 ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 flex h-full w-100 flex-col overflow-y-auto bg-white p-8 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-100'
        }`}>
        <div className="mb-8 flex items-center justify-between">
          <h3 className="mr-2 text-2xl font-bold text-black">Корзина</h3>
          <IconButton onClick={onClose}>
            <AddIcon className="rotate-45" />
          </IconButton>
        </div>

        <div>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="mt-auto">
          <PriceItem title="Итого" price={21498} />
          <PriceItem title="Налог 5%" price={1074} />

          <Button className="mt-1 w-full">Оформить заказ</Button>
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;
