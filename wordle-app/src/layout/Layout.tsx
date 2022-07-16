import React, { ReactNode } from "react";
import { Navbar } from "../share-components/Navbar";
interface ILayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: ILayoutProps) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      {children}
    </main>
  );
};
