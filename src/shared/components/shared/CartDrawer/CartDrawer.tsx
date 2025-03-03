"use client";

import React from "react";
import Image from "next/image";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/shared/components/ui/sheet";
import Link from "next/link";
import { Button } from "../../ui/button";
import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import { Title } from "../Title";
import { cn } from "@/shared/lib/utils";
import { CartDrawerItem } from "./CartDrawerItem";
import { Action } from "../CountButton";

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [redirecting, setRedirecting] = React.useState(false);

	const onClickCountButton = (id: number, quantity: number, type: Action) => {
		const newQuantity = type === Action.Plus ? quantity + 1 : quantity - 1;
		// updateItemQuantity(id, newQuantity);
	};

	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>

			<SheetContent className="flex flex-col justify-between pb-0 bg-slate-100">
				<div className={cn("flex flex-col h-full")}>
					<SheetHeader>
						<SheetTitle>
							In cart
							<span className="font-bold text-primary">
								{" "}
								3 products
							</span>
						</SheetTitle>
					</SheetHeader>

					<div className="-mx-6 mt-5 overflow-y-auto scrollbar flex flex-col gap-2 flex-1">
						<CartDrawerItem
							color="Gold"
							diameters={["13", "14"]}
							name="Name"
							imageUrl="/pictures/wheels/pol_pl_4x-Felgi-19-5x120-m-in-do-BMW-3-E46-E90-E91-E92-E93-F30-F31-4-F32-F33-F36-Z4-E89-B5601-91319_1.png"
							quantity={1}
							price={1000}
							id={1}
						/>
						<CartDrawerItem
							color="Gold"
							diameters={["13", "14"]}
							name="Name"
							imageUrl="/pictures/wheels/pol_pl_4x-Felgi-19-5x120-m-in-do-BMW-3-E46-E90-E91-E92-E93-F30-F31-4-F32-F33-F36-Z4-E89-B5601-91319_1.png"
							quantity={1}
							price={1000}
							id={1}
						/>
						<CartDrawerItem
							color="Gold"
							diameters={["13", "14"]}
							name="Name"
							imageUrl="/pictures/wheels/pol_pl_4x-Felgi-19-5x120-m-in-do-BMW-3-E46-E90-E91-E92-E93-F30-F31-4-F32-F33-F36-Z4-E89-B5601-91319_1.png"
							quantity={1}
							price={1000}
							id={1}
						/>
						<CartDrawerItem
							color="Gold"
							diameters={["13", "14"]}
							name="Name"
							imageUrl="/pictures/wheels/pol_pl_4x-Felgi-19-5x120-m-in-do-BMW-3-E46-E90-E91-E92-E93-F30-F31-4-F32-F33-F36-Z4-E89-B5601-91319_1.png"
							quantity={1}
							price={1000}
							id={1}
						/>
						<CartDrawerItem
							color="Gold"
							diameters={["13", "14"]}
							name="Name"
							imageUrl="/pictures/wheels/pol_pl_4x-Felgi-19-5x120-m-in-do-BMW-3-E46-E90-E91-E92-E93-F30-F31-4-F32-F33-F36-Z4-E89-B5601-91319_1.png"
							quantity={1}
							price={1000}
							id={1}
						/>
					</div>

					<div className="flex flex-col h-full items-center justify-center w-72 mx-auto">
						<ShoppingCart width={120} />
						<Title
							size="sm"
							text="The cart is empty"
							className="text-center font-bold my-2"
						/>
						<p className="text-center text-neutral-500 mb-5">
							Add only one product yet for creating order
						</p>

						<SheetClose>
							<Button className="w-56 h-12 text-base" size="lg">
								<ArrowLeft className="w-5 mr-2" />
								Back
							</Button>
						</SheetClose>
					</div>
				</div>

				<SheetFooter className="-mx-6 bg-white p-8">
					<div className="w-full">
						<div className="flex mb-4">
							<span className="flex flex-1 text-lg text-neutral-500">
								Total
								<div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
							</span>

							<span className="font-bold text-lg">1000 PLN</span>
						</div>

						<Link href="/cart">
							<Button
								onClick={() => setRedirecting(true)}
								loading={redirecting}
								type="submit"
								className="w-full h-12 text-base"
								disabled
							>
								Create order
								<ArrowRight className="w-5 ml-2" />
							</Button>
						</Link>
					</div>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};
