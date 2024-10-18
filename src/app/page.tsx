import React from "react";

const HomePage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4">
        <a
          className="text-3xl font-semibold text-blue-700 underline"
          href={`https://${"moonshot-task.vercel.app/email-dashboard"}`}
          target="_blank"
          rel={"noreferrer"}
        >
          Q1:Email {"{Solution}"}
        </a>
        <a
          className="text-3xl font-semibold text-blue-700 underline"
          href={`https://${"moonshot-task.vercel.app/analytics-dashboard"}`}
          target="_blank"
          rel={"noreferrer"}
        >
          Q2:Visualization {"{Solution}"}
        </a>
      </div>
    </div>
  );
};

export default HomePage;
