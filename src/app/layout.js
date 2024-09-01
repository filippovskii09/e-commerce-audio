import { DM_Sans } from "next/font/google";
import { ReduxProvider } from "@/providers/ReduxProvider";
import "./globals.css";
import SearchProvider from "@/providers/SearchProvider";

const dm_sans = DM_Sans({
	subsets: ["latin"],
	display: 'swap',
});

export const metadata = {
  title: "audio-e-commerce",
  description: "e-commerce",
	viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
				<ReduxProvider>
					<SearchProvider>
						<div className="w-full h-full">
							{children}
						</div>
					</SearchProvider>
				</ReduxProvider>
			</body>
    </html>
  );
}
