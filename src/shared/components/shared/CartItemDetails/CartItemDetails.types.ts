import { Diameter, WheelColor } from "@prisma/client";

export interface CartItemProps {
	id: number;
	imageUrl: string;
	color: WheelColor;
	diameters: string[];
	name: string;
	price: number;
	quantity: number;
	disabled?: boolean;
}
