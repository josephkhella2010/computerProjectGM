import { ToastContainer } from "react-toastify";
import "./App.css";
import RouterPage from "./pages/routes/RouterPage";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";
import SendingEmailContainer from "./pages/sendingEmailPage/SendingEmailContainer";

function App() {
  const { isSending } = useSelector((state: RootState) => state.SendingSlice);
  return (
    <div className="appMainWrapper">
      <div className="appWrapper">
        {isSending ? <SendingEmailContainer /> : ""}
        <ToastContainer />
        <RouterPage />
      </div>
    </div>
  );
}

export default App;
