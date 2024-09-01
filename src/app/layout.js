import { DM_Sans } from "next/font/google";
import { ReduxProvider } from "@/providers/ReduxProvider";
import SearchProvider from "@/providers/SearchProvider";
import "./globals.css";
import MenuProvider from "@/providers/MenuProvider";

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
						<MenuProvider>
							<div className="w-full h-full">
								{children}
							</div>
						</MenuProvider>
					</SearchProvider>
				</ReduxProvider>
			</body>
    </html>
  );
}
