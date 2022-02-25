import React from "react";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./images";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-header gradient__text">
        <h1>A lot is happening, We are blogging about it</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            image={blog01}
            date="Sep 26, 2021"
            description="GPT-3 and Open AI is the future. Let us exlore hot it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            image={blog02}
            date="Sep 26, 2021"
            description="GPT-3 and Open AI is the future. Let us exlore hot it is?"
          />
          <Article
            image={blog03}
            date="Sep 26, 2021"
            description="GPT-3 and Open AI is the future. Let us exlore hot it is?"
          />
          <Article
            image={blog04}
            date="Sep 26, 2021"
            description="GPT-3 and Open AI is the future. Let us exlore hot it is?"
          />
          <Article
            image={blog05}
            date="Sep 26, 2021"
            description="GPT-3 and Open AI is the future. Let us exlore hot it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
