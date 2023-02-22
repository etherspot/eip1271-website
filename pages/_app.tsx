import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Provider as RWBProvider } from "react-wrap-balancer";
import cx from "classnames";
import localFont from "@next/font/local";
import { Cabin } from "@next/font/google";

const sfPro = localFont({
	src: "../styles/SF-Pro-Display-Medium.otf",
	variable: "--font-sf",
});

const cabin = Cabin({
	variable: "--font-cabin",
	subsets: ["latin"],
});

export default function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
	return (
		<RWBProvider>
			<div className={cx(sfPro.variable, cabin.variable)}>
				<Component {...pageProps} />
			</div>
		</RWBProvider>
	);
}
