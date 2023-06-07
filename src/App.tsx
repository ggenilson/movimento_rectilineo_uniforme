import { useNavigate } from "react-router-dom";

function App() {
  const navigateTo = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center gap-5 h-screen">
      <button
        className="bg-orange-500 py-3 px-32 rounded-md text-white font-bold"
        onClick={() => navigateTo("caso-1")}
      >
        CASO 1
      </button>

      <button
        className="bg-orange-500 py-3 px-32 rounded-md text-white font-bold"
        onClick={() => navigateTo("caso-2")}
      >
        CASO 2
      </button>
    </div>
  );
}

export default App;
