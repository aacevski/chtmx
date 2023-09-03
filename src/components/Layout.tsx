import * as elements from 'typed-html';

const Layout = ({ children }: elements.Children) => {
  return (
    <div
      class="w-full"
      style="background: #FAFAFA"
    >
      <div class="flex flex-col items-center justify-center min-h-screen">
        <main class="flex items-center justify-center flex-1 text-center w-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
