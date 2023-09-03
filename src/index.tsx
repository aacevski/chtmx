import ChatBubble from './components/ChatBubble';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import TextFooter from './components/TextFooter';
import { createElysiaApp } from './elysia/create-app';
import { cors } from '@elysiajs/cors';
import { html } from '@elysiajs/html';
import { ws } from 'elysia';
import * as elements from 'typed-html';

const BaseHtml = ({ children }: elements.Children) => `
<DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>chtmx</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://unpkg.com/htmx.org@1.9.5" integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/htmx.org/dist/ext/ws.js"></script>
    <script src="https://unpkg.com/hyperscript.org@0.9.11"></script>
    <link href="/styles.css" rel="stylesheet">
</head>

${children}
`;

const chatMessages: string[] = [];

createElysiaApp()
  .use(
    cors({
      origin: '*',
    }),
  )
  .use(ws())
  .use(html())
  .get('/styles.css', () => Bun.file('./tailwind-gen/styles.css'))
  .get('/', ({ html }) => {
    return html(
      <BaseHtml>
        <body>
          <Layout>
            <Sidebar />
            <div
              class="flex-1 relative h-screen overflow-y-auto"
              hx-ext="ws"
              ws-connect="/ws"
            >
              <TextFooter />
              <div
                class="flex-1 relative h-screen overflow-y-auto"
                hx-id="chatRoom"
                id="chatRoom"
                style="padding-bottom: 80px"
              >
                No messages yet.
              </div>
            </div>
          </Layout>
        </body>
      </BaseHtml>,
    );
  })
  .ws('/ws', {
    message(socket, data) {
      const { chatMessage } = data as { chatMessage: string };
      chatMessages.push(chatMessage);

      socket.publish(
        'chat',
        <div
          class="flex-1 relative h-screen overflow-y-auto"
          id="chatRoom"
          style="padding-bottom: 80px"
        >
          {chatMessages.map((message, index) => (
            <ChatBubble
              content={message}
              isMine={index % 2 === 0}
            />
          ))}
        </div>,
      );

      socket.send(
        <div
          class="flex-1 relative h-screen overflow-y-auto"
          id="chatRoom"
          style="padding-bottom: 80px"
        >
          {chatMessages.map((message, index) => (
            <ChatBubble
              content={message}
              isMine={index % 2 === 0}
            />
          ))}
        </div>,
      );
    },
    open(socket) {
      socket.subscribe('chat');

      socket.send(
        <div
          class="flex-1 relative h-screen overflow-y-auto"
          id="chatRoom"
          style="padding-bottom: 80px"
        >
          {chatMessages.map((message, index) => (
            <ChatBubble
              content={message}
              isMine={index % 2 === 0}
            />
          ))}
        </div>,
      );
    },
  })
  .listen(3_000, ({ hostname, port }) => {
    console.log(`🎉 chtmx is running at http://${hostname}:${port}`);
  });
