import Flow from "./components/Flow.tsx";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEdgesAction, setNodesAction } from "./store/actions/mainActions.ts";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const storageNodes = localStorage.getItem("nodes");
    const storageEdges = localStorage.getItem("edges");
    if (storageNodes) dispatch(setNodesAction(JSON.parse(storageNodes)));
    if (storageEdges) dispatch(setEdgesAction(JSON.parse(storageEdges)));
  }, [dispatch]);
  return (
    <div className="App">
      <Flow />
    </div>
  );
}

export default App;
