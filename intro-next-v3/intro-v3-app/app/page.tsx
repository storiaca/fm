const getData = async () => {
  await new Promise((res) =>
    setTimeout(() => {
      res(0);
    }, 500)
  );
  return { data: [1, 2, 3] };
};

export default async function Home() {
  const data = await getData();
  console.log('data', data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
    </main>
  );
}
