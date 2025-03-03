import { cn } from "@/shared/lib/utils";
import React, { FC } from "react";
import { Button } from "../ui";

interface Props {
	className?: string;
	value: number;
	handleChange: (value: number) => void;
}

export const Counter: FC<Props> = ({ className, value, handleChange }) => {
	// handlers
	const handlerClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const typeEvent = (event.target as HTMLInputElement).name;

		if (typeEvent === "plus") {
			handleChange(value + 1);
		} else if (typeEvent === "minus") {
			if (value !== 1) {
				handleChange(value - 1);
			}
		}
	};

	return (
		<div className={cn("flex flex-col space-y-1 w-fit", className)}>
			<div className="flex items-center bg-gray-100">
				<Button
					onClick={handlerClick}
					name="minus"
					disabled={value === 1}
				>
					-
				</Button>
				<div className="w-10 text-center">{value}</div>
				<Button onClick={handlerClick} name="plus">
					+
				</Button>
			</div>
			<span
				className="text-sm cursor-pointer hover:text-black text-slate-700 underline"
				onClick={() => handleChange(4)}
			>
				Complect [x4]
			</span>
		</div>
	);
};
