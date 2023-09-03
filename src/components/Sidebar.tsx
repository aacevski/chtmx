import ChatCard from './ChatCard';
import * as elements from 'typed-html';

const Sidebar = () => {
  return (
    <div
      class="h-screen flex flex-col gap-2 overflow-y-auto px-5"
      style="width: 350px; background: #F5FAFC"
    >
      <input
        class="rounded-full px-6 py-3 border-none mt-4 mb-2"
        placeholder="Search or start a new chat"
        style="border: 1px solid #D1E4E8"
        type="text"
      />
      <div class="flex items-center justify-between mb-6">
        <button
          class="text-sm font-medium px-6 py-3 rounded-s-lg border-none"
          style="background: #128C7E; color: white; height: 48px;"
          type="submit"
        >
          Favorites
        </button>
        <button
          class="text-sm font-medium px-6 py-3  border-none"
          style="background: #FFFFFF; height: 48px;"
          type="submit"
        >
          Friends
        </button>
        <button
          class="text-sm font-medium px-6 py-3 rounded-e-lg border-none"
          style="background: #FFFFFF; height: 48px;"
          type="submit"
        >
          Groups
        </button>
      </div>
      {Array.from({ length: 20 }).map(() => (
        <ChatCard />
      ))}
    </div>
  );
};

export default Sidebar;
