import React from "react";
import { Layout } from "../layout/Layout";

export const Home = () => {
  return (
    <Layout>
      <div className="flex pt-10 mx-10 w-full">
        <div className="w-full">
          <div className="mt-6">
            <h1 className="text-[#1F2937] text-4xl">Home</h1>
            <hr className="mt-4" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
