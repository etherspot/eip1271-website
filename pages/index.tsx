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
      <div className="relative w-full overflow-hidden">
        <div className="sm:col flex h-full w-full animate-[slide-down-fade_0.5s_ease-in-out]">
          <div className="absolute top-0 h-screen w-screen bg-[url('../public/VectorTop.png')] bg-cover opacity-50" />
          <div className="absolute right-0 top-0 h-screen w-screen bg-[url('../public/VectorBottom.png')] bg-cover opacity-50" />
          <div className="flex h-full w-full flex-col-reverse  items-center justify-center md:flex-row ">
            <div className="z-10 flex h-full w-full flex-col justify-between px-[3vh] sm:h-2/4 md:px-[12vh]">
              <p className="text-10xl font-bold text-white sm:text-title md:text-headertitle lg:text-headertitle">
                EIP-1271
              </p>
              <p className="font-regular text-7xl text-white">
                Standard Signature Validation <br /> Procedure for Contracts
              </p>
              <details className="font-regular text-5xl my-2 text-white">
                <summary
                  className="mt-9 mb-0.5 h-[50px] w-4/5 rounded-full px-1 py-3 text-white md:w-2/4 text-center cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(104.87deg, #FEDBB5 9.26%, #FD7F90 41.01%, #FD2D40 85.87%)",
                   
                  }}
                >
                  Why?
                </summary>
                <p className="mx-1 my-2 px-1 py-0.5 font-regular text-lg text-left text-white outline rounded-lg">
                  Currently, EOA wallets can sign messages, but smart contracts
                  cannot directly sign messages. With the rise of smart contract
                  wallets and DAOs controlled by multi-sig smart contracts, we
                  should integrate EIP-1271 in order to add message signing to
                  smart contracts.
                </p>
              </details>

              <button
                type="button"
                className="my-9 h-[50px] w-4/5 rounded-full px-1 text-white md:w-2/4"
                style={{
                  background:
                    "linear-gradient(104.87deg, #FEDBB5 9.26%, #FD7F90 41.01%, #FD2D40 85.87%)",
                }}
                onClick={() => openURL(REDIRECT.SHARE_WITH_FRIENDS)}
              >
                Share with your frens, anon
              </button>
              <p className="text-base font-thin italic text-white">
                Enhancing dApps UX through Account Abstraction wallets
              </p>
            </div>
            <div className="flex h-headerHeight w-full flex-col items-end justify-center">
              <div className="relative flex h-full w-full items-center justify-end overflow-hidden">
                <div className="absolute -right-[26vh] h-[55vh] w-[55vh] rotate-[5deg] transform rounded-[6vh] bg-white/30 backdrop-blur-sm transition-all md:-right-[15vh]">
                  <div className="-right-[15vh] h-full w-full rotate-[15deg] transform rounded-[6vh] bg-white/30 backdrop-blur-sm transition-all">
                    <div className="-right-[15vh] h-full w-full rotate-[50deg] transform rounded-[6vh] bg-white/30 backdrop-blur-sm transition-all">
                      <TopLeftRounded
                        className="-rotate-[70deg]"
                        type={HeaderType.Header}
                      >
                        <div className="absolute -left-[16vh] z-20 h-full w-full rounded-[45px] pt-[7vh]">
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
        <div className="z-10 flex h-full w-full animate-[slide-down-fade_0.5s_ease-in-out] flex-col items-center justify-center px-[2rem] py-[5vh] sm:px-[4rem] md:grid-cols-2 md:px-[6rem]">
          <div className="align-center z-10 flex h-1/5 flex-col justify-center pb-[5vh]">
            <p className="text-center text-8xl text-white">
              Since this is crucial for account abstraction, we want to
              encourage more dApps to integrate EIP-1271.
            </p>
          </div>
          <div className="z-10 flex grid w-full lg:grid-cols-2">
            <div className="my-3 flex w-full flex-col overflow-x-auto rounded-3xl lg:flex-row lg:rounded-r-[0px]">
              <table className="h-[40vh] w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-50  text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th
                      scope="col"
                      className="w-1/2 bg-green px-[10vh] py-4 text-left text-[17px] text-black"
                    >
                      Support EIP 1271
                    </th>
                  </tr>
                </thead>
                <tbody className="h-[7vh] bg-primary text-gray-700 dark:bg-purple dark:text-gray-400">
                  {dapps
                    .filter((x) => x.supportEIP1271 === "Yes")
                    .map((item, i) => {
                      return (
                        <tr>
                          <td
                            scope="row"
                            className={`border-x-[1px] py-3 font-medium lg:border-l-[0px] lg:border-r-[1px] ${
                              dapps.filter((x) => x.supportEIP1271 === "Yes")
                                .length -
                                1 !==
                              i
                                ? "border-b"
                                : ""
                            } whitespace-nowrap text-gray-900 dark:text-white`}
                          >
                            {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                            <div
                              className="flex w-full cursor-pointer flex-row items-center justify-center"
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
            <div className="my-3 flex w-full flex-col overflow-x-auto rounded-3xl lg:flex-row lg:rounded-l-[0px]">
              <table className="hidden h-[40vh] w-full text-left text-sm text-gray-500 dark:text-gray-400 lg:table">
                <thead className="bg-gray-50  text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th
                      scope="col"
                      className="w-1/2 bg-red px-[10vh] py-4 text-left text-[17px] text-black"
                    >
                      Don&apos;t Support EIP 1271
                    </th>
                  </tr>
                </thead>
                <tbody className="h-[7vh] bg-primary text-gray-700 dark:bg-purple dark:text-gray-400">
                  {dapps
                    .filter((x) => x.supportEIP1271 === "Yes")
                    .map((_item, i) => (
                      <tr>
                        <td
                          className={`border-x-[1px] py-3 font-medium lg:border-r-0 lg:border-l-[1px] ${
                            dapps.filter((x) => x.supportEIP1271 === "Yes")
                              .length -
                              1 !==
                            i
                              ? "border-b"
                              : ""
                          } whitespace-nowrap text-gray-900 dark:text-white`}
                        >
                          <div className="flex h-full w-full flex-row items-center justify-center">
                            <div
                              className="flex w-4/5 flex-row justify-between"
                              style={{ height: 30 }}
                            >
                              {dapps.filter((x) => x.supportEIP1271 === "No")[
                                i
                              ] ? (
                                <>
                                  {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                                  <div
                                    className="flex w-1/3 cursor-pointer items-center justify-between"
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
                                    className="flex w-1/4 cursor-pointer flex-row items-center justify-between"
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
                                    <p className="hidden px-3 text-xs font-thin normal-case text-white underline md:flex">
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
              <table className="table h-[40vh] w-full text-left text-sm text-gray-500 dark:text-gray-400 lg:hidden">
                <thead className="bg-gray-50  text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th
                      scope="col"
                      className="w-1/2 bg-red px-[8vh] py-4 text-left text-[17px] text-black"
                    >
                      Don&apos;t Support EIP 1271
                    </th>
                  </tr>
                </thead>
                <tbody className="h-[7vh] bg-primary text-gray-700 dark:bg-purple dark:text-gray-400">
                  {dapps
                    .filter((x) => x.supportEIP1271 === "No")
                    .map((item, i) => (
                      <tr>
                        <td
                          className={`border-x-[1px] py-3 font-medium lg:border-r-0  lg:border-l-[1px] ${
                            dapps.filter((x) => x.supportEIP1271 === "No")
                              .length -
                              1 !==
                            i
                              ? "border-b"
                              : ""
                          } whitespace-nowrap text-gray-900 dark:text-white`}
                        >
                          <div className="flex h-full w-full flex-row items-center justify-center">
                            <div
                              className="flex w-4/5 flex-row justify-between"
                              style={{ height: 30 }}
                            >
                              {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                              <div
                                className="flex w-1/3 cursor-pointer items-center justify-between"
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
                                className="flex w-1/4 cursor-pointer flex-row items-center justify-between"
                                onClick={() =>
                                  openURL(
                                    REDIRECT.ASK_TO_ADD(item?.twitterHandle),
                                  )
                                }
                              >
                                <Image src={twitterLogo} alt="" />
                                <p className="hidden px-3 text-xs font-thin normal-case text-white underline md:flex">
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
        <div className="flex h-full w-full animate-[slide-down-fade_0.5s_ease-in-out] items-center justify-center sm:justify-end sm:px-[12vh]">
          <button
            type="button"
            className="-mt-7 h-[50px] w-4/5 rounded-full text-white md:w-1/4"
            style={{
              background:
                "linear-gradient(104.87deg, #FEDBB5 9.26%, #FD7F90 41.01%, #FD2D40 85.87%)",
            }}
            onClick={() => openURL(REDIRECT.SUBMIT_PROJECT)}
          >
            Submit / Remove Project
          </button>
        </div>
        <div className="flex grid h-full w-full animate-[slide-down-fade_0.5s_ease-in-out] items-start justify-center px-[2rem] pt-[10vh] sm:px-[4rem] md:grid-cols-2 md:px-[6rem]">
          <div className="align-center flex flex-col justify-center">
            <TopLeftRounded className="justify-center" />
          </div>
          <div className="align-center flex h-full flex-col justify-center">
            <p className="text-title font-bold	text-white">
              How to implement EIP-1271?
            </p>
            <p className="text-lg py-4 leading-9 text-white">
              {" "}
              <br />
              There are npm packages that makes it easy for a dApps to add
              support for EIP 1271
              <br />
              <a className="font-bold"> npm install </a>{" "}
              <a
                className="cursor-pointer font-bold"
                onClick={() => openURL(REDIRECT.ETHERSPOT_EIP1271_MODULE)}
              >
                {" "}
                @etherspot/eip1271-verification-util{" "}
              </a>
              <br />
              or
              <br />
              <a className="font-bold"> npm install </a>{" "}
              <a
                className="cursor-pointer font-bold"
                onClick={() => openURL(REDIRECT.SIGNATURE_VALIDATOR)}
              >
                @ambire/signature-validator{" "}
              </a>
              <br />
              or
              <br />
              <a
                className="cursor-pointer font-bold"
                onClick={() => openURL(REDIRECT.EIP1271_UTIL)}
              >
                Sequence&apos;s EIP1271 util{" "}
              </a>
              <br />
              <br />
              You can find example code in{" "}
              <a
                className="cursor-pointer font-bold"
                onClick={() => openURL(REDIRECT.ETHERSPOT_EIP1271_MODULE)}
              >
                this repo
              </a>
              <br />
            </p>
          </div>
        </div>
        <Ellipse />

        <div className="z-10 flex h-full w-full animate-[slide-down-fade_0.5s_ease-in-out] flex-col items-start items-center px-[2rem] sm:px-[4rem] md:grid-cols-2 md:px-[6rem]">
          <div className="flex h-full flex-col  justify-center">
            <p className="text-title font-bold text-white">FAQ</p>
          </div>
          <div className="z-10 h-full w-full py-12">
            <FAQ />
          </div>
        </div>
        <div className="flex grid h-full w-full animate-[slide-down-fade_0.5s_ease-in-out] items-start px-[2rem] py-[10vh] sm:px-[4rem] md:grid-cols-2 md:px-[6rem]">
          <div className="flex h-full flex-col  items-center justify-center">
            <TopRightRounded />
          </div>
          <div className="flex h-full flex-col items-center justify-center">
            <div className="flex h-3/5 flex-col justify-between">
              <p className="text-title font-bold	text-white">
                Have a Question ?
              </p>
              {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
              <p
                className="text-lg cursor-pointer text-white underline"
                onClick={() => openURL(REDIRECT.ASK_ON_DISCORD)}
              >
                Ask on Discord
              </p>
            </div>
          </div>
        </div>
        <div className="flex grid h-full w-full animate-[slide-down-fade_0.5s_ease-in-out] items-start md:grid-cols-2 ">
          <div className="flex h-full flex-col justify-center px-[2rem] py-[10vh] sm:px-[4rem] md:px-[6rem]">
            <div className="flex h-full flex-col items-start justify-center py-10">
              <div className="pb-[20vh]">
                <p className="text-footertitle font-thin text-white">
                  Powered by
                </p>
                <p className="text-lg text-footertitle text-white">
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
                  className="cursor-pointer text-footersubtitle text-white"
                  onClick={() => router.push("mailto:hello@eip1271.io")}
                >
                  hello@eip1271.io
                </p>
                <p className="text-lg text-white">eip1271.eth</p>
              </div>
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-end justify-center">
            <div className="relative flex h-full w-full items-center justify-end overflow-hidden">
              <div className="absolute -bottom-[30vh] h-[80vh] w-[70vh] rotate-[5deg] transform rounded-[70px]  bg-white/[.1] backdrop-blur-[26.5px] transition-all">
                <div className="h-full w-full  rotate-[15deg] transform rounded-[70px] bg-white/[.1] backdrop-blur-[26.5px] transition-all">
                  <div className="h-full w-full  rotate-[50deg] transform rounded-[70px]  bg-white/[.1] backdrop-blur-[26.5px] transition-all" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
