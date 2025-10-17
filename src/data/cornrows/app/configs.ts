// Configuration objects for different cornrows lessons
// These can be imported and used in your slide components

export const cornrowsConfigs = {
	// Lesson 1: Iteration - Only show iteration controls
	iteration: {
		initialSettings: {
			message: "",
			iterations: 2,
			startX: 0,
			startY: 0,
			startAngle: -120,
			startDilation: 250,
			reflectX: false,
			reflectY: false,
			xTranslation: 50,
			rotation: 11,
			dilation: 92,
		},
		visibleFields: {
			showIterationMethod: true,
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
			showGoalImage: false, // Hide goal image for clean slide interface
			showOptionsNav: false, // Hide options nav for clean slide interface
			showCoordinates: false, // Hide coordinates for clean slide interface
			showGrid: false, // Show grid for better visualization
			showSectionLabels: false, // Hide section labels for cleaner slides
			showIterateField: true, // Show iterate field for iteration lesson
			showBraidSelection: false,
			// Individual starting parameter controls
			showStartX: false,
			showStartY: false,
			showStartAngle: false,
			showStartDilation: false,
			showStartReflectX: false,
			showStartReflectY: false,
		},
	},

	// Lesson 2: Dilation - Show iteration + dilation controls
	dilation: {
		initialSettings: {
			message: "",
			iterations: 16,
			startX: 0,
			startY: 0,
			startAngle: -120,
			startDilation: 250,
			reflectX: false,
			reflectY: false,
			xTranslation: 50,
			rotation: 11,
			dilation: 100,
		},
		visibleFields: {
			showIterationMethod: true,
			showStartingParams: false,
			showIterationParams: true, // Show iteration parameters section
			showBraidControl: false,
			showVectorControl: false,
			showCoordinatesLabel: false,
			showCoordinatesGroup: false,
			showStartAngleGroup: false,
			showStartDilationGroup: false,
			showStartReflectionGroup: false,
			showTranslateGroup: false,
			showRotateGroup: false,
			showDilateGroup: true, // Enable dilation controls within iteration params
			showGoalImage: false, // Hide goal image for clean slide interface
			showOptionsNav: false, // Hide options nav for clean slide interface
			showCoordinates: false, // Hide coordinates for clean slide interface
			showGrid: false, // Show grid for better visualization
			showSectionLabels: false, // Hide section labels for cleaner slides
			showIterateField: true, // Show iterate field for dilation lesson
			showBraidSelection: false,
			// Individual starting parameter controls
			showStartX: false,
			showStartY: false,
			showStartAngle: false,
			showStartDilation: false,
			showStartReflectX: false,
			showStartReflectY: false,
		},
	},

	// Lesson 3: Rotation - Show iteration + rotation controls
	rotation: {
		initialSettings: {
			message: "",
			iterations: 16,
			startX: 0,
			startY: 0,
			startAngle: 225,
			startDilation: 200,
			reflectX: false,
			reflectY: false,
			xTranslation: 50,
			rotation: 0,
			dilation: 100,
		},
		visibleFields: {
			showIterationMethod: true,
			showStartingParams: false,
			showIterationParams: true, // Show iteration parameters section
			showBraidControl: false,
			showVectorControl: false,
			showCoordinatesLabel: false,
			showCoordinatesGroup: false,
			showStartAngleGroup: false,
			showStartDilationGroup: false,
			showStartReflectionGroup: false,
			showTranslateGroup: false,
			showRotateGroup: true, // Enable rotation controls within iteration params
			showDilateGroup: false,
			showGoalImage: false, // Hide goal image for clean slide interface
			showOptionsNav: false, // Hide options nav for clean slide interface
			showCoordinates: false, // Hide coordinates for clean slide interface
			showGrid: false, // Show grid for better visualization
			showSectionLabels: false, // Hide section labels for cleaner slides
			showIterateField: true, // Show iterate field for rotation lesson
			showBraidSelection: false,
			// Individual starting parameter controls
			showStartX: false,
			showStartY: false,
			showStartAngle: false,
			showStartDilation: false,
			showStartReflectX: false,
			showStartReflectY: false,
		},
	},

	// Lesson 4: Translation - Show iteration + translation controls
	translation: {
		initialSettings: {
			message: "",
			iterations: 16,
			startX: 0,
			startY: 0,
			startAngle: -120,
			startDilation: 250,
			reflectX: false,
			reflectY: false,
			xTranslation: 100,
			rotation: 11,
			dilation: 92,
		},
		visibleFields: {
			showIterationMethod: true,
			showStartingParams: false,
			showIterationParams: true, // Show iteration parameters section
			showBraidControl: false,
			showVectorControl: false,
			showCoordinatesLabel: false,
			showCoordinatesGroup: false,
			showStartAngleGroup: false,
			showStartDilationGroup: false,
			showStartReflectionGroup: false,
			showTranslateGroup: true, // Enable translation controls within iteration params
			showRotateGroup: false,
			showDilateGroup: false,
			showGoalImage: false, // Hide goal image for clean slide interface
			showOptionsNav: false, // Hide options nav for clean slide interface
			showCoordinates: false, // Hide coordinates for clean slide interface
			showGrid: false, // Show grid for better visualization
			showSectionLabels: false, // Hide section labels for cleaner slides
			showIterateField: true, // Show iterate field for translation lesson
			showBraidSelection: false,
			// Individual starting parameter controls
			showStartX: false,
			showStartY: false,
			showStartAngle: false,
			showStartDilation: false,
			showStartReflectX: false,
			showStartReflectY: false,
		},
	},

	// Lesson 5: Vectors - Show iteration + vector controls
	vectors: {
		initialSettings: {
			message: "",
			iterations: 16,
			startX: 0,
			startY: 0,
			startAngle: -120,
			startDilation: 250,
			reflectX: false,
			reflectY: false,
			xTranslation: 50,
			rotation: 11,
			dilation: 92,
		},
		visibleFields: {
			showIterationMethod: true,
			showStartingParams: false,
			showIterationParams: false,
			showBraidControl: false,
			showVectorControl: true,
			showCoordinatesLabel: false,
			showCoordinatesGroup: false,
			showStartAngleGroup: false,
			showStartDilationGroup: false,
			showStartReflectionGroup: false,
			showTranslateGroup: false,
			showRotateGroup: false,
			showDilateGroup: false,
			showGoalImage: false, // Hide goal image for clean slide interface
			showOptionsNav: false, // Hide options nav for clean slide interface
			showCoordinates: false, // Hide coordinates for clean slide interface
			showGrid: false, // Show grid for better visualization
			showSectionLabels: false, // Hide section labels for cleaner slides
			showIterateField: true, // Show iterate field for vectors lesson
			showBraidSelection: false,
			// Individual starting parameter controls
			showStartX: false,
			showStartY: false,
			showStartAngle: false,
			showStartDilation: false,
			showStartReflectX: false,
			showStartReflectY: false,
		},
	},

	// Position Tutorial Configurations

	// Position Lesson 1: Starting Point - Show coordinates and starting position controls
	position: {
		initialSettings: {
			message: "",
			iterations: 18,
			startX: 0,
			startY: 0,
			startAngle: -120,
			startDilation: 200,
			reflectX: false,
			reflectY: false,
			xTranslation: 50,
			rotation: 11,
			dilation: 92,
		},
		visibleFields: {
			showIterationMethod: false,
			showStartingParams: false, // Use individual controls instead
			showIterationParams: false,
			showBraidControl: false,
			showVectorControl: false,
			showCoordinatesLabel: false, // Show coordinates label
			showCoordinatesGroup: false, // Show coordinates group
			showStartAngleGroup: false,
			showStartDilationGroup: false,
			showStartReflectionGroup: false,
			showTranslateGroup: false,
			showRotateGroup: false,
			showDilateGroup: false,
			showGoalImage: false, // Show goal image for position lesson
			showOptionsNav: false, // Hide options nav for clean slide interface
			showCoordinates: true, // Show coordinates for position lesson
			showGrid: true, // Show grid for better visualization
			showSectionLabels: false, // Hide section labels for cleaner slides
			// Individual starting parameter controls
			showStartX: true, // Show X coordinate control
			showStartY: true, // Show Y coordinate control
			showStartAngle: false,
			showStartDilation: false,
			showStartReflectX: false,
			showStartReflectY: false,
			showIterateField: false,
			showBraidSelection: false,
		},
	},

	// Position Lesson 2: Starting Angle - Show starting angle controls
	positionAngle: {
		initialSettings: {
			message: "",
			iterations: 16,
			startX: 0,
			startY: 0,
			startAngle: 0, // Changed from -120 to 0 for angle lesson
			startDilation: 50, // Changed from 200 to 50 for angle lesson
			reflectX: false,
			reflectY: false,
			xTranslation: 50,
			rotation: 0, // Changed from 11 to 0 for angle lesson
			dilation: 108, // Changed from 92 to 108 for angle lesson
		},
		visibleFields: {
			showIterationMethod: false,
			showStartingParams: false, // Use individual controls instead
			showIterationParams: false,
			showBraidControl: false,
			showVectorControl: false,
			showCoordinatesLabel: false,
			showCoordinatesGroup: false,
			showStartAngleGroup: false, // Use individual control instead
			showStartDilationGroup: false,
			showStartReflectionGroup: false,
			showTranslateGroup: false,
			showRotateGroup: false,
			showDilateGroup: false,
			showGoalImage: false, // Show goal image for angle lesson
			showOptionsNav: false, // Hide options nav for clean slide interface
			showCoordinates: false, // Hide coordinates for angle lesson
			showGrid: true, // Show grid for better visualization
			showSectionLabels: false, // Hide section labels for cleaner slides
			// Individual starting parameter controls
			showStartX: false,
			showStartY: false,
			showStartAngle: true, // Show starting angle control
			showStartDilation: false,
			showStartReflectX: false,
			showStartReflectY: false,
			showIterateField: false,
			showBraidSelection: false,
		},
	},

	// Position Lesson 3: Starting Dilation - Show starting dilation controls
	positionDilation: {
		initialSettings: {
			message: "",
			iterations: 10, // Changed from 18 to 10 for dilation lesson
			startX: 80, // Changed from 0 to 80 for dilation lesson
			startY: 80, // Changed from 0 to 80 for dilation lesson
			startAngle: -100, // Changed from -120 to -100 for dilation lesson
			startDilation: 80, // Changed from 200 to 80 for dilation lesson
			reflectX: false,
			reflectY: false,
			xTranslation: 50,
			rotation: -5, // Changed from 11 to -5 for dilation lesson
			dilation: 90, // Changed from 92 to 90 for dilation lesson
		},
		visibleFields: {
			showIterationMethod: false,
			showStartingParams: false, // Use individual controls instead
			showIterationParams: false,
			showBraidControl: false,
			showVectorControl: false,
			showCoordinatesLabel: false,
			showCoordinatesGroup: false,
			showStartAngleGroup: false,
			showStartDilationGroup: false, // Use individual control instead
			showStartReflectionGroup: false,
			showTranslateGroup: false,
			showRotateGroup: false,
			showDilateGroup: false,
			showGoalImage: false, // Show goal image for dilation lesson
			showOptionsNav: false, // Hide options nav for clean slide interface
			showCoordinates: false, // Hide coordinates for dilation lesson
			showGrid: true, // Show grid for better visualization
			showSectionLabels: false, // Hide section labels for cleaner slides
			// Individual starting parameter controls
			showStartX: false,
			showStartY: false,
			showStartAngle: false,
			showStartDilation: true, // Show starting dilation control
			showStartReflectX: false,
			showStartReflectY: false,
			showIterateField: false,
			showBraidSelection: false,
		},
	},

	// Position Lesson 4: Starting Reflection - Show reflection controls and braid management
	positionReflection: {
		initialSettings: {
			message: "",
			iterations: 10, // Changed from 18 to 10 for reflection lesson
			startX: 30, // Changed from 0 to 30 for reflection lesson
			startY: 30, // Changed from 0 to 30 for reflection lesson
			startAngle: 65, // Changed from -120 to 65 for reflection lesson
			startDilation: 60, // Changed from 200 to 60 for reflection lesson
			reflectX: false,
			reflectY: false,
			xTranslation: 50,
			rotation: 0, // Changed from 11 to 0 for reflection lesson
			dilation: 110, // Changed from 92 to 110 for reflection lesson
		},
		visibleFields: {
			showIterationMethod: false,
			showStartingParams: false, // Use individual controls instead
			showIterationParams: false,
			showBraidControl: true, // Show braid control for reflection lesson (add/delete braids)
			showVectorControl: false,
			showCoordinatesLabel: true, // Show coordinates label for reflection lesson
			showCoordinatesGroup: true, // Show coordinates group for reflection lesson
			showStartAngleGroup: false,
			showStartDilationGroup: false,
			showStartReflectionGroup: false, // Use individual controls instead
			showTranslateGroup: false,
			showRotateGroup: false,
			showDilateGroup: false,
			showGoalImage: false, // Show goal image for reflection lesson
			showOptionsNav: true, // Show options nav for reflection lesson (needed for "Add at Current Point")
			showCoordinates: true, // Show coordinates for reflection lesson
			showGrid: true, // Show grid for better visualization
			showSectionLabels: false, // Hide section labels for cleaner slides
			// Individual starting parameter controls
			showStartX: true, // Show X coordinate control for reflection lesson
			showStartY: true, // Show Y coordinate control for reflection lesson
			showStartAngle: false,
			showStartDilation: false,
			showStartReflectX: true, // Show X reflection control
			showStartReflectY: true, // Show Y reflection control
			showIterateField: false,
			showBraidSelection: true, // Show braid selection for reflection lesson
		},
	},

	// Full app - Show all controls
	full: {
		initialSettings: {
			message: "",
			iterations: 16,
			startX: 0,
			startY: 0,
			startAngle: -120,
			startDilation: 250,
			reflectX: false,
			reflectY: false,
			xTranslation: 50,
			rotation: 11,
			dilation: 92,
		},
		visibleFields: {
			showIterationMethod: true,
			showStartingParams: true, // Show all starting parameters as a group
			showIterationParams: true,
			showBraidControl: true,
			showVectorControl: true,
			showCoordinatesLabel: true,
			showCoordinatesGroup: true,
			showStartAngleGroup: true,
			showStartDilationGroup: true,
			showStartReflectionGroup: true,
			showTranslateGroup: true,
			showRotateGroup: true,
			showDilateGroup: true,
			showGoalImage: true, // Show goal image in full app
			showOptionsNav: true, // Show options nav in full app
			showCoordinates: true, // Show coordinates in full app
			showGrid: true, // Show grid in full app
			showSectionLabels: true, // Show section labels in full app
			// Individual starting parameter controls (all true for full app)
			showStartX: true,
			showStartY: true,
			showStartAngle: true,
			showStartDilation: true,
			showStartReflectX: true,
			showStartReflectY: true,
			showIterateField: true, // Show iterate field in full app
			showBraidSelection: true, // Show braid selection in full app
		},
	},
};
