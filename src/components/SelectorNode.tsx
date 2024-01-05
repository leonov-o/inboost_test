import { memo, useState } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import Dropdown from "./shared/Dropdown.tsx";
import { useDispatch } from "react-redux";
import {
  createChildNodeAction,
  onSelectAction,
} from "../store/actions/mainActions.ts";
import { useTypedSelector } from "../hooks/useTypedSelector.ts";

const SelectorNode = ({
  id,
  data,
  isConnectable,
  targetPosition = Position.Top,
  sourcePosition = Position.Bottom,
}: NodeProps) => {
  const [active, setActive] = useState(false);
  const { nodes } = useTypedSelector((state) => state.main);
  const optionsLabel = [
    "Варіант 1",
    "Варіант 2",
    "Варіант 3",
    "Варіант 4",
    "Варіант 5",
    "Варіант 6",
  ];

  const dispatch = useDispatch();

  const onSelect = (selected: number) => {
    dispatch(onSelectAction(id, selected));
    dispatch(createChildNodeAction(id));
    setActive(false);
  };
  const options = optionsLabel.map((el, index) => ({
    label: el,
    checked: index === data.selected,
    onSelect: () => onSelect(index),
  }));

  const variantNum: number[] = [];
  let currentId: string | undefined = id;

  while (currentId) {
    const currentNode = nodes.find((el) => el.id === currentId);

    if (!currentNode) {
      break;
    }

    variantNum.push(currentNode.data.selected + 1);
    currentId = currentNode.parentNode;
  }

  const value =
    data.selected !== -1 ? "Варіант " + variantNum.reverse().join("-") : null;

  return (
    <>
      <Handle
        type="target"
        position={targetPosition}
        isConnectable={isConnectable}
      />
      <div className="selectorCard">
        <div className="selectorRectangle"></div>
        <Dropdown
          value={value}
          options={options}
          active={active}
          onClick={() => setActive(!active)}
        />
      </div>
      <Handle
        type="source"
        position={sourcePosition}
        isConnectable={isConnectable}
      />
    </>
  );
};

SelectorNode.displayName = "SelectorNode";

export default memo(SelectorNode);
