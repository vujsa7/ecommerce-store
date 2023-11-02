import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export const authOptions = {
  providers: [
    CognitoProvider({
      clientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_COGNITO_CLIENT_SECRET ?? "",
      issuer: process.env.NEXT_PUBLIC_COGNITO_ISSUER ?? "",
    }),
  ],
  // pages: {
  // signIn: "/login"
  // signIn: `${process.env.NEXT_PUBLIC_AWS_COGNITO_DOMAIN}/login?client_id=${process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID}&scope=openid&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback/cognito`,
  // },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
