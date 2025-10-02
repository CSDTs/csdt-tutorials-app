import { AdinkraAkomaData } from "./adinkra/akoma";
import { AdinkraAnanseData } from "./adinkra/ananse";
import { AdinkraMpuannumData } from "./adinkra/mpuannum";
import { AdinkraSepowData } from "./adinkra/sepow";
import { AnishinaabeArcsData } from "./anishinaabe-arcs/main";
import { BeadLoomData } from "./beadloom";
import { CornrowConditionalsData } from "./cornrows/conditionals";
import { CornrowFunctionsData } from "./cornrows/functions";
import { CornrowLoopsData } from "./cornrows/loops";
import { CornrowMainData } from "./cornrows/main";
import { CornrowParamsData } from "./cornrows/parameters";
import { CornrowVarsData } from "./cornrows/variables";
import { PreColumbianPyramidsData } from "./precolumbian-pyramids/main";
import { AnishinaabeQuiltingData } from "./quilting/anishinaabe";
import { QuiltingConditionalsData } from "./quilting/conditionals";
import { QuiltingFunctionsData } from "./quilting/functions";
import { QuiltingGeesData } from "./quilting/gees";
import { QuiltingLakotaData } from "./quilting/lakota";
import { QuiltingLoopsData } from "./quilting/loops";
import { QuiltingParamsData } from "./quilting/parameters";
import { QuiltingVarsData } from "./quilting/variables";
import { TooledLeatherConditionalsData } from "./tooledleather/conditionals";
import { TooledLeatherFunctionsData } from "./tooledleather/functions";
import { TooledLeatherLoopsData } from "./tooledleather/loops";
import { TooledLeatherParamsData } from "./tooledleather/parameters";
import { TooledLeatherVarsData } from "./tooledleather/variables";
import { WhteBpData } from "./whte/bp";
import { WhteEnData } from "./whte/en";
import { WhteEsData } from "./whte/es";
import { CircularYarnArtsData } from "./yarnarts/circular";
import { RectangularYarnArtsData } from "./yarnarts/rectangular";

export type Tutorial = {
	title: string;
	tool: string;
	prefix: string;
	base?: string;
	language?: string;
	globalModifiers: string[];
	steps: TutorialStep[];
	core: string[];
};

export type TutorialStep = {
	title: string;
	content: string[];
	background?: string;
	software?: string;
	whitelist: string[];
	modifiers: string[];
};

export const fetchTutorialData = (tutorialUrlParam: string) => {
	const tutorials: Record<string, unknown> = {
		"adinkra-akoma": AdinkraAkomaData,
		"adinkra-ananse": AdinkraAnanseData,
		"adinkra-mpuannum": AdinkraMpuannumData,
		"adinkra-sepow": AdinkraSepowData,
		"anishinaabe-arcs-main": AnishinaabeArcsData,
		"precolumbian-pyramids-main": PreColumbianPyramidsData,
		"beadloom-main": BeadLoomData,
		"cornrows-main": CornrowMainData,
		"cornrows-loops": CornrowLoopsData,
		"cornrows-parameters": CornrowParamsData,
		"cornrows-functions": CornrowFunctionsData,
		"cornrows-variables": CornrowVarsData,
		"cornrows-conditionals": CornrowConditionalsData,
		"quilting-loops": QuiltingLoopsData,
		"quilting-parameters": QuiltingParamsData,
		"quilting-functions": QuiltingFunctionsData,
		"quilting-variables": QuiltingVarsData,
		"quilting-conditionals": QuiltingConditionalsData,
		"quilting-anishinaabe": AnishinaabeQuiltingData,
		"quilting-gees": QuiltingGeesData,
		"quilting-lakota": QuiltingLakotaData,
		"tooled-leather-loops": TooledLeatherLoopsData,
		"tooled-leather-parameters": TooledLeatherParamsData,
		"tooled-leather-functions": TooledLeatherFunctionsData,
		"tooled-leather-variables": TooledLeatherVarsData,
		"tooled-leather-conditionals": TooledLeatherConditionalsData,
		"whte-en": WhteEnData,
		"whte-es": WhteEsData,
		"whte-bp": WhteBpData,
		"yarnarts-rectangular": RectangularYarnArtsData,
		"yarnarts-circular": CircularYarnArtsData,
	};
	const tutorialData = tutorials[tutorialUrlParam];
	return tutorialData as Tutorial;
};
