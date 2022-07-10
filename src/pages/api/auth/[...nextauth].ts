import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  // pages: {
  //   signIn: "/auth/signin",
  // },

  secret: process.env.NEXTAUTH_SECRET,
})