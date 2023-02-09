import HeartFilledIcon from '../../Icons/HeartFilledIcon';
import HeartOutlinedIcon from '../../Icons/HeartOutlinedIcon';

interface SaveButtonProps {
  isSaved: boolean;
}

function SaveButton({ isSaved }: SaveButtonProps) {
  return (
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
  );
}

export default SaveButton;
