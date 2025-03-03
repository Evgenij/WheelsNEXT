import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/shared/lib/utils";
import { Action } from "./CountButton";

interface IconButtonProps {
	disabled?: boolean;
	type?: Action;
	onClick?: () => void;
}

export const CountIconButton: React.FC<IconButtonProps> = ({
	disabled,
	type,
	onClick,
}) => {
	return (
		<Button
			variant="outline"
			disabled={disabled}
			onClick={onClick}
			type="button"
			className={cn(
				"p-0 hover:bg-primary hover:text-white disabled:bg-white disabled:border-gray-400 disabled:text-gray-400 h-6 w-6"
			)}
		>
			{type === Action.Plus ? <Plus size={16} /> : <Minus size={16} />}
		</Button>
	);
};
