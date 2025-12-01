import AppThemeProvider from "@/theme/theme-provider";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";
import NotificationsProvider from "@/hooks/useNotifications/NotificationsProvider";
import DialogsProvider from "@/hooks/useDialogs/DialogsProvider";
import Head from "next/head";

export const metadata = {
  title: "پنل مدیریت | فروشگاه اینترنتی امیران واچ",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
       <Head>
        <link rel="manifest" href="/images/favicon/manifest.json" />
        <meta
          name="msapplication-TileImage"
          content="/images/favicon/ms-icon-144x144.png"
        />
      </Head>

      <body style={{ minHeight: "100vh" }}>
        <StoreProvider>
          <AppThemeProvider>
            <NotificationsProvider>
              <DialogsProvider>{children}</DialogsProvider>
            </NotificationsProvider>
          </AppThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
