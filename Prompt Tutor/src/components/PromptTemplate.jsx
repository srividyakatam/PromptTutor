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
        <input type="text" className="input-textbox" id={name} name={name} placeholder={placeholder} size="30" />
      </div>
    );
  };

  const InputTextarea = ({ name, label, placeholder, className }) => {
    return (
      <div className={`input-field ${className}`}>
        {label && <label htmlFor={name}>{label}</label>}
        <textarea className="input-textarea" id={name} name={name} placeholder={placeholder} rows="4" cols="100" />
      </div>
    );
  };

  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(selectedTemplate.prompt_text).then(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    }, (err) => {
      console.error('Error copying prompt: ', err);
    });
  };

  return (
    <>
      <div className="Prompt-Template">
        <div className="Prompt-Template-params">
          {selectedTemplate.description && (
            <div className="template-description">
              <label>{selectedTemplate.description}</label>
            </div>
          )}
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
            <>
              <div className="input-fields-textbox-container">
                {Object.entries(selectedTemplate.input_fields)
                  .filter(([key, field]) => field.type === "textbox")
                  .map(([key, field]) => (
                    <InputTextbox
                      key={key}
                      name={key}
                      label={field.label}
                      placeholder={field.placeholder}
                      className={`input-${field.size}`}
                    />
                  ))}
              </div>
              <div className="input-fields-textarea-container">
                {Object.entries(selectedTemplate.input_fields)
                  .filter(([key, field]) => field.type === "textarea")
                  .map(([key, field]) => (
                    <InputTextarea
                      key={key}
                      name={key}
                      label={field.label}
                      placeholder={field.placeholder}
                      className={`input-${field.size}`}
                    />
                  ))}
              </div>
            </>
          )}

          {selectedTemplate.prompt_text && (
            <div className="template-container">
              <label>Prompt Text</label>
              <textarea
                readOnly
                value={selectedTemplate.prompt_text}
                className="template"
              />
              <button onClick={handleCopyToClipboard} className="copy-button">Copy Prompt</button>
              {showTooltip && <div className="tooltip">Copied to clipboard!</div>}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
