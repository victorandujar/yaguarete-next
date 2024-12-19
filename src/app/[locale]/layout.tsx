import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { DM_Sans, Nunito_Sans } from "next/font/google";
import { getMessages } from "../helpers/getMessages";
import { Layout } from "../components/Layout/Layout";
import "../globals.css";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
  variable: "--font-dmSans",
});

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "900", "200"],
  variable: "--font-nunitoSans",
});

export const metadata = {
  title: "Yaguarete",
  description: "Alimenta tu cuerpo y tu alma bajo el sol de la selva",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;

  const messages = await getMessages(locale, notFound);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${dm_sans.variable} ${nunito_sans.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
