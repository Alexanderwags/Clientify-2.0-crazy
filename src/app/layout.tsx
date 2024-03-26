"use client"; // This is a client component 👈🏽

import { Poppins } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.scss";
import { Provider } from "react-redux";
import store from "@clientify/app/redux/stores/Store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "@clientify/hooks/useTranslation";
import AuthProvider from "./context/AuthProvider";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { t } = useTranslation();

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("your-token-name");
    if (!token) {
      router.push("/signup");
    }
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={poppins.className}>
          <AuthProvider>
            <GoogleOAuthProvider clientId="304531247476-58f940f3b0dgrupg95cdo8b51fspupdv.apps.googleusercontent.com">
              <>
                <Provider store={store}>
                  {children}
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                </Provider>
              </>
            </GoogleOAuthProvider>
          </AuthProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
