export interface BraidParams {
	size: number;
	x: number;
	y: number;
	rotation: number;
	reflection: string;
	iteration: IterationParams;
}

export interface IterationParams {
	translateX: number;
	translateY: number;
	rotationAngle: number;
	inRadians: boolean;
	dilation: number;
	n: number;
}

export interface Point {
	x: number;
	y: number;
}

export interface CollisionParam {
	x0: number;
	y0: number;
	x1: number;
	y1: number;
}

/** Class representing a single braid and containing methods for drawing it */
export class Braid {
	private _size: number;
	private _x: number;
	private _y: number;
	private _rotation: number;
	private _ctx: CanvasRenderingContext2D | undefined;
	private _midpoint: Point;
	private _reflection: string;
	private _startAngle: number;
	private _encryptedMessage: boolean = false;
	private _colorArray: string[] = [];
	public collisionParams: CollisionParam[] = [];
	public iteration: IterationParams;
	public hideEncryptedOption: boolean = true;
	/**
	 * @param size width of the braid in pixels
	 * @param x
	 * @param y
	 * @param startAngle
	 * @param startReflection
	 * @param canvas
	 * @param inRadians
	 */
	constructor(
		size: number,
		x: number,
		y: number,
		startAngle: number,
		startReflection: string,
		canvas: HTMLCanvasElement | null,
		inRadians: boolean = true
	) {
		this._size = size;
		this._x = x;
		this._y = y;
		this._rotation = 0;
		this._ctx = canvas ? canvas.getContext("2d") || undefined : undefined;
		this._midpoint = {
			x: x,
			y: y,
		};
		this.translate(0, 0, startAngle, inRadians);
		this._reflection = startReflection;
		this._startAngle = startAngle;
		this.iteration = {
			translateX: 0,
			translateY: 0,
			rotationAngle: 0,
			inRadians: false,
			dilation: 100,
			n: 0,
		};
	}

	/** Clone constructor
	 * Note: this._y + this._size / 2 (if point is in corner or not..)
	 * @return {Braid} returns a copy of the current braid
	 */
	clone(): Braid {
		const newBraid = new Braid(this._size, this._x, this._y, this._startAngle, this._reflection, null);
		newBraid._ctx = this._ctx;
		newBraid._rotation = this._rotation;
		newBraid._x = this._x;
		newBraid._y = this._y;
		newBraid._midpoint = {
			x: this._x,
			y: this._y,
		};
		newBraid.collisionParams = [];
		newBraid.iteration = { ...this.iteration };
		return newBraid;
	}

	/** Moves the braid on the x,y plane without rotating or resizing
	 * @param dx Amount x should change by in percent
	 * @param dy Amount x should change by in percent
	 * @param angle Angle of rotation
	 * @param inRadians Whether "angle" was given in radians
	 *
	 * @return {Braid} returns "this" for chaining
	 */
	translate(dx: number, dy: number, angle: number, inRadians: boolean): Braid {
		this._rotation += inRadians ? angle : this.degToRad(angle);
		const reflectionX = this._reflection == null ? 1 : this._reflection.includes("y") ? -1 : 1;
		const reflectionY = this._reflection == null ? 1 : this._reflection.includes("x") ? -1 : 1;

		const newMidpoint = this.rotateAroundPoint(
			{
				x: (this._size * dx) / 100,
				y: (this._size * dy) / 100,
			},
			this._rotation,
			{
				x: 0,
				y: 0,
			}
		);
		this._x += newMidpoint.x * reflectionX;
		this._y += newMidpoint.y * reflectionY;
		this._midpoint.x += newMidpoint.x;
		this._midpoint.y += newMidpoint.y;
		this.collisionParams = [];

		return this;
	}

	/** Reflects the braid across x or y axis
	 * @param axis the axis of reflection (x,y)
	 *
	 * @return {Braid} returns "this" for chaining
	 */
	setReflection(axis: string): Braid {
		this._reflection = axis;
		return this;
	}

	/** Changes the size of the braid
	 * @param dilation percentage of the current size
	 *
	 * @return {Braid} returns "this" for chaining
	 */
	dilate(dilation: number): Braid {
		this._size *= dilation / 100;
		this._midpoint = {
			x: this._x,
			y: this._y,
		};
		return this;
	}

	/** Draws braid based on current data stored in braid
	 * @param color an optional hex code containt the color to stamp
	 * @param width an optional width for the braid strokes
	 *
	 * @return {Braid} returns "this" for chaining
	 */
	stamp(color: string = "#000000", width: number = 1 / 7): Braid {
		if (!this._ctx) return this;

		// 7 is an arbitrary number for lineWidth that seems to look good
		const lineWidth = this._size * width;
		// Offset keeps all corners of the lines within the size x size square
		const offset = lineWidth / 2;
		// Rotate all points to be used around corner
		const position = {
			x: this._x,
			y: this._y,
		};
		let upperLeftCorner = this.rotateAroundPoint(
			{
				x: this._x - this._size / 2 + offset,
				y: this._y - this._size / 2 + offset,
			},
			this._rotation,
			position
		);
		upperLeftCorner = this.reflect(
			upperLeftCorner.x,
			upperLeftCorner.y,
			this._midpoint.x,
			this._midpoint.y,
			this._reflection
		);
		let midPoint = this.rotateAroundPoint(
			{
				x: this._midpoint.x,
				y: this._midpoint.y,
			},
			this._rotation,
			position
		);
		midPoint = this.reflect(midPoint.x, midPoint.y, this._midpoint.x, this._midpoint.y, this._reflection);
		let upperRightCorner = this.rotateAroundPoint(
			{
				x: this._x + this._size - this._size / 2 - offset,
				y: this._y - this._size / 2 + offset,
			},
			this._rotation,
			position
		);
		upperRightCorner = this.reflect(
			upperRightCorner.x,
			upperRightCorner.y,
			this._midpoint.x,
			this._midpoint.y,
			this._reflection
		);
		let lowerLeftCorner = this.rotateAroundPoint(
			{
				x: this._x - this._size / 2 + offset,
				y: this._y + this._size - this._size / 2 - offset,
			},
			this._rotation,
			position
		);
		lowerLeftCorner = this.reflect(
			lowerLeftCorner.x,
			lowerLeftCorner.y,
			this._midpoint.x,
			this._midpoint.y,
			this._reflection
		);
		this._ctx.beginPath();
		this._ctx.lineWidth = lineWidth;
		this._ctx.strokeStyle = color;

		// Draws left arm
		this._ctx.moveTo(upperLeftCorner.x, upperLeftCorner.y);
		this._ctx.lineTo(midPoint.x, midPoint.y);
		this.collisionParams[0] = {
			x0: upperLeftCorner.x,
			y0: upperLeftCorner.y,
			x1: midPoint.x,
			y1: midPoint.y,
		};
		// Draws right arm
		this._ctx.moveTo(upperRightCorner.x, upperRightCorner.y);
		this._ctx.lineTo(lowerLeftCorner.x, lowerLeftCorner.y);
		this.collisionParams[1] = {
			x0: upperRightCorner.x,
			y0: upperRightCorner.y,
			x1: lowerLeftCorner.x,
			y1: lowerLeftCorner.y,
		};

		this._ctx.closePath();
		this._ctx.stroke();
		return this;
	}

	/** Draws vector based on current data stored in braid
	 * @param midA starting point
	 * @param midB ending point
	 * @param color an optional hex code containt the color to stamp
	 * @param width an optional width for the braid strokes
	 *
	 * @return {Braid} returns "this" for chaining
	 */
	vector(midA: Point, midB: Point, color: string = "#33ff33", width: number = 1 / 8): Braid {
		if (!this._ctx) return this;

		// 7 is an arbitrary number for lineWidth that seems to look good
		const lineWidth = this._size * width;
		// Offset keeps all corners of the lines within the size x size square
		// const offset = lineWidth / 2;

		this._ctx.beginPath();
		this._ctx.lineWidth = lineWidth;
		this._ctx.strokeStyle = color;

		// Draws arrow body
		this._ctx.moveTo(midA.x, midA.y);
		this._ctx.lineTo(midB.x, midB.y);

		// Draw arrowhead
		const angle = Math.atan2(midB.y - midA.y, midB.x - midA.x);
		const arrowLength = lineWidth * 3;
		const arrowAngle = Math.PI / 6; // 30 degrees

		// Calculate arrowhead points
		const arrowX1 = midB.x - arrowLength * Math.cos(angle - arrowAngle);
		const arrowY1 = midB.y - arrowLength * Math.sin(angle - arrowAngle);
		const arrowX2 = midB.x - arrowLength * Math.cos(angle + arrowAngle);
		const arrowY2 = midB.y - arrowLength * Math.sin(angle + arrowAngle);

		// Draw arrowhead
		this._ctx.moveTo(midB.x, midB.y);
		this._ctx.lineTo(arrowX1, arrowY1);
		this._ctx.moveTo(midB.x, midB.y);
		this._ctx.lineTo(arrowX2, arrowY2);

		this.collisionParams[0] = {
			x0: midA.x,
			y0: midA.y,
			x1: midB.x,
			y1: midB.y,
		};

		this._ctx.closePath();
		this._ctx.stroke();

		return this;
	}

	/** Iterates, creating n stamped copies of the braid,
	 * each using the same translation
	 * @param translateX percentage
	 * @param translateY percentage
	 * @param rotationAngle
	 * @param inRadians
	 * @param dilation percentage
	 * @param n number of iterations
	 *
	 * @return {Braid} returns this for chaining
	 */
	iterate(
		translateX?: number,
		translateY?: number,
		rotationAngle?: number,
		inRadians?: boolean,
		dilation?: number,
		n?: number
	): Braid {
		if (dilation || n) {
			this.setIterationParameters(
				translateX || 0,
				translateY || 0,
				rotationAngle || 0,
				inRadians || false,
				dilation || 100,
				n || 0
			);
		}

		const braidToStamp = this.stamp().clone();
		const vectorStamp = this.stamp().clone();
		const midA = {
			x: this._x,
			y: this._y,
		};
		const midB = {
			x: this._x,
			y: this._y,
		};

		// Steps into first iteration for the vector to extend (there's probably a better way to do this, but....)
		if (Braid.showVector) {
			vectorStamp
				.translate(
					this.iteration.translateX,
					this.iteration.translateY,
					this.iteration.rotationAngle,
					this.iteration.inRadians
				)
				.dilate(this.iteration.dilation);
		}

		for (let i = 0; i < (n ? n : this.iteration.n); i++) {
			if (Braid.showVector) {
				midA.x = braidToStamp._midpoint.x;
				midA.y = braidToStamp._midpoint.y;
			}

			braidToStamp
				.translate(
					this.iteration.translateX,
					this.iteration.translateY,
					this.iteration.rotationAngle,
					this.iteration.inRadians
				)
				.dilate(this.iteration.dilation)
				.stamp(this.hideEncryptedOption ? "#000000" : this._colorArray[i] || "#000000");
			if (Braid.showVector) {
				vectorStamp
					.translate(
						this.iteration.translateX,
						this.iteration.translateY,
						this.iteration.rotationAngle,
						this.iteration.inRadians
					)
					.dilate(this.iteration.dilation);
				midB.x = braidToStamp._midpoint.x;
				midB.y = braidToStamp._midpoint.y;

				vectorStamp.vector(midA, midB);
			}
		}
		// Allows the vector to extend to its next iteration.
		if (Braid.showVector) {
			const vectorN = n ? n : this.iteration.n;
			midA.x = vectorN == 0 ? midA.x : vectorStamp._midpoint.x;
			midA.y = vectorN == 0 ? midA.y : vectorStamp._midpoint.y;
			vectorStamp.vector(midA, midB);
		}
		return this;
	}

	/** Save or edit paramters for iteration
	 * @param translateX percentage
	 * @param translateY percentage
	 * @param rotationAngle
	 * @param inRadians
	 * @param dilation percentage
	 * @param n number of iterations
	 *
	 * @return {Braid} returns this for chaining
	 */
	setIterationParameters(
		translateX: number,
		translateY: number,
		rotationAngle: number,
		inRadians: boolean,
		dilation: number,
		n: number
	): Braid {
		this.iteration = {
			translateX,
			translateY,
			rotationAngle,
			inRadians,
			dilation,
			n,
		};
		return this;
	}

	/** Set the position and properties of the braid
	 * @param x new x coordinate
	 * @param y new y coordinate
	 * @param startAngle new starting angle
	 * @param size new size
	 * @param reflection new reflection string
	 *
	 * @return {Braid} returns this for chaining
	 */
	setPosition(x: number, y: number, startAngle: number, size: number, reflection: string): Braid {
		this._x = x;
		this._y = y;
		this._size = size;
		this._startAngle = startAngle;
		this._reflection = reflection;
		this._rotation = 0;
		this._midpoint = {
			x: x,
			y: y,
		};
		this.translate(0, 0, startAngle, false);
		this.collisionParams = [];
		return this;
	}

	/** Returns whether or not the braid contains the given coordinate
	 * @param x
	 * @param y
	 *
	 * @return {boolean}
	 */
	contains(x: number, y: number): boolean {
		const dx = this._midpoint.x - x;
		const dy = this._midpoint.y - y;
		return Math.sqrt(dx * dx + dy * dy) <= this._size / 2;
	}

	// Getter methods for accessing braid properties
	get x(): number {
		return this._x;
	}

	get y(): number {
		return this._y;
	}

	get size(): number {
		return this._size;
	}

	get rotation(): number {
		return this._rotation;
	}

	get reflection(): string {
		return this._reflection;
	}

	/**Sets each stamp to a color based on string
	 * @param message
	 *
	 * @return {Braid} returns this for chaining
	 */
	setEncryptedMessage(message: string): Braid {
		const colorArr: string[] = [];
		for (let i = 0; i < message.length; i++) {
			colorArr[i] = "hsl(" + Math.round((message.charCodeAt(i) - 65) / 15) * 15 + ",100%, 50%)";
		}
		this._encryptedMessage = true;
		this._colorArray = colorArr;
		return this;
	}

	/**
	 * @return {Object} a serialized version of this braid for saving
	 */
	serialize(): BraidParams {
		return {
			size: this._size,
			x: this._x,
			y: this._y,
			rotation: this._rotation,
			reflection: this._reflection,
			iteration: this.iteration,
		};
	}

	// Helper methods
	private rotateAroundPoint(A: Point, angle: number, B: Point): Point {
		return {
			x: (A.x - B.x) * Math.cos(angle) - (A.y - B.y) * Math.sin(angle) + B.x,
			y: (A.y - B.y) * Math.cos(angle) + (A.x - B.x) * Math.sin(angle) + B.y,
		};
	}

	private reflect(x: number, y: number, midX: number, midY: number, axis: string): Point {
		return {
			x: axis.includes("y") ? 2 * midX - x : x,
			y: axis.includes("x") ? 2 * midY - y : y,
		};
	}

	private degToRad(angle: number): number {
		return (angle * Math.PI) / 180;
	}

	// private radToDeg(angle: number): number {
	// 	return (angle * 180) / Math.PI;
	// }

	// Static properties for global state
	static showVector: boolean = false;
	static hideEncryptedOption: boolean = true;

	// Getters for private properties

	get midpoint(): Point {
		return this._midpoint;
	}

	get encryptedMessage(): boolean {
		return this._encryptedMessage;
	}

	get colorArray(): string[] {
		return this._colorArray;
	}
}
