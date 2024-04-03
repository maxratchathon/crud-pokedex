import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../../../../backend/schema/UserSchema";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          console.log("User authenticated successfully");
          return { email: credentials.email, password: credentials.password };
        } catch (error) {
          console.error("Error authenticating user:", error);
          return null;
        } finally {
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
