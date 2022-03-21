import React from "react";
import { TabsStyle } from "./TabsStyle";

interface TabsProps {
  leftTitle: string;
  rightTitle: string;
  leftComponent: JSX.Element;
  rightComponent: JSX.Element;
  selected: "left" | "right";
  handleRightTabClick: () => void;
  handleLeftTabClick: () => void;
}
export const Tabs: React.FC<TabsProps> = ({
  leftComponent,
  handleLeftTabClick,
  handleRightTabClick,
  rightComponent,
  leftTitle,
  selected,
  rightTitle,
}) => {
  return (
    <TabsStyle>
      <div className="tabSection">
        <div onClick={handleLeftTabClick} className="tabItem">
          <label>{leftTitle}</label>
          <div
            className={`${selected === "left" ? "selected" : "notselected"}`}
          />
        </div>
        <div onClick={handleRightTabClick} className="tabItem">
          <label>{rightTitle}</label>
          <div
            className={`${selected === "right" ? "selected" : "notselected"}`}
          />
        </div>
      </div>
      <div className="tabContent">
        {selected === "left" ? leftComponent : rightComponent}
      </div>
    </TabsStyle>
  );
};
