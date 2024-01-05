import CaretDown from "./CaretDown.tsx";
import CaretUp from "./CaretUp.tsx";

interface IDropdownOptions {
  checked: boolean;
  label: string;
  onSelect(): void;
}
interface IDropdownProps {
  value: string | null;
  options: IDropdownOptions[];
  active: boolean;
  onClick(): void;
}
const Dropdown = ({ value, options, active, onClick }: IDropdownProps) => {
  return (
    <div tabIndex={0} className="dropdown">
      <div onClick={onClick} className="dropdownBtn">
        {value ? value : "Вибрати значення"}
        {active ? <CaretDown /> : <CaretUp />}
      </div>
      {active ? (
        <div className="dropdownContent">
          {options.map((el, index) => (
            <div key={index} className="dropdownItem" onClick={el.onSelect}>
              <div
                className={`dropdownItemCheckbox ${
                  el.checked ? "checked" : ""
                }`}
              ></div>
              <div className="dropdownItemLabel">{el.label}</div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
