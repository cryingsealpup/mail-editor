export function exportHtml(editor, filename) {
	editor.exportHtml(
		(data) => {
			const { html } = data;
			const element = document.createElement("a");
			const file = new Blob([html], { type: 'html/plain' });

			element.href = URL.createObjectURL(file);
			element.download = `${filename}.html`;
			document.body.appendChild(element); // Required for this to work in FireFox
			element.click();
		}
	)
}

export function saveDesign(editor, filename) {
	editor.saveDesign(
		(design) => {
			const element = document.createElement("a");
			const file = new Blob([JSON.stringify(design)], { type: 'json/plain' });
			element.href = URL.createObjectURL(file);
			element.download = `${filename}.json`;
			document.body.appendChild(element); // Required for this to work in FireFox
			element.click();
		}
	)
}

export function importDesign(editor, hiddenPicker) {
	const file = hiddenPicker.files[0];
	if (!file) return;
	if (file.type !== "application/json") return;
	const reader = new FileReader();
	reader.onload = (e) => {
		const result = e.target?.result;
		if (result) {
			editor.loadDesign(JSON.parse(result.toString()));
		}
	};
	reader.readAsText(file);
}