import { useEffect, useState } from "react";

type User = {
	id: number;
	first_name: string;
	last_name: string;
	username: string;
};

export function useCSDTUser() {
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	useEffect(() => {
		const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
		setCurrentUser(currentUser);
	}, []);

	return currentUser;
}
