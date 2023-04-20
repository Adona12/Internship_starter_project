import React from "react";

export function PrimaryButton({ content, addClass}: ButtonProp) {
  return <button className={`text-white bg-primary btn px-6 py-3 text-sm  ${addClass}`}>{content}</button>;
}


export function OutLineButton({content,addClass}:ButtonProp){
  return <button className={`outline outline-primary text-primary inline btn px-6 py-2 ${addClass}`}>{content}</button>;
}

