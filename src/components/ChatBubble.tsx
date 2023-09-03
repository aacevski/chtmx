import * as elements from 'typed-html';

type ChatBubbleProps = {
  readonly content: string;
  readonly isMine: boolean;
};

const ChatBubble = ({ isMine, content }: ChatBubbleProps) => {
  return (
    <div
      class={`
      flex items-center px-6 py-2 ${isMine ? 'justify-start' : 'justify-end'}`}
      hx-swap="afterend"
      style="max-width: 100%;"
    >
      {isMine ? (
        <div
          class="flex"
          style="background: #FFF; border-radius: 12px; padding: 12px 16px;  width: fit-content; max-width: 45%;"
        >
          <p
            class="text-md whitespace-pre-line text-left"
            style="color: #010101;"
          >
            {content}
          </p>
        </div>
      ) : (
        <div
          class="flex"
          style="background: #D7F8F4; border-radius: 12px; padding: 12px 16px; width: fit-content; max-width: 45%;"
        >
          <p
            class="text-md whitespace-pre-line text-left"
            style="color: #010101"
          >
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
