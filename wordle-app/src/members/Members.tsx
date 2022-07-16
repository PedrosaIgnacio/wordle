import React from "react";
import { Layout } from "../layout/Layout";
import { GridMembers } from "./components/GridMembers";

export const Members = () => {
  return (
    <Layout>
      <div className="flex justify-center mt-10 mb-10">
        <GridMembers />
      </div>
    </Layout>
  );
};
