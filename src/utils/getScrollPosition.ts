
export const getScrollPosition = (id: string) => {
	const element = document.getElementById(id);
	return element?.offsetTop;
};
