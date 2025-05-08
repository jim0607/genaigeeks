"use client";
import React, { useState } from "react";
import Link from "next/link";

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

export default function ArticlesList({ articles }: { articles: ArticleMeta[] }) {
  const [category, setCategory] = useState<string | null>(null);
  const [tag, setTag] = useState<string | null>(null);

  const categories = Array.from(new Set(articles.map((a) => a.category)));
  const tags = Array.from(new Set(articles.flatMap((a) => a.tags)));

  const filtered = articles.filter((a) => {
    if (category && a.category !== category) return false;
    if (tag && !a.tags.includes(tag)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-white px-6 py-10 text-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-center">AI Tutorials & Articles</h1>
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        <span className="font-semibold">Category:</span>
        <button onClick={() => setCategory(null)} className={`px-2 py-1 rounded ${!category ? "bg-green-200" : "bg-gray-100"}`}>All</button>
        {categories.map((c) => (
          <button key={c} onClick={() => setCategory(c)} className={`px-2 py-1 rounded ${category === c ? "bg-green-400 text-white" : "bg-gray-100"}`}>{c}</button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <span className="font-semibold">Tag:</span>
        <button onClick={() => setTag(null)} className={`px-2 py-1 rounded ${!tag ? "bg-blue-200" : "bg-gray-100"}`}>All</button>
        {tags.map((t) => (
          <button key={t} onClick={() => setTag(t)} className={`px-2 py-1 rounded ${tag === t ? "bg-blue-400 text-white" : "bg-gray-100"}`}>{t}</button>
        ))}
      </div>
      <div className="grid gap-8 max-w-4xl mx-auto">
        {filtered.map((article, index) => (
          <Link href={`/articles/${article.slug}`} key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1 p-0 overflow-hidden border border-gray-200 block group">
            {article.cover && (
              <img
                src={article.cover}
                alt={article.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-green-700 transition-colors">{article.title}</h2>
              <div className="text-xs text-gray-500 mb-1 flex gap-2 flex-wrap items-center">
                <span>{article.category}</span>
                <span>·</span>
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.author}</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-2">
                {article.tags.map((t) => (
                  <span key={t} className="bg-gray-100 text-xs px-2 py-0.5 rounded">{t}</span>
                ))}
              </div>
              <p className="text-sm text-gray-700 line-clamp-3">{article.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 