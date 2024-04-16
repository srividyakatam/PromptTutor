import React from "react";
import "./PromptTemplate.css";
import Dropdown from "./Dropdown/Dropdown";
import DropdownItem from "./DropdownItem/DropdownItem";


export const PromptTemplate = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div className="Prompt-Template">
        <div className="Prompt-Template-params">
          <div className="content">
            <Dropdown
              buttonText="Dropdown button"
              content={
                <>
                  {items.map((item, id) => (
                    <DropdownItem key={id}>{`Item ${item}`}</DropdownItem>
                  ))}
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};
