import React from "react";
import "./PromptLibrary.css";
import { Card } from "./Card";

export const PromptLibrary = () => {
  const promptsData = [
    {
      id: 1,
      title: 'Abandoned Cart Email',
      description: 'Crafts a prompt which can be used to remind customers about abandoned cart items.',
      prompt_text: 'Subject Line: “Re: Your Abandoned Cart – Don"’"t Forget Your Favorites! 🛒”  \n Body Prompt: “Remind customers of items they’ve left in their shopping cart, providing a gentle nudge to complete their purchase and offering assistance if needed.”',
    },
    {
      id: 2,
      title: 'Abandoned Cart Email2',
      description: 'Crafts a prompt which can be used to remind customers about abandoned cart items.',
      prompt_text: 'Subject Line: “Re: Your Abandoned Cart – Don"’"t Forget Your Favorites! 🛒”  \n Body Prompt: “Remind customers of items they’ve left in their shopping cart, providing a gentle nudge to complete their purchase and offering assistance if needed.”',
    },
    {
      id: 3,
      title: 'Abandoned Cart Email3',
      description: 'Crafts a prompt which can be used to remind customers about abandoned cart items.',
      prompt_text: 'Subject Line: “Re: Your Abandoned Cart – Don"’"t Forget Your Favorites! 🛒”  \n Body Prompt: “Remind customers of items they’ve left in their shopping cart, providing a gentle nudge to complete their purchase and offering assistance if needed.”',
    },
    {
      id: 4,
      title: 'Abandoned Cart Email4',
      description: 'Crafts a prompt which can be used to remind customers about abandoned cart items.',
      prompt_text: 'Subject Line: “Re: Your Abandoned Cart – Don"’"t Forget Your Favorites! 🛒”  \n Body Prompt: “Remind customers of items they’ve left in their shopping cart, providing a gentle nudge to complete their purchase and offering assistance if needed.”',
    },
    {
      id: 5,
      title: 'Abandoned Cart Email',
      description: 'Crafts a prompt which can be used to remind customers about abandoned cart items.',
      prompt_text: 'Subject Line: “Re: Your Abandoned Cart – Don"’"t Forget Your Favorites! 🛒”  \n Body Prompt: “Remind customers of items they’ve left in their shopping cart, providing a gentle nudge to complete their purchase and offering assistance if needed.”',
    },
    {
      id: 6,
      title: 'Abandoned Cart Email2',
      description: 'Crafts a prompt which can be used to remind customers about abandoned cart items.',
      prompt_text: 'Subject Line: “Re: Your Abandoned Cart – Don"’"t Forget Your Favorites! 🛒”  \n Body Prompt: “Remind customers of items they’ve left in their shopping cart, providing a gentle nudge to complete their purchase and offering assistance if needed.”',
    },
    {
      id: 7,
      title: 'Abandoned Cart Email3',
      description: 'Crafts a prompt which can be used to remind customers about abandoned cart items.',
      prompt_text: 'Subject Line: “Re: Your Abandoned Cart – Don"’"t Forget Your Favorites! 🛒”  \n Body Prompt: “Remind customers of items they’ve left in their shopping cart, providing a gentle nudge to complete their purchase and offering assistance if needed.”',
    },
    {
      id: 8,
      title: 'Abandoned Cart Email4',
      description: 'Crafts a prompt which can be used to remind customers about abandoned cart items.',
      prompt_text: 'Subject Line: “Re: Your Abandoned Cart – Don"’"t Forget Your Favorites! 🛒”  \n Body Prompt: “Remind customers of items they’ve left in their shopping cart, providing a gentle nudge to complete their purchase and offering assistance if needed.”',
    },
  ]

  const listItem = promptsData.map( (item) =>{
    return (
        <Card 
        title = {item.title}
        description={item.description} 
        prompt_text={item.prompt_text} 
        />
        
    )
  })
  return (
    <>
      <div className="prompt-library">
      <div className="col">
        {listItem}
      </div>
      </div>
    </>
  );
};