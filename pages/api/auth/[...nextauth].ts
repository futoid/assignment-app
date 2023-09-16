import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth';
export default NextAuth ({
    providers : [
        GoogleProvider ({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
    ],

    session : {
        strategy : 'jwt'
    },

    jwt : {
        secret : process.env.NEXTAUTH_SECRET
    },

    debug  : true
});

