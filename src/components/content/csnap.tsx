/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCSnapBase } from "@/hooks/use-csnap-base";
import { useReadyModifiers } from "@/hooks/use-ready-modifiers";
import { useStepModifiers } from "@/hooks/use-step-modifiers";
import { useWhitelist } from "@/hooks/use-whitelist";
import { getCSnapBase } from "@/lib/content";
import { useTutorial } from "@/providers/tutorial-provider";

import { useRef, useState } from "react";

type CSnapProps = {
	world: {
		children: {
			[key: string]: any;
		}[];
	};
};

export const CSnap = () => {
	const csnap = useRef<HTMLIFrameElement>(null);
	const { tutorial } = useTutorial();
	const [ready, setReady] = useState(false);
	const [ide, setIde] = useState<any>(null);

	const url = tutorial ? getCSnapBase(tutorial) : null;

	const source = `/csnap-pro/index.html`;

	useCSnapBase(ide, url, ready, setReady);
	useWhitelist(ide);
	useStepModifiers(ide);
	useReadyModifiers(ide, ready);

	const checkForWorld = () => {
		if ((csnap?.current?.contentWindow as unknown as CSnapProps)?.world?.children) {
			setIde((csnap.current?.contentWindow as unknown as CSnapProps)?.world?.children[0]);
		}
	};

	return (
		<div className="fifth-step my-auto h-full rounded-md border-0 border-dashed border-gray-500 min-h-[calc(100svh-10rem)] p-2 ">
			<iframe
				src={source}
				frameBorder="0"
				width="100%"
				height="100%"
				onLoad={checkForWorld}
				ref={csnap}
				title="CSnap Pro!"
				className="rounded-md"
			/>
		</div>
	);
};
