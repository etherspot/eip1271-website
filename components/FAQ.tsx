import { ReactNode } from "react";
import faq from "@/static/faq.json";
import Collapse from "./Collapse";
const FAQ: React.FC<{ className?: string; children?: ReactNode }> = ({
	className = "",
	children,
}) => (
	<div
		className={`flex flex-col h-full w-full items-center justify-between ${className}`}
	>
		<div className="flex bg-purple w-full h-full rounded-tl-[4vh] rounded-tr-[4vh] rounded-bl-[10vh] rounded-br-[4vh] justify-center items-end bg-white bg-[url('../public/faq-background.png')] bg-cover">
			<div className="-mt-7 -mr-10 py-10 mb-5 w-full h-full rounded-tl-[4vh]  rounded-tr-[4vh] rounded-bl-[10vh] rounded-br-[4vh] bg-purple">
				{faq.map((item, i, arr) => (
					<Collapse item={item} key={item.id} showHr={arr.length - 1 !== i} />
				))}
			</div>
		</div>
	</div>
);
export default FAQ;
