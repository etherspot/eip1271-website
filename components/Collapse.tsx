/* eslint-disable react/no-danger-with-children */
import { useState } from "react";

const Collapse: React.FC<{
	item: { id: number; title: string; content: string };
	showHr?: boolean;
}> = ({ item, showHr = true }) => {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

	const toggleCollapse = () => setIsCollapsed((prev) => !prev);
	return (
		<div className="flex flex-col py-1 px-[2vh] md:py-4 md:px-[8vh] text-white items-start">
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div className="w-full cursor-pointer" onClick={toggleCollapse}>
				<div className="flex flex-row text-white items-center">
					<p className="text-white pr-7 text-icon font-regular">
						{!isCollapsed ? "+" : "-"}
					</p>
					<p className="text-white font-bold" key={item.id}>
						{item.title}
					</p>
				</div>
				{isCollapsed && (
					<div className="px-9 py-3 animate-[slide-down-fade_0.5s_ease-in-out] cursor-default">
						{/* rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
						<p dangerouslySetInnerHTML={{ __html: item.content }} />
					</div>
				)}
				{showHr && <hr className="w-full  mt-7" />}
			</div>
		</div>
	);
};
export default Collapse;
