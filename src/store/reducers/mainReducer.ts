import { EnumMainActions, IMainState, MainActionTypes } from "../types/main.ts";

const initialState: IMainState = {
  nodes: [
    {
      id: "0",
      type: "selectorNode",
      data: { selected: -1 },
      position: { x: 0, y: 200 },
    },
  ],
  edges: [],
};
export const mainReducer = (
  state = initialState,
  action: MainActionTypes,
): IMainState => {
  switch (action.type) {
    case EnumMainActions.SET_NODES:
      return { ...state, nodes: action.payload };
    case EnumMainActions.SET_EDGES:
      return { ...state, edges: action.payload };
    case EnumMainActions.ON_SELECT:
      console.log(state);
      return {
        ...state,
        nodes: state.nodes.map((node) =>
          node.id === action.payload.id
            ? {
                ...node,
                data: { ...node.data, selected: action.payload.selected },
              }
            : node,
        ),
      };
    case EnumMainActions.CREATE_CHILD_NODE:
      if (state.nodes.find((el) => el.parentNode === action.payload.id))
        return state;
      return {
        ...state,
        nodes: [
          ...state.nodes,
          {
            id: state.nodes.length.toString(),
            data: { selected: -1 },
            position: { x: 300, y: 200 },
            type: "selectorNode",
            parentNode: action.payload.id,
          },
        ],
        edges: [
          ...state.edges,
          {
            id: action.payload.id + "->" + state.nodes.length.toString(),
            type: "smoothstep",
            source: action.payload.id,
            target: state.nodes.length.toString(),
          },
        ],
      };
    default:
      return state;
  }
};
