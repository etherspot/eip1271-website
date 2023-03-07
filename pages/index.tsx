/* eslint-disable react/jsx-key */
import Layout from "@/components/layout";
import TopLeftRounded, { HeaderType } from "@/components/TopLeftRounded";
import BottomRightRounded from "@/components/BottomRightRounded";
import TopRightRounded from "@/components/TopRightRounded";
import FAQ from "@/components/FAQ";
import Ellipse from "@/components/Ellipse";
import dapps from "../static/dapps.json";
import twitterLogo from "../public/twitterLogo.svg";
import Image from "next/image";
import twitterPost from "../public/twitter.png";
import REDIRECT from "helpers/constants";
import { useRouter } from "next/router";
export default function Home() {
	const router = useRouter();
	const openURL = (payload: string) => window.open(payload);
	const getImage = (image: string) =>
		image ? require(`../public/dappfavicons/${image}`) : "";

	return (
		<Layout>
			<div className="w-full relative overflow-hidden">
				<div className="flex sm:col w-full h-full animate-[slide-down-fade_0.5s_ease-in-out]">
					<div className="absolute bg-[url('../public/VectorTop.png')] w-screen h-screen bg-cover opacity-50 top-0" />
					<div className="absolute bg-[url('../public/VectorBottom.png')] w-screen h-screen right-0 bg-cover opacity-50 top-0" />
					<div className="flex w-full h-full flex-col-reverse  md:flex-row justify-center items-center ">
						<div className="flex flex-col w-full h-full sm:h-2/4 justify-between px-[3vh] md:px-[12vh] z-10">
							<p className="text-10xl sm:text-title md:text-headertitle lg:text-headertitle text-white font-bold">
								EIP-1271
							</p>
							<p className="text-7xl text-white font-regular">
								Standard Signature Validation <br /> Procedure for Contracts
							</p>
							<button
								type="button"
								className="my-9 h-[50px] w-4/5 md:w-2/4 rounded-full text-white"
								style={{
									background:
										"linear-gradient(104.87deg, #FEDBB5 9.26%, #FD7F90 41.01%, #FD2D40 85.87%)",
								}}
								onClick={() => openURL(REDIRECT.SHARE_WITH_FRIENDS)}
							>
								Share with your frens, anon
							</button>
							<p className="text-base text-white font-thin italic">
								Enhancing dApps UX through Account Abstraction wallets
							</p>
						</div>
						<div className="flex flex-col items-end justify-center w-full h-headerHeight">
							<div className="relative flex w-full h-full justify-end items-center overflow-hidden">
								<div className="absolute h-[55vh] w-[55vh] -right-[26vh] md:-right-[15vh] bg-white/30 transform transition-all rounded-[6vh] rotate-[5deg] backdrop-blur-sm">
									<div className="h-full w-full bg-white/30 transform transition-all rounded-[6vh] rotate-[15deg] -right-[15vh] backdrop-blur-sm">
										<div className="h-full w-full bg-white/30 transform transition-all rounded-[6vh] rotate-[50deg] -right-[15vh] backdrop-blur-sm">
											<TopLeftRounded
												className="-rotate-[70deg]"
												type={HeaderType.Header}
											>
												<div className="absolute w-full h-full -left-[16vh] rounded-[45px] pt-[7vh]">
													<Image
														className="cursor-pointer"
														onClick={() => openURL(REDIRECT.VITALIK_TWEET)}
														src={twitterPost}
														alt=""
														width={330}
														loading="eager"
													/>
												</div>
											</TopLeftRounded>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full h-full animate-[slide-down-fade_0.5s_ease-in-out] md:grid-cols-2 items-center justify-center px-[2rem] sm:px-[4rem] md:px-[6rem] py-[5vh] z-10">
					<div className="flex flex-col h-1/5 justify-center align-center pb-[5vh] z-10">
						<p className="text-8xl text-white text-center">
							Since this is crucial for account abstraction, we want to
							encourage more dApps to integrate EIP-1271.
						</p>
					</div>
					<div className="flex grid lg:grid-cols-2 w-full z-10">
						<div className="flex w-full flex-col lg:flex-row overflow-x-auto rounded-3xl lg:rounded-r-[0px] my-3">
							<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 h-[40vh]">
								<thead className="text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
									<tr>
										<th
											scope="col"
											className="px-[10vh] py-4 text-left bg-green text-black w-1/2 text-[17px]"
										>
											Support EIP 1271
										</th>
									</tr>
								</thead>
								<tbody className="text-gray-700 bg-primary dark:bg-purple dark:text-gray-400 h-[7vh]">
									{dapps
										.filter((x) => x.supportEIP1271 === "Yes")
										.map((item, i) => {
											return (
												<tr>
													<td
														scope="row"
														className={`py-3 font-medium border-x-[1px] lg:border-l-[0px] lg:border-r-[1px] ${
															dapps.filter((x) => x.supportEIP1271 === "Yes")
																.length -
																1 !==
															i
																? "border-b"
																: ""
														} text-gray-900 whitespace-nowrap dark:text-white`}
													>
														{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
														<div
															className="cursor-pointer flex flex-row items-center justify-center w-full"
															onClick={() =>
																window.open(item.dAppWebsite, "_blank")
															}
															style={{ maxHeight: 30 }}
														>
															<div className="flex w-1/3 justify-center">
																<Image
																	src={getImage(item.favIcon)}
																	alt=""
																	className="rounded-full"
																	style={{ width: 30, height: 30 }}
																/>
															</div>
															<div className="flex w-1/3 justify-center">
																<p className="text-white">{item.dappName}</p>
															</div>
														</div>
													</td>
												</tr>
											);
										})}
								</tbody>
							</table>
						</div>
						<div className="flex w-full flex-col lg:flex-row overflow-x-auto rounded-3xl lg:rounded-l-[0px] my-3">
							<table className="hidden lg:table w-full text-sm text-left text-gray-500 dark:text-gray-400 h-[40vh]">
								<thead className="text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
									<tr>
										<th
											scope="col"
											className="px-[10vh] py-4 text-left bg-red text-black w-1/2 text-[17px]"
										>
											Don&apos;t Support EIP 1271
										</th>
									</tr>
								</thead>
								<tbody className="text-gray-700 bg-primary dark:bg-purple dark:text-gray-400 h-[7vh]">
									{dapps
										.filter((x) => x.supportEIP1271 === "Yes")
										.map((_item, i) => (
											<tr>
												<td
													className={`py-3 font-medium border-x-[1px] lg:border-r-0 lg:border-l-[1px] ${
														dapps.filter((x) => x.supportEIP1271 === "Yes")
															.length -
															1 !==
														i
															? "border-b"
															: ""
													} text-gray-900 whitespace-nowrap dark:text-white`}
												>
													<div className="flex flex-row justify-center items-center w-full h-full">
														<div
															className="flex flex-row w-4/5 justify-between"
															style={{ height: 30 }}
														>
															{dapps.filter((x) => x.supportEIP1271 === "No")[
																i
															] ? (
																<>
																	{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
																	<div
																		className="cursor-pointer flex justify-between w-1/3 items-center"
																		onClick={() =>
																			window.open(
																				dapps.filter(
																					(x) => x.supportEIP1271 === "No",
																				)[i]?.dAppWebsite,
																				"_blank",
																			)
																		}
																	>
																		<Image
																			src={getImage(
																				dapps.filter(
																					(x) => x.supportEIP1271 === "No",
																				)[i]?.favIcon ?? "",
																			)}
																			alt=""
																			width={29}
																			height={29}
																			className="rounded-full"
																			style={{ width: 30, height: 30 }}
																		/>
																		<p className="w-4/5 text-white">
																			{
																				dapps.filter(
																					(x) => x.supportEIP1271 === "No",
																				)[i]?.dappName
																			}
																			&nbsp;
																		</p>
																	</div>
																	{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
																	<div
																		className="cursor-pointer flex flex-row justify-between w-1/4 items-center"
																		onClick={() =>
																			openURL(
																				REDIRECT.ASK_TO_ADD(
																					dapps.filter(
																						(x) => x.supportEIP1271 === "No",
																					)[i]?.twitterHandle,
																				),
																			)
																		}
																	>
																		<Image src={twitterLogo} alt="" />
																		<p className="hidden md:flex normal-case underline text-xs font-thin px-3 text-white">
																			Ask to add EIP-1271
																		</p>
																	</div>
																</>
															) : null}
														</div>
													</div>
												</td>
											</tr>
										))}
								</tbody>
							</table>
							<table className="table lg:hidden w-full text-sm text-left text-gray-500 dark:text-gray-400 h-[40vh]">
								<thead className="text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
									<tr>
										<th
											scope="col"
											className="px-[8vh] py-4 text-left bg-red text-black w-1/2 text-[17px]"
										>
											Don&apos;t Support EIP 1271
										</th>
									</tr>
								</thead>
								<tbody className="text-gray-700 bg-primary dark:bg-purple dark:text-gray-400 h-[7vh]">
									{dapps
										.filter((x) => x.supportEIP1271 === "No")
										.map((item, i) => (
											<tr>
												<td
													className={`py-3 font-medium border-x-[1px] lg:border-r-0  lg:border-l-[1px] ${
														dapps.filter((x) => x.supportEIP1271 === "No")
															.length -
															1 !==
														i
															? "border-b"
															: ""
													} text-gray-900 whitespace-nowrap dark:text-white`}
												>
													<div className="flex flex-row justify-center items-center w-full h-full">
														<div
															className="flex flex-row w-4/5 justify-between"
															style={{ height: 30 }}
														>
															{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
															<div
																className="cursor-pointer flex justify-between w-1/3 items-center"
																onClick={() =>
																	window.open(item?.dAppWebsite, "_blank")
																}
															>
																<Image
																	src={getImage(item?.favIcon ?? "")}
																	alt=""
																	width={29}
																	height={29}
																	className="rounded-full"
																	style={{ width: 30, height: 30 }}
																/>
																<p className="w-4/5 text-white">
																	{item?.dappName}
																	&nbsp;
																</p>
															</div>
															{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
															<div
																className="cursor-pointer flex flex-row justify-between w-1/4 items-center"
																onClick={() =>
																	openURL(
																		REDIRECT.ASK_TO_ADD(item?.twitterHandle),
																	)
																}
															>
																<Image src={twitterLogo} alt="" />
																<p className="hidden md:flex normal-case underline text-xs font-thin px-3 text-white">
																	Ask to add EIP-1271
																</p>
															</div>
														</div>
													</div>
												</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className="flex w-full h-full animate-[slide-down-fade_0.5s_ease-in-out] items-center justify-center sm:justify-end sm:px-[12vh]">
					<button
						type="button"
						className="-mt-7 h-[50px] w-4/5 md:w-1/4 rounded-full text-white"
						style={{
							background:
								"linear-gradient(104.87deg, #FEDBB5 9.26%, #FD7F90 41.01%, #FD2D40 85.87%)",
						}}
						onClick={() => openURL(REDIRECT.SUBMIT_PROJECT)}
					>
						Submit / Remove Project
					</button>
				</div>
				<div className="flex grid w-full h-full animate-[slide-down-fade_0.5s_ease-in-out] md:grid-cols-2 items-start justify-center px-[2rem] sm:px-[4rem] md:px-[6rem] pt-[10vh]">
					<div className="flex flex-col justify-center align-center">
						<TopLeftRounded className="justify-center" />
					</div>
					<div className="flex flex-col justify-center align-center h-full">
						<p className="text-title text-white	font-bold">How to implement EIP-1271?</p>
						<p className="text-lg text-white leading-9 py-4">						<br />
						There are npm packages that makes it easy for a dApps to add support for EIP 1271
						<br />
						<a className="font-bold"> npm install </a> <a className="cursor-pointer font-bold" onClick={() => openURL(REDIRECT.ETHERSPOT_EIP1271_MODULE)}> @etherspot/eip1271-verification-util </a>
						<br />
						or
						<br />
					
						<a className="font-bold"> npm install </a> <a className="cursor-pointer font-bold" onClick={() => openURL(REDIRECT.SIGNATURE_VALIDATOR)}>@ambire/signature-validator </a>
						<br />
						or
						<br />
					
						<a className="cursor-pointer font-bold" onClick={() => openURL(REDIRECT.EIP1271_UTIL)}>Sequence&apos;s EIP1271 util </a>
						<br />
						<br />
						You can find example code in <a className="cursor-pointer font-bold" onClick={() => openURL(REDIRECT.ETHERSPOT_EIP1271_MODULE)}>this repo</a> 
						<br />
						</p>
					</div>
				</div>
				<Ellipse />


				<div className="flex flex-col w-full items-center h-full animate-[slide-down-fade_0.5s_ease-in-out] md:grid-cols-2 items-start px-[2rem] sm:px-[4rem] md:px-[6rem] z-10">
					<div className="flex flex-col justify-center  h-full">
						<p className="text-title text-white font-bold">FAQ</p>
					</div>
					<div className="w-full h-full py-12 z-10">
						<FAQ />
					</div>
				</div>
				<div className="flex grid w-full h-full animate-[slide-down-fade_0.5s_ease-in-out] md:grid-cols-2 items-start px-[2rem] sm:px-[4rem] md:px-[6rem] py-[10vh]">
					<div className="flex flex-col justify-center  h-full items-center">
						<TopRightRounded />
					</div>
					<div className="flex flex-col justify-center items-center h-full">
						<div className="flex flex-col justify-between h-3/5">
							<p className="text-title text-white	font-bold">
								Have a Question ?
							</p>
							{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<p
								className="text-lg text-white underline cursor-pointer"
								onClick={() => openURL(REDIRECT.ASK_ON_DISCORD)}
							>
								Ask on Discord
							</p>
						</div>
					</div>
				</div>
				<div className="flex grid w-full h-full animate-[slide-down-fade_0.5s_ease-in-out] md:grid-cols-2 items-start ">
					<div className="flex flex-col justify-center h-full px-[2rem] sm:px-[4rem] md:px-[6rem] py-[10vh]">
						<div className="flex flex-col justify-center items-start h-full py-10">
							<div className="pb-[20vh]">
								<p className="text-white text-footertitle font-thin">
									Powered by
								</p>
								<p className="text-lg text-white text-footertitle">
									<button onClick={() => openURL(REDIRECT.ETHERSPOT)}>
										Etherspot
									</button>
									{" & "}
									<button onClick={() => openURL(REDIRECT.PILLAR)}>
										Pillar Wallet
									</button>
								</p>
							</div>
							<div>
								{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<p
									className="text-white text-footersubtitle cursor-pointer"
									onClick={() => router.push("mailto:hello@eip1271.io")}
								>
									hello@eip1271.io
								</p>
								<p className="text-lg text-white">eip1271.eth</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-end justify-center w-full h-full">
						<div className="relative flex w-full h-full justify-end items-center overflow-hidden">
							<div className="absolute h-[80vh] w-[70vh] -bottom-[30vh] bg-white/[.1] transform transition-all  rounded-[70px] rotate-[5deg] backdrop-blur-[26.5px]">
								<div className="h-full w-full  bg-white/[.1] transform transition-all rounded-[70px] rotate-[15deg] backdrop-blur-[26.5px]">
									<div className="h-full w-full  bg-white/[.1] transform transition-all  rounded-[70px] rotate-[50deg] backdrop-blur-[26.5px]" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
