import React from "react";

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col gap-5 justify-center items-center">
      <h1 className="text-4xl font-bold">
        Moonshot:Fullstack-Test-2024-10-12 {"{Solution}"}
      </h1>
      <div className="flex flex-col gap-4">
        <a
          className="text-2xl font-semibold text-blue-700 underline"
          href={`https://${"moonshot-task.vercel.app/email-dashboard"}`}
          target="_blank"
          rel={"noreferrer"}
        >
          Q1:Email
        </a>
        <a
          className="text-2xl font-semibold text-blue-700 underline"
          href={`https://${"moonshot-task.vercel.app/analytics-dashboard"}`}
          target="_blank"
          rel={"noreferrer"}
        >
          Q2:Visualization
        </a>
      </div>
    </div>
  );
};

export default HomePage;
