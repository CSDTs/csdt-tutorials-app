# Cornrows Math App - Configuration Guide

This guide shows how to use the `CornrowsMathApp` component with different configurations to show/hide specific controls and initialize braids with different settings.

## Basic Usage

```tsx
import { CornrowsMathApp, cornrowsConfigs } from "../app";

// Use a pre-configured setup
<CornrowsMathApp
	initialSettings={cornrowsConfigs.iteration.initialSettings}
	visibleFields={cornrowsConfigs.iteration.visibleFields}
/>;
```

## Available Configurations

### 1. Iteration Only

Shows only the iteration controls:

```tsx
cornrowsConfigs.iteration;
```

### 2. Dilation Lesson

Shows iteration + dilation controls:

```tsx
cornrowsConfigs.dilation;
```

### 3. Rotation Lesson

Shows iteration + rotation controls:

```tsx
cornrowsConfigs.rotation;
```

### 4. Translation Lesson

Shows iteration + translation controls:

```tsx
cornrowsConfigs.translation;
```

### 5. Vectors Lesson

Shows iteration + vector controls:

```tsx
cornrowsConfigs.vectors;
```

### 6. Full App

Shows all controls:

```tsx
cornrowsConfigs.full;
```

## Custom Configuration

You can also create your own configuration:

```tsx
const customConfig = {
	initialSettings: {
		message: "",
		iterations: 5,
		startX: 0,
		startY: 0,
		startAngle: -90,
		startDilation: 200,
		reflectX: false,
		reflectY: false,
		xTranslation: 75,
		rotation: 15,
		dilation: 85,
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
		showTranslateGroup: true, // Only show translation
		showRotateGroup: true, // And rotation
		showDilateGroup: false,
		showGoalImage: false, // Hide goal image
		showOptionsNav: false, // Hide options nav
		showCoordinates: false, // Hide coordinates
		showGrid: false, // Hide grid for cleaner look
		showSectionLabels: false, // Hide section labels for cleaner look
	},
};

<CornrowsMathApp initialSettings={customConfig.initialSettings} visibleFields={customConfig.visibleFields} />;
```

## Field Visibility Options

The `visibleFields` object controls which form sections are shown:

- `showIterationMethod`: Iteration count dropdown
- `showStartingParams`: Starting position and angle controls
- `showIterationParams`: Translation, rotation, dilation controls
- `showBraidControl`: Add/delete braid buttons
- `showVectorControl`: Show/hide vector toggle
- `showCoordinatesLabel`: Mouse coordinates display
- `showCoordinatesGroup`: Coordinate input fields
- `showStartAngleGroup`: Starting angle controls
- `showStartDilationGroup`: Starting dilation controls
- `showStartReflectionGroup`: Starting reflection checkboxes
- `showTranslateGroup`: Translation controls
- `showRotateGroup`: Rotation controls
- `showDilateGroup`: Dilation controls
- `showGoalImage`: Goal image display
- `showOptionsNav`: Options navigation dropdown
- `showCoordinates`: Mouse coordinates display
- `showGrid`: Grid visibility
- `showSectionLabels`: Section labels (e.g., "Define Starting Parameters:")

## Example: Creating Different Lesson Slides

```tsx
// Lesson 1: Iteration
<CornrowsMathApp
  initialSettings={cornrowsConfigs.iteration.initialSettings}
  visibleFields={cornrowsConfigs.iteration.visibleFields}
/>

// Lesson 2: Dilation
<CornrowsMathApp
  initialSettings={cornrowsConfigs.dilation.initialSettings}
  visibleFields={cornrowsConfigs.dilation.visibleFields}
/>

// Lesson 3: Rotation
<CornrowsMathApp
  initialSettings={cornrowsConfigs.rotation.initialSettings}
  visibleFields={cornrowsConfigs.rotation.visibleFields}
/>
```

This approach gives you complete control over:

- ✅ **Initial braid settings** (iterations, angles, positions, etc.)
- ✅ **Which controls are visible** (show only relevant fields for each lesson)
- ✅ **Clean slide interface** (hide goal image and options nav for cleaner slides)
- ✅ **No slide navigation complexity** (each component is independent)
- ✅ **Easy customization** (modify configs or create your own)

## Clean Slide Interface

For slide usage, all lesson configs automatically hide:

- `showGoalImage: false` - Hides the goal image
- `showOptionsNav: false` - Hides the "More Options" dropdown
- `showCoordinates: false` - Hides the mouse coordinates display
- `showSectionLabels: false` - Hides section labels like "Define Starting Parameters:"

And show:

- `showGrid: true` - Shows the grid for better visualization

This creates a cleaner, more focused interface for tutorial slides while keeping the full interface available in the `full` config.
