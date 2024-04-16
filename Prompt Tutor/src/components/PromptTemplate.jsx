import React, { useState } from "react";
import "./PromptTemplate.css";
import Dropdown from "./Dropdown/Dropdown";
import DropdownItem from "./DropdownItem/DropdownItem";
import templatesData from "../../Data/PromptTemplates.json";
import parametersData from "../../Data/PromptParameters.json";


export const PromptTemplate = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState({});

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedTemplate({});
  };

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template);
  };

  const categories = templatesData.categories;
  const templates = categories.find(cat => cat.name === selectedCategory)?.templates || [];
  const parameters = selectedTemplate.parameters || [];

  // Adjust this to correctly access the parameters data
  const getDropdownItems = (param) => {
    return parametersData[0][param] || [];
  };

  return (
    <>
      <div className="Prompt-Template">
        <div className="Prompt-Template-params">
          <div className="content">

            <Dropdown buttonText="Category" content={
              categories.map(cat => (
                <DropdownItem key={cat.name} onClick={() => handleCategoryChange(cat.name)}>
                  {cat.name}
                </DropdownItem>
              ))
            } />

            {selectedCategory && <Dropdown buttonText="Template" content={
              templates.map(temp => (
                <DropdownItem key={temp.name} onClick={() => handleTemplateChange(temp)}>
                  {temp.name}
                </DropdownItem>
              ))
            } />}

            {parameters.map(param => (
              <Dropdown key={param} buttonText={`${param}`} content={
                getDropdownItems(param).map((item, index) => (
                  <DropdownItem key={index}>
                    {item}
                  </DropdownItem>
                ))
              } />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
