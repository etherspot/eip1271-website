import { ReactNode } from "react";

export interface ILeftRouned {
	className?: string;
	children?: ReactNode;
	type?: HeaderType;
}
export enum HeaderType {
	Header = "Header",
	Default = "Default",
}
export const headerClass = {
	[HeaderType.Header]: {
		parent:
			"w-[50vh] h-[40vh] md:w-[50vh] md:h-[40vh] rounded-tl-[15vh] rounded-tr-[3vh] rounded-bl-[3vh] flex bg-purple rounded-br-[3vh] justify-end items-center",
		child:
			"w-[93%] h-[84%] rounded-tl-[15vh] rounded-tr-[3vh] rounded-bl-[3vh] rounded-br-[3vh] bg-white bg-[url('../public/mymind-tZCrFpSNiIQ-unsplash.png')] bg-cover",
	},
	[HeaderType.Default]: {
		parent:
			"flex bg-purple w-[40vh] h-[40vh] md:w-[50vh] md:h-[50vh] sm:h-[30vh] sm:w-[30vh] lg:w-[55vh] lg:h-[55vh]  rounded-tl-[15vh] rounded-tr-[3vh] rounded-bl-[3vh] rounded-br-[3vh] justify-end items-center",
		child:
			"w-[35vh] h-[35vh] md:h-[45vh] md:w-[45vh] sm:h-[25vh] sm:w-[25vh] lg:w-[50vh] lg:h-[50vh] rounded-tl-[15vh]  rounded-tr-[3vh] rounded-bl-[3vh] rounded-br-[3vh] bg-white bg-[url('../public/mymind-tZCrFpSNiIQ-unsplash.png')] bg-cover",
	},
};
const LeftRounded: React.FC<ILeftRouned> = ({
	className,
	children,
	type = HeaderType.Default,
}) => (
	<div
		className={`flex flex-row h-full w-full items-center justify-between ${className}`}
	>
		<div className={headerClass[type].parent}>
			<div className={headerClass[type].child}>{children}</div>
		</div>
	</div>
);
export default LeftRounded;
