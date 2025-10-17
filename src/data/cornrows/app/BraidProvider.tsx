import React, { createContext, type ReactNode, useCallback, useContext, useState } from "react";
import { Braid } from "./Braid";

interface BraidState {
	id: number;
	parameters: {
		startX: number;
		startY: number;
		startAngle: number;
		startDilation: number;
		reflectX: boolean;
		reflectY: boolean;
		iterations: number;
		xTranslation: number;
		rotation: number;
		dilation: number;
		message: string;
	};
	braid: Braid;
}

interface BraidContextType {
	braids: BraidState[];
	currentBraidIndex: number;
	addBraid: (braid: Braid, parameters: BraidState["parameters"]) => void;
	updateBraidParameters: (index: number, parameters: Partial<BraidState["parameters"]>) => void;
	updateBraid: (index: number, braid: Braid) => void;
	setCurrentBraidIndex: (index: number) => void;
	deleteBraid: (index: number) => void;
	getCurrentBraid: () => BraidState | null;
	getCurrentParameters: () => BraidState["parameters"] | null;
	resetBraids: () => void;
}

const BraidContext = createContext<BraidContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useBraidContext = () => {
	const context = useContext(BraidContext);
	if (!context) {
		throw new Error("useBraidContext must be used within a BraidProvider");
	}
	return context;
};

interface BraidProviderProps {
	children: ReactNode;
}

export const BraidProvider: React.FC<BraidProviderProps> = ({ children }) => {
	const [braids, setBraids] = useState<BraidState[]>([]);
	const [currentBraidIndex, setCurrentBraidIndex] = useState<number>(-1);
	const [nextId, setNextId] = useState<number>(1);

	const addBraid = useCallback(
		(braid: Braid, parameters: BraidState["parameters"]) => {
			setBraids((prev) => [...prev, { id: nextId, parameters, braid }]);
			setCurrentBraidIndex((prev) => prev + 1);
			setNextId((prev) => prev + 1);
		},
		[nextId]
	);

	const updateBraidParameters = useCallback((index: number, parameters: Partial<BraidState["parameters"]>) => {
		setBraids((prev) =>
			prev.map((braidState, i) =>
				i === index ? { ...braidState, parameters: { ...braidState.parameters, ...parameters } } : braidState
			)
		);
	}, []);

	const updateBraid = useCallback((index: number, braid: Braid) => {
		setBraids((prev) => prev.map((braidState, i) => (i === index ? { ...braidState, braid } : braidState)));
	}, []);

	const deleteBraid = useCallback((index: number) => {
		setBraids((prev) => prev.filter((_, i) => i !== index));
		setCurrentBraidIndex((prev) => Math.max(0, prev - 1));
	}, []);

	const getCurrentBraid = useCallback(() => {
		return braids[currentBraidIndex] || null;
	}, [braids, currentBraidIndex]);

	const getCurrentParameters = useCallback(() => {
		return braids[currentBraidIndex]?.parameters || null;
	}, [braids, currentBraidIndex]);

	const resetBraids = useCallback(() => {
		setBraids([]);
		setCurrentBraidIndex(-1);
		setNextId(1);
	}, []);

	const value: BraidContextType = {
		braids,
		currentBraidIndex,
		addBraid,
		updateBraidParameters,
		updateBraid,
		setCurrentBraidIndex,
		deleteBraid,
		getCurrentBraid,
		getCurrentParameters,
		resetBraids,
	};

	return <BraidContext.Provider value={value}>{children}</BraidContext.Provider>;
};
