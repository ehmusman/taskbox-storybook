import AddTask from "./components/AddTask";

function App() {
  return (
    <div>
      <div className="bg-dark py-1 text-light">
        <h1 className="text-center">
          Task Box
        </h1>
      </div>
      <div className="container mt-5">
        <AddTask />
      </div>
    </div>
  );
}

export default App;
