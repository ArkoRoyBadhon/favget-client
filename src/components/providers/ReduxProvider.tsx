"use client";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { Inter } from "next/font/google";
import Providers from "./Providers";
const inter = Inter({ subsets: ["latin"] });

const ReduxProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </Provider>
  );
};

export default ReduxProvider;
