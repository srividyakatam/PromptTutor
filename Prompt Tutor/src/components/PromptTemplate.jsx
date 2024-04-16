import React, { useState } from "react";
import "./PromptTemplate.css";
import Dropdown from "./Dropdown/Dropdown";
import DropdownItem from "./DropdownItem/DropdownItem";
import templatesData from "../../Data/PromptTemplates.json";
import parametersData from "../../Data/PromptParameters.json";


export const PromptTemplate = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState({});
  const [selectedParameters, setSelectedParameters] = useState({});

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedTemplate({});
    setSelectedParameters({});
  };

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template);
    setSelectedParameters({});
  };

  const handleParameterChange = (param, value) => {
    setSelectedParameters(prev => ({ ...prev, [param]: value }));
  };

  const categories = templatesData.categories;
  const templates = categories.find(cat => cat.name === selectedCategory)?.templates || [];
  const parameters = selectedTemplate.parameters || [];

  const getDropdownItems = (param) => {
    return parametersData[0][param] || [];
  };

  const InputTextbox = ({ name, label, placeholder, className }) => {
    return (
      <div className={`input-field ${className}`}>
        {label && <label htmlFor={name}>{label}</label>}
        <input type="text" id={name} name={name} placeholder={placeholder} size="30"/>
      </div>
    );
  };

  const InputTextarea = ({ name, label, placeholder, className }) => {
    return (
      <div className={`input-field ${className}`}>
        {label && <label htmlFor={name}>{label}</label>}
        <textarea id={name} name={name} placeholder={placeholder} rows="4" cols="100"/>
      </div>
    );
  };

  return (
    <>
      <div className="Prompt-Template">
        <div className="Prompt-Template-params">
          <div className="content">

            <Dropdown buttonText={selectedCategory || "Category"} content={
              categories.map(cat => (
                <DropdownItem key={cat.name} onClick={() => handleCategoryChange(cat.name)}>
                  {cat.name}
                </DropdownItem>
              ))
            } />

            {selectedCategory && <Dropdown buttonText={selectedTemplate.name || "Template"} content={
              templates.map(temp => (
                <DropdownItem key={temp.name} onClick={() => handleTemplateChange(temp)}>
                  {temp.name}
                </DropdownItem>
              ))
            } />}

            {parameters.map(param => (
              <Dropdown key={param} buttonText={selectedParameters[param] || param} content={
                getDropdownItems(param).map((item, index) => (
                  <DropdownItem key={index} onClick={() => handleParameterChange(param, item)}>
                    {item}
                  </DropdownItem>
                ))
              } />
            ))}
          </div>
          {selectedTemplate.input_fields && (
            <div className="input-fields-container">
              {Object.entries(selectedTemplate.input_fields).map(([key, field]) => {
                const FieldComponent = field.type === "textarea" ? InputTextarea : InputTextbox;
                return (
                  <FieldComponent
                    key={key}
                    name={key}
                    label={field.label} // Assuming you've added label in your JSON structure
                    placeholder={field.placeholder}
                    className={`input-${field.size}`}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
