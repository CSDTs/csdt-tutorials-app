import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from "react";
import { Braid } from "./Braid";
import "./CornrowsCanvas.css";

interface CornrowsCanvasProps {
	braids: Braid[];
	currentBraidIndex: number;
	hideGrid: boolean;
	hideHighlight: boolean;
	showVector: boolean;
	hideEncryptedOption: boolean;
	showCoordinatesInCorner: boolean;
	onBraidClick: (index: number) => void;
	onMouseMove: (x: number, y: number) => void;
	onMouseLeave: () => void;
	width?: number;
	height?: number;
}

export interface CornrowsCanvasRef {
	redrawCanvas: () => void;
	getCanvas: () => HTMLCanvasElement | null;
}

export const CornrowsCanvas = forwardRef<CornrowsCanvasRef, CornrowsCanvasProps>(
	(
		{
			braids,
			currentBraidIndex,
			hideGrid,
			hideHighlight,
			showVector,
			hideEncryptedOption,

			onBraidClick,
			onMouseMove,
			onMouseLeave,
			width = 400,
			height = 400,
		},
		ref
	) => {
		const canvasRef = useRef<HTMLCanvasElement>(null);

		const drawGrid = useCallback(
			(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {
				if (hideGrid) return;

				ctx.beginPath();
				ctx.lineWidth = 1;
				ctx.strokeStyle = "#8e8e8e55";

				for (let i = canvasWidth / 2; i >= 0; i -= 10) {
					ctx.moveTo(i, 0);
					ctx.lineTo(i, canvasHeight);
					ctx.moveTo(0, i);
					ctx.lineTo(canvasWidth, i);
					ctx.moveTo(canvasWidth - i, 0);
					ctx.lineTo(canvasWidth - i, canvasHeight);
					ctx.moveTo(0, canvasWidth - i);
					ctx.lineTo(canvasWidth, canvasWidth - i);
				}
				ctx.closePath();
				ctx.stroke();

				// Draws the X and Y axis
				ctx.strokeStyle = "#000";
				ctx.lineWidth = 1;
				ctx.beginPath();
				ctx.moveTo(canvasWidth / 2, 0);
				ctx.lineTo(canvasWidth / 2, canvasHeight);
				ctx.moveTo(0, canvasHeight / 2);
				ctx.lineTo(canvasWidth, canvasHeight / 2);
				ctx.closePath();
				ctx.stroke();
			},
			[hideGrid]
		);

		const drawBraids = useCallback(() => {
			// Set global state for braids
			Braid.showVector = showVector;
			Braid.hideEncryptedOption = hideEncryptedOption;

			for (let i = 0; i < braids.length; i++) {
				const braid = braids[i];

				// Highlight current braid if not hiding highlight
				if (i === currentBraidIndex && !hideHighlight) {
					const yReflection = braid.reflection.includes("y");
					const xReflection = braid.reflection.includes("x");

					braid
						.clone()
						.translate(-5 * (yReflection ? -1 : 1), -5 * (xReflection ? -1 : 1), 0, false)
						.dilate(110)
						.stamp("#FF0000", 12 / 70);
				}

				braid.iterate();
			}
		}, [braids, currentBraidIndex, hideHighlight, showVector, hideEncryptedOption]);

		const redrawCanvas = useCallback(() => {
			const canvas = canvasRef.current;
			if (!canvas) return;

			const ctx = canvas.getContext("2d");
			if (!ctx) return;

			const canvasWidth = canvas.width;
			const canvasHeight = canvas.height;

			// Clear canvas
			ctx.clearRect(0, 0, canvasWidth, canvasHeight);

			// Draw grid
			drawGrid(ctx, canvasWidth, canvasHeight);

			// Draw braids
			drawBraids();
		}, [drawGrid, drawBraids]);

		useImperativeHandle(ref, () => ({
			redrawCanvas,
			getCanvas: () => canvasRef.current,
		}));

		useEffect(() => {
			redrawCanvas();
		}, [redrawCanvas]);

		const handleMouseMove = useCallback(
			(e: React.MouseEvent<HTMLCanvasElement>) => {
				const canvas = canvasRef.current;
				if (!canvas) return;

				const rect = canvas.getBoundingClientRect();

				// Calculate the scale factor between display size and logical size
				const scaleX = canvas.width / rect.width;
				const scaleY = canvas.height / rect.height;

				// Convert display coordinates to logical coordinates
				const x = (e.clientX - rect.left) * scaleX;
				const y = (e.clientY - rect.top) * scaleY;

				onMouseMove(x, y);

				// Check for braid highlighting on hover
				if (!hideHighlight) {
					redrawCanvas();

					for (let i = 0; i < braids.length; i++) {
						if (braids[i].contains(x, y)) {
							braids[i].stamp("#FF0000");
							break;
						}
					}
				}
			},
			[onMouseMove, hideHighlight, redrawCanvas, braids]
		);

		const handleMouseLeave = useCallback(() => {
			onMouseLeave();
			redrawCanvas();
		}, [onMouseLeave, redrawCanvas]);

		const handleClick = useCallback(
			(e: React.MouseEvent<HTMLCanvasElement>) => {
				const canvas = canvasRef.current;
				if (!canvas) return;

				const rect = canvas.getBoundingClientRect();

				// Calculate the scale factor between display size and logical size
				const scaleX = canvas.width / rect.width;
				const scaleY = canvas.height / rect.height;

				// Convert display coordinates to logical coordinates
				const x = (e.clientX - rect.left) * scaleX;
				const y = (e.clientY - rect.top) * scaleY;

				for (let i = 0; i < braids.length; i++) {
					if (braids[i].contains(x, y)) {
						onBraidClick(i);
						break;
					}
				}
			},
			[onBraidClick, braids]
		);

		useEffect(() => {
			const canvas = canvasRef.current;
			if (!canvas) return;

			// Set canvas size
			canvas.width = width;
			canvas.height = height;

			redrawCanvas();
		}, [width, height, redrawCanvas]);

		return (
			<canvas
				ref={canvasRef}
				className="cornrows-canvas"
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				onClick={handleClick}>
				Sorry, your browser doesn't support the &lt;canvas&gt; element.
			</canvas>
		);
	}
);
