import { getAssetContent } from "@/lib/content";
import { useState } from "react";

export const CornrowsCreate1 = () => {
	const plaitImg = getAssetContent("cornrows/create/plait.png");
	const braidImg = getAssetContent("cornrows/create/math-1.png");
	const braidImgHover = getAssetContent("cornrows/create/math-2.png");
	const braidImgClick = getAssetContent("cornrows/create/math-3.png");

	const [imgState, setImgState] = useState<"normal" | "hover" | "clicked">("normal");

	let currentImg = braidImg;
	if (imgState === "hover") {
		currentImg = braidImgHover;
	} else if (imgState === "clicked") {
		currentImg = braidImgClick;
	}

	const handleImgClick = () => {
		setImgState((prev) => (prev === "clicked" ? "normal" : "clicked"));
	};

	return (
		<div id="p0" className="w-full dark:bg-accent bg-white  rounded-lg shadow p-6 flex flex-col md:flex-row gap-8">
			<div className="flex-1 flex flex-col">
				<h1 className="text-2xl font-bold mb-1">How to Create Braids</h1>
				<p className="text-lg mb-3">
					Lesson 1: <strong>Introduction</strong>
				</p>
				<hr className="my-4" />
				<div className="flex flex-col gap-4">
					<p>
						When braiders create cornrow patterns, they use four geometric concepts: translation, rotation, reflection,
						and dilation. This tutorial will explain how these geometric concepts are used by braiders, and show how
						they can be applied to create simulations of cornrow hairstyles in this software.
					</p>
					<p>Each cornrow braid is made up of a series of y-shaped twists or &quot;plaits&quot;.</p>
					<div className="flex flex-row mt-1 mb-2">
						<div className="flex-shrink-0 w-16">
							<img src={plaitImg} alt="Plait" className="rounded-md w-12 h-auto" />
						</div>
					</div>
					<p>
						Above the image of the real braid, you can see a simulated braid. How many plaits do you guess are in the
						simulated braid? Write down your guess in your notebook and then click on the braid for the answer. Then
						continue to the next lesson.
					</p>
				</div>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				<img
					src={currentImg}
					alt="Simulated braid"
					id="intro-img"
					className="rounded-md max-w-xs w-full h-auto cursor-pointer"
					onMouseEnter={() => imgState !== "clicked" && setImgState("hover")}
					onMouseLeave={() => imgState !== "clicked" && setImgState("normal")}
					onClick={handleImgClick}
				/>
			</div>
		</div>
	);
};
