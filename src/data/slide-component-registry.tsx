import { BeadLoomMathGame1 } from "@/data/beadloom/slides/game-1";
import { BeadLoomMathGame2 } from "@/data/beadloom/slides/game-2";
import { BeadLoomMathGame3 } from "@/data/beadloom/slides/game-3";
import { BeadLoomMathGame4 } from "@/data/beadloom/slides/game-4";
import { BeadLoomMathGame5 } from "@/data/beadloom/slides/game-5";
import { BeadLoomMathGame6 } from "@/data/beadloom/slides/game-6";
import { BeadLoomMathGame7 } from "@/data/beadloom/slides/game-7";
import { BeadLoomMathGame8 } from "@/data/beadloom/slides/game-8";
import { BeadLoomMathGame9 } from "@/data/beadloom/slides/game-9";
import { BeadLoomMathGameFinal } from "./beadloom/slides/game-final";
import { BeadLoomHowTo1 } from "./beadloom/slides/how-to-1";
import { BeadLoomHowTo2 } from "./beadloom/slides/how-to-2";
import { BeadLoomHowTo3 } from "./beadloom/slides/how-to-3";
import { BeadLoomHowToFinal } from "./beadloom/slides/how-to-final";
import { CornrowsCreate1 } from "./cornrows/slides/create-1";
import { CornrowsCreate2 } from "./cornrows/slides/create-2";
import { CornrowsCreate3 } from "./cornrows/slides/create-3";
import { CornrowsCreate4 } from "./cornrows/slides/create-4";
import { CornrowsCreate5 } from "./cornrows/slides/create-5";
import { CornrowsCreate6 } from "./cornrows/slides/create-6";
import { CornrowsCreateFinal } from "./cornrows/slides/create-final";
import { CornrowsPosition1 } from "./cornrows/slides/position-1";
import { CornrowsPosition2 } from "./cornrows/slides/position-2";
import { CornrowsPosition3 } from "./cornrows/slides/position-3";
import { CornrowsPosition4 } from "./cornrows/slides/position-4";
import { CornrowsPosition5 } from "./cornrows/slides/position-5";
import { CornrowsPositionFinal } from "./cornrows/slides/position-final";

// Registry of all available slide components (excluding ResponseField and ReflectionCard as they need special handling)
export const slideComponents = {
	"beadloom-math-game-1": BeadLoomMathGame1,
	"beadloom-math-game-2": BeadLoomMathGame2,
	"beadloom-math-game-3": BeadLoomMathGame3,
	"beadloom-math-game-4": BeadLoomMathGame4,
	"beadloom-math-game-5": BeadLoomMathGame5,
	"beadloom-math-game-6": BeadLoomMathGame6,
	"beadloom-math-game-7": BeadLoomMathGame7,
	"beadloom-math-game-8": BeadLoomMathGame8,
	"beadloom-math-game-9": BeadLoomMathGame9,
	"beadloom-math-game-final": BeadLoomMathGameFinal,
	"beadloom-how-to-1": BeadLoomHowTo1,
	"beadloom-how-to-2": BeadLoomHowTo2,
	"beadloom-how-to-3": BeadLoomHowTo3,
	"beadloom-how-to-final": BeadLoomHowToFinal,
	"cornrows-create-1": CornrowsCreate1,
	"cornrows-create-2": CornrowsCreate2,
	"cornrows-create-3": CornrowsCreate3,
	"cornrows-create-4": CornrowsCreate4,
	"cornrows-create-5": CornrowsCreate5,
	"cornrows-create-6": CornrowsCreate6,
	"cornrows-create-final": CornrowsCreateFinal,
	"cornrows-position-1": CornrowsPosition1,
	"cornrows-position-2": CornrowsPosition2,
	"cornrows-position-3": CornrowsPosition3,
	"cornrows-position-4": CornrowsPosition4,
	"cornrows-position-5": CornrowsPosition5,
	"cornrows-position-final": CornrowsPositionFinal,
} as const;

// Type for component names
export type SlideComponentName = keyof typeof slideComponents;

// Helper function to get a component by name
export function getSlideComponent(name: string) {
	return slideComponents[name as SlideComponentName];
}

// Helper function to check if a component exists
export function hasSlideComponent(name: string): name is SlideComponentName {
	return name in slideComponents;
}
