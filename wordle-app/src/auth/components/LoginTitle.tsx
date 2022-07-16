import React from "react";
interface ILoginTitleProps {
  properties: string;
}
export const LoginTitle = ({ properties }: ILoginTitleProps) => {
  return (
    <div className={`text-center my-4 ${properties}`}>
      <h1 className="text-l lg:text-4xl login-title-3">Wordle or Kick</h1>
      <h1 className=" text-l ml-5 lg:text-4xl login-title">Wordle or Kick</h1>
      <h1 className="text-l ml-2 lg:text-4xl login-title-2">Wordle or Kick</h1>
    </div>
  );
};
