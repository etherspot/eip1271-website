import { ReactNode } from "react";

const BottomRightRounded: React.FC<{
	className?: string;
	children?: ReactNode;
}> = ({ className = "", children }) => (
	<div className={`flex flex-col h-full w-full items-start ${className}`}>
		<div className="flex bg-purple w-[30vh] h-[30vh] md:w-[40vh] md:h-[40vh] sm:h-[20vh] sm:w-[20vh] lg:w-[40vh] lg:h-[45vh]  rounded-tl-[3vh] rounded-tr-[3vh] rounded-bl-[3vh] rounded-br-[15vh] items-start justify-center">
			<div className="w-[25vh] h-[23vh] md:h-[38vh] md:w-[35vh] sm:h-[18vh] sm:w-[15vh] lg:w-[35vh] lg:h-[43vh] rounded-tl-[3vh]  rounded-tr-[3vh] rounded-bl-[3vh] rounded-br-[15vh] bg-white bg-[url('../public/bottomRightImage.png')] bg-cover">
				{children}
			</div>
		</div>
	</div>
);
export default BottomRightRounded;
