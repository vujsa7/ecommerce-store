import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export const authOptions = {
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID ?? "",
      clientSecret: process.env.COGNITO_CLIENT_SECRET ?? "",
      issuer: process.env.COGNITO_ISSUER ?? "",
    }),
  ],
  pages: { signIn: "/login" },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
