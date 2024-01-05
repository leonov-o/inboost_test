import { Edge, Node } from "reactflow";

export enum EnumMainActions {
  SET_NODES = "SET_NODES",
  SET_EDGES = "SET_EDGES",
  ON_SELECT = "ON_SELECT",
  CREATE_CHILD_NODE = "CREATE_CHILD_NODE",
}
export interface IMainState {
  nodes: Node[];
  edges: Edge[];
}

interface ISetNodesAction {
  type: EnumMainActions.SET_NODES;
  payload: Node<any>[];
}

interface ISetEdgesAction {
  type: EnumMainActions.SET_EDGES;
  payload: Edge<any>[];
}

interface IOnSelectAction {
  type: EnumMainActions.ON_SELECT;
  payload: {
    id: string;
    selected: number;
  };
}

interface ICreateChildNodeAction {
  type: EnumMainActions.CREATE_CHILD_NODE;
  payload: {
    id: string;
  };
}

export type MainActionTypes =
  | ISetNodesAction
  | ISetEdgesAction
  | IOnSelectAction
  | ICreateChildNodeAction;
