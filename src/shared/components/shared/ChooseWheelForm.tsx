"use client";

import { cn } from "@/shared/lib/utils";
import React, { FC, useEffect, useState } from "react";
import { WheelImage } from "./WheelImage";
import { Title } from "./Title";
import { SelectorDiameter } from "./SelectorDiameter";
import { Button } from "../ui";
import { IWheelFullData } from "@/types/types";
import { Counter } from "./Counter";
import { diameters } from "@/types/constants";
import { Diameter } from "@prisma/client";

interface Props {
	className?: string;
	onClickAdd?: VoidFunction;
	wheel: IWheelFullData;
}

export const ChooseWheelForm: FC<Props> = ({
	className,
	onClickAdd,
	wheel,
}) => {
	const [selectedDiameters, setSelectedDiameters] = useState<number>(
		wheel.diameters[0].id
	);
	const [count, setCount] = useState<number>(4);
	const [cost, setCost] = useState<number>(wheel.price);

	const handleSelectDiameters = (id: number) => {
		setSelectedDiameters(id);
	};

	useEffect(() => {
		const dataDiameter = wheel.diameters.find(
			(diameter) => diameter.id === selectedDiameters
		);
		setCost(dataDiameter!.price * count + wheel.price);
	}, [selectedDiameters, cost, count]);

	return (
		<div className={cn(className, "flex")}>
			<WheelImage
				src={wheel.image}
				diameters={wheel.diameters.length}
				currentDiameter={1}
			/>
			<div className="p-4 py-3 flex-1 flex flex-col gap-4">
				<header>
					<Title
						text={wheel.name}
						size="md"
						className="font-extrabold"
					></Title>
					<Title
						text={wheel.color}
						size="xs"
						className="mb-1"
					></Title>
				</header>

				<div>
					<Title
						text="Sizes"
						size="xs"
						className="font-extrabold"
					></Title>
					<SelectorDiameter
						items={wheel.diameters.map((item) => ({
							id: item.id,
							value: item.name,
							name: item.name,
							cost: item.price,
						}))}
						selectedValue={selectedDiameters}
						onSelectItem={handleSelectDiameters}
					/>
				</div>

				<div>
					<Title
						text="Count"
						size="xs"
						className="font-extrabold"
					></Title>
					<Counter
						value={count}
						handleChange={(value) => setCount(value)}
					/>
				</div>
				<hr />
				<div className="text-2xl">
					<Title
						text="Cost"
						size="xs"
						className="font-extrabold"
					></Title>
					<span className="font-extrabold">{cost}</span> PLN
				</div>

				<Button className="w-full">Add to cart</Button>
			</div>
		</div>
	);
};
