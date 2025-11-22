import { ToastContainer } from "react-toastify";
import "./App.css";
import RouterPage from "./pages/routes/RouterPage";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";
import LoadingSection from "./pages/LoadingPage/LoadingSection";

function App() {
  const { isLoading } = useSelector((state: RootState) => state.IsLoadingSlice);
  return (
    <div className="appMainWrapper">
      <div className="appWrapper">
        {isLoading ? <LoadingSection /> : ""}
        <ToastContainer />
        <RouterPage />
      </div>
    </div>
  );
}

export default App;
