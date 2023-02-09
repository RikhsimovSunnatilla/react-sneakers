import AddIcon from '../../Icons/AddIcon';
import CheckIcon from '../../Icons/CheckIcon';

interface AddButtonProps {
  isAdded: boolean;
}

function AddButton({ isAdded }: AddButtonProps) {
  return (
    <button
      className={`ml-2 flex h-8 w-8 items-center justify-center rounded-lg ${
        isAdded ? 'bg-gradient-to-b from-green-300 to-green-500' : 'border border-gray-200 bg-white hover:bg-gray-100'
      }`}>
      {isAdded ? <CheckIcon className="h-3 w-3" /> : <AddIcon className="h-3 w-3 [&>path]:fill-gray-300" />}
    </button>
  );
}

export default AddButton;
