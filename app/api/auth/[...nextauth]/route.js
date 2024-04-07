import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth"


export const authOptions = {
    callbacks: {
        jwt: async ({ token, user }) => {
            // user is only available the first time a user signs in authorized
            if (user) {
                return {
                    ...token,
                    jwt: user.jwt,
                    tokenExpiry: user.tokenExpiry
                };
            }
            return token;
        },
        session: async ({ session, token }) => {
            if (token) {
                session.jwt = token.jwt;
                session.tokenExpiry = token.tokenExpiry;
            }
            return session;
        },
    },

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "johndoe@email.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                try {
                    const res = await fetch("http://127.0.0.1:8000/api/login/", {
                        method: "POST",
                        body: JSON.stringify({
                            username: credentials.email,
                            password: credentials.password,
                        }),
                        headers: { "Content-Type": "application/json" },
                    });
                    if (!res.ok) {
                        return null;
                    }
                    const parsedResponse = await res.json();
                    const jwt = parsedResponse.token;
                    const tokenExpiry = parsedResponse.expiry;

                    return {
                        ...credentials,
                        jwt,
                        tokenExpiry
                    };
                } catch (e) {
                    return null;
                }
            }
        }),
    ],
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

