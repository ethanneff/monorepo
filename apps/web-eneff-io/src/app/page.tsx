import { Text } from '@shared/components';

const Home = () => {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <a
          className="select-none"
          href="https://www.eneff.com"
        >
          <h1 className="animate-pulse text-4xl font-bold">hello</h1>
        </a>
        <Text title="" />
      </main>
    </div>
  );
};

export default Home;
