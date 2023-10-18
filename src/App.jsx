import Todo from "./pages/Todo";function App() {
  return (
    <div className="m-2 bg-neutral-900 text-orange-400 ">
      <main className="flex flex-col h-screen items-center justify-center m-4">
        <h1 className="text-3xl ">todo list</h1>
        <Todo/>
      </main>
    </div>
  );
}

export default App;
