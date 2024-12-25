import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	// metadataBase: new URL(""),
	title: "The Jalpaiguri Government Engineering College.",
	description:
		"The alumini association of Jalpaiguri Government Engineering College.",
	keywords:
		"Jalpaiguri Government Engineering College, JGEC, JGEC alumini assosiation",
	openGraph: {
		title: "The Jalpaiguri Government Engineering College.",
		description:
			"The alumini association of Jalpaiguri Government Engineering College.",
		// url: 'https://cfi-jgec-new.vercel.app',
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
