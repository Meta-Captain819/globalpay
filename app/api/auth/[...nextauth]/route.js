import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";
import mongoose from "mongoose";
import User from "@/app/models/User";
import Payment from "@/app/models/Payment";
import connectDb from "@/app/utils/connectDb";

export const authOptions= NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID,
      clientSecret: process.env.APPLE_CLIENT_SECRET,
    }),
  ],
  

  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        try {
          await connectDb();

          
          const existingUser = await User.findOne({ email: profile.email });

          if (!existingUser) {
            
            const newUser = new User({
              name: profile.name,
              email: profile.email,
              username: profile.email.split("@")[0], 
              profilePicture: profile.picture,
            });
            await newUser.save();
          }

          return true; 
        } catch (error) {
          console.error("Error in signIn callback:", error.message);
          return false; 
        }
      }
      return false; 
    },
    async session({ session, token }) {
      try {
        await connectDb();
        const dbUser = await User.findOne({ email: session.user.email });

        if (dbUser) {
          session.user.username = dbUser.username;
          session.user.profilePicture = dbUser.profilePicture;
        }

        return session;
      } catch (error) {
        console.error("Error in session callback:", error.message);
        return session;
      }
      
    },
    // redirect({ url, baseUrl }) {
    //   return "/editprofile"; // Redirect to dashboard after sign-in
    // },
  }
   
  
});
export { authOptions as GET, authOptions as POST }