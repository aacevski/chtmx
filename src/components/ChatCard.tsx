import * as elements from 'typed-html';

const ChatCard = () => {
  return (
    <div
      class="flex w-full mb-4"
      style="height: 60px;"
    >
      <img
        src="https://avatars.githubusercontent.com/u/44305048?v=4"
        style="width: 60px; height: 60px; border-radius: 8px"
      />
      <div
        class="flex h-full flex-col ml-4 justify-between flex-1 items-start"
        style="height: 60px"
      >
        <h1 class="font-medium text-lg">Andrej Acevski</h1>
        <p
          class="text-left text-sm text-ellipsis whitespace-nowrap overflow-hidden"
          style="color: 09132C; width: 180px;"
        >
          Yoooo!!
        </p>
      </div>
      <div>
        <p
          class="text-gray-500 text-right text-xs"
          style="color: #829C99"
        >
          5:14pm
        </p>
      </div>
    </div>
  );
};

export default ChatCard;
