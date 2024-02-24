import CredentialsProvider from "next-auth/providers/credentials"

providers: [
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
      username: { label: "Username", type: "text", placeholder: "user name" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

      if (user) {
        // Any object returned will be saved in `user` property of the JWT
        return user
      } else {
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }


    //   const res = await fetch("/your/endpoint", {
    //     method: 'POST',
    //     body: JSON.stringify(credentials),
    //     headers: { "Content-Type": "application/json" }
    //   })
    //   const user = await res.json()

    //   // If no error and we have user data, return it
    //   if (res.ok && user) {
    //     return user
    //   }
    //   // Return null if user data could not be retrieved
    //   return null
    }
  })
]