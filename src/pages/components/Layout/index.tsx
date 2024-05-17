import { ReactNode } from "react";
import AppSidebar from "../Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const RootLayout = ({
  children,
  navbarText,
}: {
  children: ReactNode;
  navbarText: string;
}) => {
  return (
    <main className={`${inter.className}`}>
      <AppSidebar navbarText={navbarText}>{children}</AppSidebar>;
    </main>
  );
};
