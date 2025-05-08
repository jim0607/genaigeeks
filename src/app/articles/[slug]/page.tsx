import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const resolvedParams = await params;
  const filePath = path.join(process.cwd(), "content/articles", `${resolvedParams.slug}.md`);
  
  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    const { data } = matter(fileContent);
    
    return {
      title: data.title,
      description: data.description || "Article about AI and technology",
    };
  } catch {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found",
    };
  }
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const filePath = path.join(process.cwd(), "content/articles", `${resolvedParams.slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return (
      <div className="min-h-screen px-6 py-10 max-w-3xl mx-auto text-gray-900">
        {data.cover && (
          <img src={data.cover} alt={data.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        )}
        <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
        <div className="text-sm text-gray-500 mb-6 flex gap-2 flex-wrap items-center">
          <span>{data.category}</span>
          <span>·</span>
          <span>{data.date}</span>
          <span>·</span>
          <span>{data.author}</span>
          {data.tags && (
            <span className="flex gap-1">· {data.tags.map((t: string) => (
              <span key={t} className="bg-gray-100 text-xs px-2 py-0.5 rounded">{t}</span>
            ))}</span>
          )}
        </div>
        <article className="prose prose-lg max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    );
  } catch (error) {
    notFound(); // 路由 fallback 到 404 页面
  }
}
