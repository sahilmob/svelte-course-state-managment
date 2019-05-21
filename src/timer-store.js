import { readable } from "svelte/store";

let count = 0;
const timer = readable(0, set => {
	const interval = setInterval(() => {
		count++;
		set(count);
	}, 1000);
	return () => {
		clearInterval(interval);
	};
});

export default timer;
