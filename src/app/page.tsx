
export default function Home() {
  const data = process.env.TEST_VAR;
  console.log(data);
  console.log(process.env.TEST_VAR);
  console.log("hello");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        This is Linode One
        Testing env
        this is {data}
      </main>
    </div>
  );
}
