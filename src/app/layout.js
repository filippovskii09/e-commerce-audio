import { DM_Sans } from "next/font/google";
import { ReduxProvider } from "@/providers/ReduxProvider";
import "./globals.css";
import Header from "@/components/header/Header";

const dm_sans = DM_Sans({
	subsets: ["latin"],
	display: 'swap',
});

export const metadata = {
  title: "audio-e-commerce",
  description: "e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
				<ReduxProvider>
					<div className="w-full h-full">
						{children}
					</div>
				</ReduxProvider>
			</body>
    </html>
  );
}
