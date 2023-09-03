import * as elements from 'typed-html';

const TextFooter = () => {
  return (
    <form
      _="on submit target.reset()"
      class="fixed flex bottom-0 right-0 justify-center items-center px-4 z-50 mb-0"
      style="height: 80px; background-color: #F6F6F6; width: calc(100% - 350px);"
      ws-send
    >
      <input
        class="rounded-full px-6 py-3 border-none w-full"
        name="chatMessage"
        placeholder="Search or start a new chat"
        type="text"
      />
    </form>
  );
};

export default TextFooter;
