import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SideQuest",
  description: "This is my practice Nextjs project with Pocketbase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
