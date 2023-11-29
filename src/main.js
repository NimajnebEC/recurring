const LENGTH = 500;
const EXTRA = 500;

window.addEventListener("load", () => {
	const params = new URLSearchParams(window.location.search);
	const repeat = params.get("repeat");
	const base = params.get("base");

	// Check URL Parameters
	if (!base || !repeat) {
		const error = document.createElement("h1");
		error.innerText = "⚠️ Invalid URL Parameters";
		document.body.appendChild(error);
		return;
	}

	// Initialise
	const longerRepeat = repeat.repeat(Math.ceil(LENGTH / repeat.length));
	const main = document.createElement("main");
	document.title = `${base}${longerRepeat}`;
	document.body.appendChild(main);
	main.innerText = base;

	function update() {
		const target = window.scrollY + window.innerHeight + EXTRA;
		while (main.offsetHeight < target) {
			main.innerText += longerRepeat;
		}
	}

	window.addEventListener("resize", update);
	window.addEventListener("scroll", update);

	update();
});
