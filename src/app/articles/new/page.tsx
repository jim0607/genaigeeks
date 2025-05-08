"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

// 动态导入 MDEditor，避免 SSR 报错
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const DRAFT_KEY = "article-draft";

export default function NewArticlePage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [cover, setCover] = useState("");
  const [content, setContent] = useState("## Start writing your article...");
  const router = useRouter();

  // 页面加载时恢复草稿
  useEffect(() => {
    const draft = localStorage.getItem(DRAFT_KEY);
    if (draft) {
      const data = JSON.parse(draft);
      setTitle(data.title || "");
      setCategory(data.category || "");
      setTags(data.tags || "");
      setCover(data.cover || "");
      setContent(data.content || "");
    }
  }, []);

  // 内容变动时自动保存草稿
  useEffect(() => {
    localStorage.setItem(
      DRAFT_KEY,
      JSON.stringify({ title, category, tags, cover, content })
    );
  }, [title, category, tags, cover, content]);

  // 这里只做本地演示，实际可提交到后端或 API
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Title: ${title}\nCategory: ${category}\nTags: ${tags}\nCover: ${cover}\nContent: ${content.slice(
        0,
        100
      )}...`
    );
    // 可在此处调用 API 保存文章
    // router.push("/articles");
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">New Article</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={e => setTags(e.target.value)}
        />
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Cover Image URL"
          value={cover}
          onChange={e => setCover(e.target.value)}
        />
        <div data-color-mode="light">
          <MDEditor value={content} onChange={setContent} height={400} />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
} 