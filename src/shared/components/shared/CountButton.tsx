import { cn } from "@/shared/lib/utils";
import React from "react";
import { CountIconButton } from "./CountIconButton";

export enum Action {
	Plus,
	Minus,
}

export interface CountButtonProps {
	value?: number;
	onClick?: (type: Action) => void;
	className?: string;
}

export const CountButton: React.FC<CountButtonProps> = ({
	className,
	onClick,
	value = 1,
}) => {
	return (
		<div
			className={cn(
				"inline-flex items-center justify-between gap-3",
				className
			)}
		>
			<CountIconButton
				onClick={() => onClick?.(Action.Minus)}
				disabled={value === 1}
				type={Action.Minus}
			/>
			<b>{value}</b>
			<CountIconButton
				onClick={() => onClick?.(Action.Plus)}
				type={Action.Plus}
			/>
		</div>
	);
};
