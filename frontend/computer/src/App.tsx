import { ToastContainer } from "react-toastify";
import "./App.css";
import RouterPage from "./pages/routes/RouterPage";

function App() {
  return (
    <div className="appMainWrapper">
      <div className="appWrapper">
        <ToastContainer />
        <RouterPage />
      </div>
    </div>
  );
}

export default App;
