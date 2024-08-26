import React from "react";
import WorkCard from "./WorkCard";

const WorkSection = () => {
  return (
    <section className="section work py-36 w-full">
      <div className="flex justify-center">
        <h2 className="text-[1.75rem] font-bold max-w-[366px] text-center mb-[3.3125rem] text-[#FF5925]">
          Discover My Work Portfolio Highlights
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 px-[3.75rem]">
        <WorkCard
          title={"MARTKET E-Commerce App"}
          desc={
            "Our project is an eCommerce web application built using the MERN (MongoDB, Express, React, Node.js) stack. "
          }
          tech={["ReactJs", "ExpressJs", "MongoDb", "NodeJs"]}
          githubUrl="https://github.com/amaank23/martket-MERN-ecommerce"
        />
        <WorkCard
          title={"Blog Website with Next js"}
          desc={
            "Our project is an blog web application built using the NextJs. "
          }
          tech={["ReactJs", "NextJs"]}
          githubUrl="https://github.com/amaank23/next-blog-app"
        />
        <WorkCard
          title={"Google Clone App React Js"}
          desc={"Our project is an Google Clone built using ReactJs. "}
          tech={["ReactJs"]}
          githubUrl="https://github.com/amaank23/google-react-clone"
        />
      </div>
    </section>
  );
};

export default WorkSection;
