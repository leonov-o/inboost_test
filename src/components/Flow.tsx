import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  EdgeChange,
  NodeChange,
} from "reactflow";
import "reactflow/dist/style.css";
import selectorNode from "./SelectorNode.tsx";
import { useTypedSelector } from "../hooks/useTypedSelector.ts";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  setEdgesAction,
  setNodesAction,
} from "../store/actions/mainActions.ts";

const nodeTypes = {
  selectorNode: selectorNode,
};

const Flow = () => {
  const { nodes, edges } = useTypedSelector((state) => state.main);
  const dispatch = useDispatch();
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      dispatch(setNodesAction(applyNodeChanges(changes, nodes)));
      localStorage.setItem("nodes", JSON.stringify(nodes));
      localStorage.setItem("edges", JSON.stringify(edges));
    },
    [nodes],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      dispatch(setEdgesAction(applyEdgeChanges(changes, edges))),
    [edges],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      fitView
    >
      <Background />
    </ReactFlow>
  );
};

export default Flow;
