import { useGetUserQuery } from "@/redux/features/userApi";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch("http://localhost:5000/getUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "arko@gmail.com",
          }),
        });

        const user = await res.json();

        if (
          credentials?.username === user?.data?.email ||
          credentials?.password === user?.data?.password
        ) {
          return {
            id: "1",
            name: user?.data?.username,
            email: user?.data?.email,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/home",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
    jwt(params) {
      if (params.user?.email) {
        params.token.email = params.user.email;
      }
      return params.token;
    },
  },
};

const handler = (req: any, res: any) => NextAuth(req, res, authOptions);
export { handler as GET, handler as POST };
