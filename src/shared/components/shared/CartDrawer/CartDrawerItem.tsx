import { cn } from "@/shared/lib/utils";
import React, { FC } from "react";
import * as CartItemElements from "../CartItemDetails";
import { CartItemProps } from "../CartItemDetails/CartItemDetails.types";
import { CountButton } from "../CountButton";
import { Trash2Icon } from "lucide-react";

interface Props extends CartItemProps {
	// onClickCountButton;
	// onClickRemove;
	className?: string;
}

export const CartDrawerItem: FC<Props> = ({
	imageUrl,
	name,
	color,
	diameters,
	quantity,
	disabled,
	price,
	className,
}) => {
	return (
		<div
			className={cn(
				"flex bg-white p-5 gap-6",
				{
					"opacity-50 pointer-events-none": disabled,
				},
				className
			)}
		>
			<CartItemElements.Image src={imageUrl} />
			<div className="flex-1">
				<CartItemElements.Info
					name={name}
					diameters={diameters}
					color={color}
				/>
				<hr className="my-3" />
				<div className="flex justify-between items-center">
					<CountButton value={quantity} />
					<div className="flex items-center gap-3">
						<CartItemElements.Price value={price} />
						<Trash2Icon
							className="text-gray-400 cursor-pointer hover:text-gray-600"
							size={16}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
