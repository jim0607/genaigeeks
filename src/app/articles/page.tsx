import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ArticlesList from "./ArticlesList";

interface ArticleMeta {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  author: string;
  cover: string;
  slug: string;
}

function getAllArticles(): ArticleMeta[] {
  const articlesDir = path.join(process.cwd(), "content/articles");
  const files = fs.readdirSync(articlesDir);
  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const filePath = path.join(articlesDir, file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);
    return {
      ...data,
      slug,
    } as ArticleMeta;
  });
}

export default function ArticlesPage() {
  const articles = getAllArticles();
  return <ArticlesList articles={articles} />;
}
