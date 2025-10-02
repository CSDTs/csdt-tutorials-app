"use client";

import {
	IconBook,
	IconChalkboardTeacher,
	IconDotsVertical,
	IconLogin,
	IconLogout,
	IconPhoto,
	IconUser,
	IconUserPlus,
} from "@tabler/icons-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";

export function NavUser({
	user,
}: {
	user: {
		name: string;
		email?: string;
		avatar?: string;
		id: number;
	} | null;
}) {
	const { isMobile } = useSidebar();

	// If no user is logged in, show login/sign up buttons
	if (!user || !user.name) {
		return (
			<div className="flex items-center gap-2">
				<Button variant="ghost" size="sm" asChild>
					<a href="/accounts/login/" className="flex items-center gap-2">
						<IconLogin className="size-4" />
						Login
					</a>
				</Button>
				<Button variant="outline" size="sm" asChild>
					<a href="/accounts/signup/" className="flex items-center gap-2">
						<IconUserPlus className="size-4" />
						Sign Up
					</a>
				</Button>
			</div>
		);
	}

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
							<Avatar className="h-8 w-8 rounded-lg grayscale ">
								<AvatarImage src={user.avatar} alt={user.name} />
								<AvatarFallback className="rounded-lg">
									<IconUser className="size-4 text-accent-foreground" />
								</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-medium">{user.name}</span>

								<span className="text-muted-foreground truncate text-xs">{user.email}</span>
							</div>
							<IconDotsVertical className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
						side={isMobile ? "bottom" : "right"}
						align="end"
						sideOffset={4}>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar className="h-8 w-8 rounded-lg">
									<AvatarImage src={user.avatar} alt={user.name} />
									<AvatarFallback className="rounded-lg">
										<IconUser className="size-4" />
									</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">{user.name}</span>

									<span className="text-muted-foreground truncate text-xs">{user.email}</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem asChild>
								<a href={`/users/${user.id}`} className="flex items-center gap-2">
									<IconPhoto />
									My Projects
								</a>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<a href={`/users/${user.id}/classes`} className="flex items-center gap-2">
									<IconChalkboardTeacher />
									My Classrooms
								</a>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<a href={`/users/${user.id}/workbooks`} className="flex items-center gap-2">
									<IconBook />
									My Workbooks
								</a>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem asChild>
							<a href="/accounts/logout/" className="flex items-center gap-2">
								<IconLogout />
								Log out
							</a>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
