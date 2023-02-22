import { ReactNode } from "react";

const TopRightRounded: React.FC<{ className?: string; children?: ReactNode }> =
	({ className = "", children }) => (
		<div
			className={`flex flex-col h-full w-full items-center justify-between ${className}`}
		>
			<div className="flex bg-purple w-[40vh] h-[20vh] md:w-[40vh] md:h-[30vh] sm:h-[25vh] sm:w-[30vh] lg:w-[40vh] lg:h-[25vh]  rounded-tl-[3vh] rounded-tr-[15vh] rounded-bl-[3vh] rounded-br-[3vh] justify-center items-end">
				<div className="w-[35vh] h-[18vh] md:h-[28vh] md:w-[35vh] sm:h-[20vh] sm:w-[25vh] lg:w-[35vh] lg:h-[23vh] rounded-tl-[3vh]  rounded-tr-[15vh] rounded-bl-[3vh] rounded-br-[3vh] bg-white bg-[url('../public/topRightImage.png')] bg-cover">
					{children}
				</div>
			</div>
		</div>
	);
export default TopRightRounded;
