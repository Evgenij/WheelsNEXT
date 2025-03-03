import { cn } from "@/shared/lib/utils";
import { Diameter, WheelColor } from "@prisma/client";

interface Props {
	name: string;
	className?: string;
	color: WheelColor;
	diameters: string[];
}

export const CartItemInfo: React.FC<Props> = ({
	name,
	diameters,
	color,
	className,
}) => {
	return (
		<div>
			<div
				className={cn(
					"flex flex-col items-start justify-start mb-3",
					className
				)}
			>
				<h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
				<span className="text-gray-500">{color}</span>
			</div>
			{diameters && (
				<p className="text-xs text-gray-400">{diameters.join(", ")}</p>
			)}
		</div>
	);
};
