import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
// 你也可以添加 GoogleProvider、EmailProvider 等

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // 其他 provider
  ],
  // 你可以在这里自定义 session、callbacks、pages 等
});

export { handler as GET, handler as POST };
