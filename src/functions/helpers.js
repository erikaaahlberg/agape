export function hideElement (element) {
	element.classList.add('hidden');
}
export function displayElement (element) {
	element.classList.remove('hidden');
}
export function formatTimeForPostRequest (date) {
	/* Min will always have the same value */
	const min = '00';
	const hour = date.getHours();
	
	return `${hour}:${min}`;
}
export function formatDateForPostRequest (date) {
	const year = date.getFullYear();
	let month = date.getMonth() + 1;
	const day = date.getDate();

	if (monthNumber < 10) {
		month = `0${monthNumber}`;
	}

	return `${year}-${month}-${day}`;
}