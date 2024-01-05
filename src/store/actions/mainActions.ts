import { Edge, Node } from "reactflow";
import { EnumMainActions } from "../types/main.ts";

export const setNodesAction = (payload: Node<any>[]) => ({
  type: EnumMainActions.SET_NODES,
  payload,
});
export const setEdgesAction = (payload: Edge<any>[]) => ({
  type: EnumMainActions.SET_EDGES,
  payload,
});

export const onSelectAction = (id: string, selected: number) => ({
  type: EnumMainActions.ON_SELECT,
  payload: { id, selected },
});

export const createChildNodeAction = (id: string) => ({
  type: EnumMainActions.CREATE_CHILD_NODE,
  payload: { id },
});
