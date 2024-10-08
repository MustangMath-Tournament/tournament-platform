import toast from "svelte-french-toast";

/**
 * Handles errors that arises during usage.
 *
 * @param error Error
 **/
export function handleError(error: Error) {
	console.log(error.message);
	console.log(error);
	toast.error(error.message);
}