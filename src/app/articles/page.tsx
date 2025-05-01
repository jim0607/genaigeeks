import React from "react";
import Link from "next/link";

interface Article {
  title: string;
  summary: string;
  slug: string;
}

const articles: Article[] = [
  {
    title: "Understanding Attention Mechanisms in Transformers",
    summary: "An introduction to how attention works in models like BERT and GPT.",
    slug: "attention-mechanisms-transformers"
  },
  {
    title: "Getting Started with LoRA Fine-Tuning",
    summary: "Learn how to fine-tune large language models with Low-Rank Adaptation.",
    slug: "lora-fine-tuning"
  },
  {
    title: "Diffusion Models Explained Simply",
    summary: "A step-by-step guide to understanding how diffusion-based generative models work.",
    slug: "diffusion-models-explained"
  }
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-10 text-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-center">AI Tutorials & Articles</h1>
      <div className="grid gap-6 max-w-4xl mx-auto">
        {articles.map((article, index) => (
          <Link href={`/articles/${article.slug}`} key={index} className="block p-6 rounded-lg border border-gray-200 shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-sm text-gray-600">{article.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
