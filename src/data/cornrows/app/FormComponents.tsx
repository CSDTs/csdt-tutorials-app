import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";

interface FormInputProps {
	id: string;
	label: string;
	type: "text" | "number";
	value: string | number;
	onChange: (value: string) => void;
	placeholder?: string;
	addonBefore?: string;
	addonAfter?: string;
	hidden?: boolean;
	attentionSeeker?: boolean;
	onClick?: () => void;
}

export const FormInput: React.FC<FormInputProps> = ({
	id,
	label,
	type,
	value,
	onChange,
	placeholder,
	addonBefore,
	addonAfter,
	hidden = false,
	attentionSeeker = false,
	onClick,
}) => {
	if (hidden) return null;

	return (
		<div className="space-y-2">
			<Label htmlFor={id} className="text-sm font-medium">
				{label}
			</Label>
			<div className="flex items-center space-x-2">
				{addonBefore && (
					<span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded border whitespace-nowrap">
						{addonBefore}
					</span>
				)}
				<Input
					id={id}
					type={type}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					placeholder={placeholder}
					onClick={onClick}
					className={`${attentionSeeker ? "ring-2 ring-blue-500 animate-pulse" : ""}`}
				/>
				{addonAfter && (
					<span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded border">{addonAfter}</span>
				)}
			</div>
		</div>
	);
};

interface CheckboxGroupProps {
	label: string;
	options: Array<{
		id: string;
		label: string;
		checked: boolean;
		onChange: (checked: boolean) => void;
	}>;
	hidden?: boolean;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ label, options, hidden = false }) => {
	if (hidden) return null;

	return (
		<div className="space-y-3">
			<Label className="text-sm font-medium">{label}</Label>
			<div className="space-y-2">
				{options.map((option) => (
					<div key={option.id} className="flex items-center space-x-2">
						<Checkbox id={option.id} checked={option.checked} onCheckedChange={option.onChange} />
						<Label htmlFor={option.id} className="text-sm">
							{option.label}
						</Label>
					</div>
				))}
			</div>
		</div>
	);
};

interface ButtonGroupProps {
	buttons: Array<{
		id: string;
		text: string;
		variant: "success" | "danger" | "secondary" | "primary";
		onClick: () => void;
		disabled?: boolean;
	}>;
	hidden?: boolean;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons, hidden = false }) => {
	if (hidden) return null;

	return (
		<div className="space-y-3">
			<div className="grid grid-cols-2 gap-2">
				{buttons.map((button) => (
					<Button
						key={button.id}
						id={button.id}
						variant={
							button.variant === "success"
								? "default"
								: button.variant === "danger"
									? "destructive"
									: button.variant === "secondary"
										? "secondary"
										: "default"
						}
						size="sm"
						onClick={button.onClick}
						disabled={button.disabled}
						className="w-full">
						{button.text}
					</Button>
				))}
			</div>
		</div>
	);
};

interface DropdownProps {
	id: string;
	label: string;
	options: Array<{
		value: string;
		text: string;
	}>;
	value: string;
	onChange: (value: string) => void;
	hidden?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({ id, label, options, value, onChange, hidden = false }) => {
	if (hidden) return null;

	return (
		<div className="space-y-2">
			<Label htmlFor={id} className="text-sm font-medium">
				{label}
			</Label>
			<Select value={value} onValueChange={onChange}>
				<SelectTrigger id={id}>
					<SelectValue placeholder="Select an option" />
				</SelectTrigger>
				<SelectContent>
					{options.map((option) => (
						<SelectItem key={option.value} value={option.value}>
							{option.text}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};
