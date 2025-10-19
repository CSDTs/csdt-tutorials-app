/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Braid } from "./Braid";
import { BraidProvider, useBraidContext } from "./BraidProvider";
import "./CoordinatesDisplay.css";
import type { CornrowsCanvasRef } from "./CornrowsCanvas";
import { CornrowsCanvas } from "./CornrowsCanvas";
import { ButtonGroup, CheckboxGroup, FormInput } from "./FormComponents";

interface CornrowsMathAppProps {
	initialSettings?: BraidSettings;
	visibleFields?: {
		showIterationMethod: boolean;
		showStartingParams: boolean;
		showIterationParams: boolean;
		showBraidControl: boolean;
		showVectorControl: boolean;
		showCoordinatesLabel: boolean;
		showCoordinatesGroup: boolean;
		showStartAngleGroup: boolean;
		showStartDilationGroup: boolean;
		showStartReflectionGroup: boolean;
		showTranslateGroup: boolean;
		showRotateGroup: boolean;
		showDilateGroup: boolean;
		showGoalImage: boolean;
		showOptionsNav: boolean;
		showCoordinates: boolean;
		showGrid: boolean;
		showSectionLabels: boolean;
		// Individual starting parameter controls
		showStartX: boolean;
		showStartY: boolean;
		showStartAngle: boolean;
		showStartDilation: boolean;
		showStartReflectX: boolean;
		showStartReflectY: boolean;
		showIterateField: boolean;
		showBraidSelection: boolean;
	};
}

interface BraidSettings {
	message: string;
	iterations: number;
	startX: number;
	startY: number;
	startAngle: number;
	startDilation: number;
	reflectX: boolean;
	reflectY: boolean;
	xTranslation: number;
	rotation: number;
	dilation: number;
}

interface AppState {
	hideGrid: boolean;
	addAtCurrentPoint: boolean;
	showCoordinatesInCorner: boolean;
	hideEncryptedOption: boolean;
	currentX: number;
	currentY: number;
	gridScale: number;
	currentGoal: string;
	hideHighlight: boolean;
	showVector: boolean;
}

const CornrowsMathAppInner: React.FC<CornrowsMathAppProps> = ({ initialSettings, visibleFields }) => {
	const {
		braids,
		currentBraidIndex,
		addBraid,
		updateBraidParameters,
		updateBraid,
		setCurrentBraidIndex,
		deleteBraid,
		getCurrentBraid,
		resetBraids,
	} = useBraidContext();
	const canvasRef = useRef<CornrowsCanvasRef>(null);

	const [mouseCoordinates, setMouseCoordinates] = useState<string>("");
	const coordinatesRef = useRef<HTMLDivElement>(null);
	const initializedRef = useRef<boolean>(false);

	// Get current settings from the current braid's parameters
	const currentBraid = getCurrentBraid();
	const settings = currentBraid?.parameters || {
		message: "",
		iterations: 0,
		startX: 0,
		startY: 0,
		startAngle: 0,
		startDilation: 100,
		reflectX: false,
		reflectY: false,
		xTranslation: 50,
		rotation: 0,
		dilation: 100,
	};

	const [appState, setAppState] = useState<AppState>({
		hideGrid: false,
		addAtCurrentPoint: false,
		showCoordinatesInCorner: true,
		hideEncryptedOption: true,
		currentX: 0,
		currentY: 0,
		gridScale: 2,
		currentGoal: "./img/cc-0.jpg",
		hideHighlight: false,
		showVector: false,
	});

	// Tutorial-specific state
	const [tutorialState, setTutorialState] = useState(
		visibleFields || {
			showIterationMethod: false,
			showStartingParams: false,
			showIterationParams: false,
			showBraidControl: false,
			showVectorControl: false,
			showCoordinatesLabel: false,
			showCoordinatesGroup: false,
			showStartAngleGroup: false,
			showStartDilationGroup: false,
			showStartReflectionGroup: false,
			showTranslateGroup: false,
			showRotateGroup: false,
			showDilateGroup: false,
			showGoalImage: true,
			showOptionsNav: true,
			showCoordinates: true,
			showGrid: true,
			showSectionLabels: true,
			// Individual starting parameter controls
			showStartX: false,
			showStartY: false,
			showStartAngle: false,
			showStartDilation: false,
			showStartReflectX: false,
			showStartReflectY: false,
			showIterateField: false,
			showBraidSelection: false,
		}
	);

	// Initialize canvas and create first braid (only once)
	useEffect(() => {
		// Only initialize once to prevent clearing user-added braids
		if (initializedRef.current) return;

		const canvasRefObj = canvasRef.current;
		if (!canvasRefObj) return;

		const canvas = canvasRefObj.getCanvas();
		if (!canvas) return;

		// Reset braids and create exactly one braid
		resetBraids();

		// Create exactly one braid
		const startX = (initialSettings?.startX || 0) * (initialSettings?.reflectY || false ? -1 : 1);
		const startY = (initialSettings?.startY || 0) * -1 * (initialSettings?.reflectX || false ? -1 : 1);
		const startAngle = (initialSettings?.startAngle || 0) * -1;
		const startingDilation = initialSettings?.startDilation || 100;
		const reflection =
			(initialSettings?.reflectX || false ? "x" : "") + (initialSettings?.reflectY || false ? "y" : "");

		const firstBraid = new Braid(
			(canvas.width * startingDilation) / 2000,
			canvas.width / 2 + startX,
			canvas.height / 2 + startY,
			startAngle,
			reflection,
			canvas,
			false
		).setIterationParameters(
			initialSettings?.xTranslation || 50,
			0,
			(initialSettings?.rotation || 0) * -1,
			false,
			initialSettings?.dilation || 100,
			initialSettings?.iterations || 0
		);

		if (!appState.hideEncryptedOption && initialSettings?.message) {
			firstBraid.setEncryptedMessage(initialSettings.message);
		}

		// Add first braid using the provider
		addBraid(firstBraid, {
			startX: initialSettings?.startX || 0,
			startY: initialSettings?.startY || 0,
			startAngle: initialSettings?.startAngle || 0,
			startDilation: initialSettings?.startDilation || 100,
			reflectX: initialSettings?.reflectX || false,
			reflectY: initialSettings?.reflectY || false,
			iterations: initialSettings?.iterations || 0,
			xTranslation: initialSettings?.xTranslation || 50,
			rotation: initialSettings?.rotation || 0,
			dilation: initialSettings?.dilation || 100,
			message: initialSettings?.message || "",
		});

		// Mark as initialized
		initializedRef.current = true;
	}, [initialSettings, appState.hideEncryptedOption, addBraid, resetBraids]);

	// Update visible fields when props change
	useEffect(() => {
		if (visibleFields) {
			setTutorialState(visibleFields);
		}
	}, [visibleFields]);

	// Update grid visibility when showGrid changes
	useEffect(() => {
		if (visibleFields?.showGrid !== undefined) {
			setAppState((prev) => ({ ...prev, hideGrid: !visibleFields.showGrid }));
		}
	}, [visibleFields?.showGrid]);

	const updateBraidIteration = useCallback(() => {
		const canvasRefObj = canvasRef.current;
		if (!canvasRefObj) return;

		const canvas = canvasRefObj.getCanvas();
		if (!canvas) return;

		const currentBraid = getCurrentBraid();
		if (!currentBraid) return;

		const iterations = appState.hideEncryptedOption ? settings.iterations : settings.message.length;
		const xTranslation = settings.xTranslation;
		const rotation = settings.rotation * -1;
		const dilation = settings.dilation;

		// Update only the iteration parameters, preserve position
		currentBraid.braid.setIterationParameters(xTranslation, 0, rotation, false, dilation, iterations);

		if (!appState.hideEncryptedOption) {
			currentBraid.braid.setEncryptedMessage(settings.message);
		}

		// Update the braid in the provider
		updateBraid(currentBraidIndex, currentBraid.braid);
	}, [
		currentBraidIndex,
		settings.xTranslation,
		settings.rotation,
		settings.dilation,
		settings.iterations,
		settings.message,
		appState.hideEncryptedOption,
		getCurrentBraid,
		updateBraid,
	]);

	// Update braid position when starting coordinates change
	const updateBraidPosition = useCallback(
		(updatedParameters?: any) => {
			const canvasRefObj = canvasRef.current;
			if (!canvasRefObj) return;

			const canvas = canvasRefObj.getCanvas();
			if (!canvas) return;

			const currentBraid = getCurrentBraid();
			if (!currentBraid) return;

			// Use updated parameters if provided, otherwise use current braid parameters
			const params = updatedParameters || currentBraid.parameters;

			const startX = params.startX * (params.reflectY ? -1 : 1);
			const startY = params.startY * -1 * (params.reflectX ? -1 : 1);
			const startAngle = params.startAngle * -1;
			const startingDilation = params.startDilation;
			const reflection = (params.reflectX ? "x" : "") + (params.reflectY ? "y" : "");

			// Create a completely new braid instance (like the original JavaScript)
			const newBraid = new Braid(
				(canvas.width * startingDilation) / 2000,
				canvas.width / 2 + startX,
				canvas.height / 2 + startY,
				startAngle,
				reflection,
				canvas,
				false
			).setIterationParameters(params.xTranslation, 0, params.rotation * -1, false, params.dilation, params.iterations);

			if (!appState.hideEncryptedOption && params.message) {
				newBraid.setEncryptedMessage(params.message);
			}

			// Update the braid in the provider
			updateBraid(currentBraidIndex, newBraid);
		},
		[currentBraidIndex, getCurrentBraid, updateBraid, appState.hideEncryptedOption]
	);

	// Helper function to update both parameters and braid visual representation
	const updateBraidParameter = useCallback(
		(parameter: string, value: any) => {
			// Get current parameters before updating
			const currentBraid = getCurrentBraid();
			if (!currentBraid) return;

			// Create updated parameters object
			const updatedParameters = { ...currentBraid.parameters, [parameter]: value };

			// Update the parameter in the context
			updateBraidParameters(currentBraidIndex, { [parameter]: value });

			// Update the braid's visual representation based on the parameter type
			if (["startX", "startY", "startAngle", "startDilation", "reflectX", "reflectY"].includes(parameter)) {
				updateBraidPosition(updatedParameters);
			} else if (["iterations", "xTranslation", "rotation", "dilation", "message"].includes(parameter)) {
				updateBraidIteration();
			}
		},
		[currentBraidIndex, updateBraidParameters, getCurrentBraid, updateBraidPosition, updateBraidIteration]
	);

	const handleMouseMove = useCallback((x: number, y: number) => {
		const canvasRefObj = canvasRef.current;
		if (!canvasRefObj) return;

		const canvas = canvasRefObj.getCanvas();
		if (!canvas) return;

		// Convert canvas coordinates to world coordinates
		const worldX = x - canvas.width / 2;
		const worldY = (y - canvas.height / 2) * -1;

		// Update coordinates display
		setMouseCoordinates(`(${Math.round(worldX)}, ${Math.round(worldY)})`);

		// Update mouse position for absolute positioning
		setAppState((prev) => ({
			...prev,
			currentX: x,
			currentY: y,
		}));
	}, []);

	const handleMouseLeave = useCallback(() => {
		setMouseCoordinates("");
	}, []);

	const handleBraidClick = useCallback(
		(index: number) => {
			setCurrentBraidIndex(index);
		},
		[setCurrentBraidIndex]
	);

	const handleNewBraid = useCallback(
		(e?: React.MouseEvent) => {
			if (e) e.preventDefault();

			const canvasRefObj = canvasRef.current;
			if (!canvasRefObj) return;

			const canvas = canvasRefObj.getCanvas();
			if (!canvas) return;

			// Determine position based on addAtCurrentPoint setting
			let x, y, startX, startY;
			if (appState.addAtCurrentPoint) {
				// Add at current braid's position (inherit position from current braid)
				const currentBraid = getCurrentBraid();
				if (currentBraid) {
					// Use the current braid's position
					x = currentBraid.braid.x;
					y = currentBraid.braid.y;
					startX = currentBraid.parameters.startX;
					startY = currentBraid.parameters.startY;
				} else {
					// Fallback to origin if no current braid
					x = canvas.width / 2;
					y = canvas.height / 2;
					startX = 0;
					startY = 0;
				}
			} else {
				// Add at origin (0, 0 in world coordinates)
				x = canvas.width / 2;
				y = canvas.height / 2;
				startX = 0;
				startY = 0;
			}

			// Create new braid with proper parameters from initialSettings
			const startAngle = (initialSettings?.startAngle || 0) * -1;
			const startingDilation = initialSettings?.startDilation || 100;
			const reflection =
				(initialSettings?.reflectX || false ? "x" : "") + (initialSettings?.reflectY || false ? "y" : "");

			const newBraid = new Braid(
				(canvas.width * startingDilation) / 2000,
				x,
				y,
				startAngle,
				reflection,
				canvas,
				false
			).setIterationParameters(
				initialSettings?.xTranslation || 50,
				0,
				(initialSettings?.rotation || 0) * -1,
				false,
				initialSettings?.dilation || 100,
				initialSettings?.iterations || 0
			);

			if (!appState.hideEncryptedOption && initialSettings?.message) {
				newBraid.setEncryptedMessage(initialSettings.message);
			}

			// Add new braid using the provider with proper starting coordinates
			// Inherit settings from initialSettings or use defaults
			addBraid(newBraid, {
				startX,
				startY,
				startAngle: initialSettings?.startAngle || 0,
				startDilation: initialSettings?.startDilation || 100,
				reflectX: initialSettings?.reflectX || false,
				reflectY: initialSettings?.reflectY || false,
				iterations: initialSettings?.iterations || 0,
				xTranslation: initialSettings?.xTranslation || 50,
				rotation: initialSettings?.rotation || 0,
				dilation: initialSettings?.dilation || 100,
				message: initialSettings?.message || "",
			});
		},
		[appState.addAtCurrentPoint, appState.currentX, appState.currentY, addBraid, initialSettings]
	);

	const handleDeleteBraid = useCallback(
		(e?: React.MouseEvent) => {
			if (e) e.preventDefault();

			if (braids.length <= 1) return;

			deleteBraid(currentBraidIndex);
		},
		[braids.length, currentBraidIndex, deleteBraid]
	);

	const toggleGrid = useCallback(() => {
		setAppState((prev) => ({ ...prev, hideGrid: !prev.hideGrid }));
	}, []);

	const toggleVector = useCallback(() => {
		setAppState((prev) => ({ ...prev, showVector: !prev.showVector }));
	}, []);

	const togglePoint = useCallback(() => {
		setAppState((prev) => ({ ...prev, addAtCurrentPoint: !prev.addAtCurrentPoint }));
	}, []);

	const togglePointDisplay = useCallback(() => {
		setAppState((prev) => ({ ...prev, showCoordinatesInCorner: !prev.showCoordinatesInCorner }));
	}, []);

	const toggleBraidHighlight = useCallback(() => {
		setAppState((prev) => ({ ...prev, hideHighlight: !prev.hideHighlight }));
	}, []);

	return (
		<div className="container">
			{" "}
			{/* Canvas Container */}
			<div id="canvas-container" className="mt-4 relative bg-white">
				{tutorialState.showOptionsNav && (
					<div id="options-nav" className="row">
						<div id="more-options" className="mx-2 ml-auto">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline" size="sm">
										More Options
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem onClick={togglePoint}>
										{appState.addAtCurrentPoint ? "Add Braid at Origin" : "Add Braid at Current Point"}
									</DropdownMenuItem>
									<DropdownMenuItem onClick={toggleGrid}>
										{appState.hideGrid ? "Show Grid" : "Hide Grid"}
									</DropdownMenuItem>
									<DropdownMenuItem onClick={togglePointDisplay} disabled>
										{appState.showCoordinatesInCorner ? "XY Follows Mouse" : "XY in Lower Right"}
									</DropdownMenuItem>
									<DropdownMenuItem onClick={toggleVector}>
										{appState.showVector ? "Hide Vector" : "Show Vector"}
									</DropdownMenuItem>
									<DropdownMenuItem onClick={toggleBraidHighlight} disabled>
										{appState.hideHighlight ? "Show Plait Highlight" : "Hide Plait Highlight"}
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
				)}

				<CornrowsCanvas
					ref={canvasRef}
					braids={braids.map((braidState) => braidState.braid)}
					currentBraidIndex={currentBraidIndex}
					hideGrid={appState.hideGrid}
					hideHighlight={appState.hideHighlight}
					showVector={appState.showVector}
					hideEncryptedOption={appState.hideEncryptedOption}
					showCoordinatesInCorner={appState.showCoordinatesInCorner}
					onBraidClick={handleBraidClick}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
				/>

				{/* Mouse Coordinates Display */}
				{tutorialState.showCoordinates && mouseCoordinates && (
					<div
						ref={coordinatesRef}
						className="coordinates-display"
						style={
							{
								"--mouse-x": `${appState.currentX + 10}px`,
								"--mouse-y": `${appState.currentY - 20}px`,
							} as React.CSSProperties
						}>
						{mouseCoordinates}
					</div>
				)}
			</div>
			<div className="row">
				{tutorialState.showGoalImage && (
					<div className="col-md-5" id="braid-controls">
						<img src="./cornrowcurves/math/math-goal.png" alt="Goal" id="goal-image" />
					</div>
				)}
				<div className="col-md-7 align-self-center ">
					<form id="data-form" className="space-y-4">
						{/* Iteration Method */}
						<FormInput
							id="message"
							label="Enter letters to code:"
							type="text"
							value={settings.message}
							onChange={(value) => updateBraidParameter("message", value)}
							placeholder="Secret Message"
							hidden={appState.hideEncryptedOption}
						/>

						<FormInput
							id="iterations"
							label="Enter Number of Plaits:"
							type="number"
							value={settings.iterations}
							onChange={(value) => updateBraidParameter("iterations", parseInt(value) || 0)}
							placeholder="10"
							addonBefore="Iterate (integer)"
							hidden={!tutorialState.showIterateField}
							attentionSeeker={true}
							onClick={() => updateBraidParameter("iterations", settings.iterations)}
						/>

						{/* Starting Parameters */}
						{(tutorialState.showStartingParams ||
							tutorialState.showStartX ||
							tutorialState.showStartY ||
							tutorialState.showStartAngle ||
							tutorialState.showStartDilation ||
							tutorialState.showStartReflectX ||
							tutorialState.showStartReflectY) && (
							<div className="form-group">
								{tutorialState.showSectionLabels && (
									<Label className="text-lg font-semibold mb-3 block">Define Starting Parameters:</Label>
								)}

								<FormInput
									id="start-x"
									label="Starting Coordinates (x,y):"
									type="number"
									value={settings.startX}
									onChange={(value) => updateBraidParameter("startX", parseInt(value) || 0)}
									placeholder="0"
									addonBefore="X ="
									addonAfter=""
									attentionSeeker={true}
									onClick={() => updateBraidParameter("startX", settings.startX)}
									hidden={!tutorialState.showStartingParams && !tutorialState.showStartX}
								/>

								<FormInput
									id="start-y"
									label=""
									type="number"
									value={settings.startY}
									onChange={(value) => updateBraidParameter("startY", parseInt(value) || 0)}
									placeholder="0"
									addonBefore="Y ="
									addonAfter=""
									attentionSeeker={true}
									onClick={() => updateBraidParameter("startY", settings.startY)}
									hidden={!tutorialState.showStartingParams && !tutorialState.showStartY}
								/>

								<FormInput
									id="start-angle"
									label="Starting Angle:"
									type="number"
									value={settings.startAngle}
									onChange={(value) => updateBraidParameter("startAngle", parseInt(value) || 0)}
									placeholder="0"
									addonAfter="°"
									hidden={!tutorialState.showStartingParams && !tutorialState.showStartAngle}
								/>

								<FormInput
									id="start-dilation"
									label="Starting Dilation:"
									type="number"
									value={settings.startDilation}
									onChange={(value) => updateBraidParameter("startDilation", parseInt(value) || 100)}
									placeholder="0"
									addonAfter="%"
									hidden={!tutorialState.showStartingParams && !tutorialState.showStartDilation}
								/>

								<CheckboxGroup
									label="Starting Reflection:"
									options={[
										{
											id: "reflectx",
											label: "X",
											checked: settings.reflectX,
											onChange: (checked) => updateBraidParameter("reflectX", checked),
										},
										{
											id: "reflecty",
											label: "Y",
											checked: settings.reflectY,
											onChange: (checked) => updateBraidParameter("reflectY", checked),
										},
									]}
									hidden={
										!tutorialState.showStartingParams &&
										!tutorialState.showStartReflectX &&
										!tutorialState.showStartReflectY
									}
								/>
							</div>
						)}

						{/* Iteration Parameters */}
						<div className="form-group" hidden={!tutorialState.showIterationParams}>
							{tutorialState.showSectionLabels && (
								<Label className="text-lg font-semibold mb-3 block">Define Iteration Parameters:</Label>
							)}

							<FormInput
								id="x-translation"
								label="Translate:"
								type="number"
								value={settings.xTranslation}
								onChange={(value) => updateBraidParameter("xTranslation", parseInt(value) || 50)}
								addonAfter="%"
								hidden={!tutorialState.showTranslateGroup}
							/>

							<FormInput
								id="rotation"
								label="Rotate:"
								type="number"
								value={settings.rotation}
								onChange={(value) => updateBraidParameter("rotation", parseInt(value) || 0)}
								addonAfter="°"
								hidden={!tutorialState.showRotateGroup}
							/>

							<FormInput
								id="dilation"
								label="Dilate:"
								type="number"
								value={settings.dilation}
								onChange={(value) => updateBraidParameter("dilation", parseInt(value) || 100)}
								addonAfter="%"
								hidden={!tutorialState.showDilateGroup}
							/>
						</div>

						{/* Braid Control */}
						<ButtonGroup
							buttons={[
								{
									id: "new-braid",
									text: "Add New Braid",
									variant: "success",
									onClick: handleNewBraid,
								},
								{
									id: "delete-braid",
									text: "Delete Current Braid",
									variant: "danger",
									onClick: handleDeleteBraid,
									disabled: braids.length <= 1,
								},
							]}
							hidden={!tutorialState.showBraidControl}
						/>

						{/* Braid Selection */}
						{tutorialState.showBraidSelection && (
							<div className="form-group">
								{tutorialState.showSectionLabels && (
									<Label className="text-lg font-semibold mb-3 block">Select Braid to Manipulate:</Label>
								)}
								<div className="space-y-2">
									{braids.map((_, index) => (
										<div key={index} className="flex items-center space-x-2">
											<input
												type="radio"
												id={`braid-${index}`}
												name="current-braid"
												checked={currentBraidIndex === index}
												onChange={() => setCurrentBraidIndex(index)}
												className="w-4 h-4"
												aria-label={`Select Braid ${index + 1}`}
											/>
											<Label htmlFor={`braid-${index}`} className="text-sm">
												Braid {index + 1}
											</Label>
										</div>
									))}
								</div>
							</div>
						)}

						{/* Vector Control */}
						<div className="form-group" hidden={!tutorialState.showVectorControl}>
							<div className="row">
								<div className="col-md-6">
									<Button
										id="vector-braid"
										variant="secondary"
										size="sm"
										className="w-full"
										onClick={(e) => {
											e.preventDefault();
											toggleVector();
										}}>
										{appState.showVector ? "Hide Vector" : "Show Vector"}
									</Button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export const CornrowsMathApp: React.FC<CornrowsMathAppProps> = (props) => {
	return (
		<BraidProvider>
			<CornrowsMathAppInner {...props} />
		</BraidProvider>
	);
};
