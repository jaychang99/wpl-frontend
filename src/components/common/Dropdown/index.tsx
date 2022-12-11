import styled from "@emotion/styled";
import { Dispatch, SetStateAction, useState } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import {
  DropdownContainer,
  OptionItem,
  OptionList,
  SelectedLabel,
} from "components/common/Dropdown/styles";
import CircleCheckIcon from "components/common/icons/CircleCheckIcon";
import ExpandDownIcon from "components/common/icons/ExpandDownIcon";
import { BoxLabel } from "components/common/Box";

// 사용 예시
//
// <Dropdown list={["남성", "여성", "선택 안 함"]}></Dropdown>

interface Props extends HTMLMotionProps<"div"> {
  label?: string;
  placeholder: string;
  list: string[];
  setItem: Dispatch<SetStateAction<string>>;
  stackingorder: number;
}

function Dropdown({
  label,
  placeholder,
  list,
  onSelect = (selected) => {},
  onChange,
  setItem,
  stackingorder, // order of dropdown UIs  -> to determine z-index
  ...props
}: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState(placeholder);
  return (
    <DropdownContainer stackingorder={stackingorder} {...props}>
      {label && <BoxLabel>{label}</BoxLabel>}
      <SelectedLabel
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        {selected}
        <ExpandDownIcon />
      </SelectedLabel>
      <OptionList active={showDropdown}>
        {list.map((element) => (
          <OptionItem
            key={element}
            selectedCheck={element === selected ? true : false}
            onClick={() => {
              setShowDropdown(false);
              setSelected(element);
              setItem(element);
            }}
          >
            {element}
            {element === selected && <CircleCheckIcon />}
          </OptionItem>
        ))}
      </OptionList>
    </DropdownContainer>
  );
}

export default Dropdown;
