import { DM_Sans } from "next/font/google";
import { ReduxProvider } from "@/providers/ReduxProvider";
import SearchProvider from "@/providers/SearchProvider";
import "./globals.css";

const dm_sans = DM_Sans({
	subsets: ["latin"],
	display: 'swap',
});

export const metadata = {
  title: "audio-e-commerce",
  description: "e-commerce",
	viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
				<ReduxProvider>
					<SearchProvider>
						<div className="w-full h-full max-w-[1440px] mx-auto">
							{children}
						</div>
					</SearchProvider>
				</ReduxProvider>
			</body>
    </html>
  );
}
