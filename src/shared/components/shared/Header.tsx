import { cn } from "@/shared/lib/utils";
import React from "react";
import Image from "next/image";
import { Button } from "@/shared/components/ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import { CartButton, Container } from "./index";
import Link from "next/link";
import { SearchInput } from "./index";

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn("border border-b", className)}>
			<Container className="flex items-center justify-between py-8 gap-10">
				<Link href="/">
					<div className="flex items-center space-x-3">
						<Image
							src="/logo.svg"
							alt="Logo"
							width={24}
							height={24}
						/>
						<div className="flex flex-col space-y-1">
							<h1 className="text-2xl uppercase font-black leading-none">
								NEXT Wheels
							</h1>
							<p className="text-xm text-gray-400 leading-4">
								For styling your car
							</p>
						</div>
					</div>
				</Link>
				<div className="flex-1">
					<SearchInput />
				</div>
				<div className="flex items-center gap-3">
					<Button
						variant="outline"
						className="flex items-center gap-1"
					>
						{" "}
						<User size={16} />
						Login
					</Button>

					<CartButton />
				</div>
			</Container>
		</header>
	);
};
