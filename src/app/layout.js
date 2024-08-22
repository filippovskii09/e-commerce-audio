import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/providers/ReduxProvider";

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
					{children}
				</ReduxProvider>
			</body>
    </html>
  );
}
