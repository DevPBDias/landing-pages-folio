import React from "react";
import articles from "../constants/articles";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <section className="w-full flex flex-col py-8 px-4">
      <h3 className="font-medium text-base mb-3 uppercase">FROM THE BLOG</h3>
      <h1 className="font-bold text-3xl mb-3">News & Articles</h1>
      <section className="w-full mt-12 flex flex-col justify-center items-center gap-6">
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
