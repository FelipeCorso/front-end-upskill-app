export default (text = "boop") => {
	const element = document.createElement("div");
	element.innerHTML = text;
	return element;
};
