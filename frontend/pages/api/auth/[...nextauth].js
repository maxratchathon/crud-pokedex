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
      name: "E-mail",
      credentials: {
        username: { label: "E-mail", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          // Connect to MongoDB
          await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });

          // Find user by email
          const user = await User.findOne({ email: credentials.username });

          if (!user) {
            return null; // User not found
          }

          // Compare passwords
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) {
            return null; // Passwords don't match
          }

          // User authenticated successfully
          return { id: user._id, email: user.email, name: user.name };
        } catch (error) {
          console.error("Error authenticating user:", error);
          return null;
        } finally {
          // Close MongoDB connection
          await mongoose.connection.close();
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
