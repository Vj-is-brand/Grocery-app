import { Roboto } from "next/font/google";
import "./styles/globals.css";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weights: "300",
// });
export const metadata = {
  title: "Grocery App",
  description: "Welcome to my grocery store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
