import React from "react";
import articles from "../constants/articles";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <section className="w-full flex flex-col py-8 px-4 lg:px-8">
      <h3 className="font-medium text-base mb-3 uppercase md:text-lg lg:text-2xl opacity-75">
        FROM THE BLOG
      </h3>
      <h1 className="font-bold text-3xl mb-3 md:text-4xl lg:text-5xl">
        News & Articles
      </h1>
      <section className="w-full mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-12 xl:gap-24">
        {articles.map((item) => (
          <NewsCard
            key={item.id}
            image={item.image}
            author={item.author}
            comments={item.comments}
            title={item.title}
            date={item.date}
          />
        ))}
      </section>
    </section>
  );
};

export default News;
