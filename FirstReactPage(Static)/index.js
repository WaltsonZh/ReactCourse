// Lesson 3
ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));

// Lesson 4
ReactDOM.render(
	<ul>
		<li>Thing 1</li>
		<li>Thing 2</li>
	</ul>,
	document.getElementById("root")
);

// Lesson 6
function MainContent() {
	return <h1>I'm learning React!</h1>;
}

ReactDOM.render(
	<div>
		<MainContent />
	</div>,
	document.getElementById("root")
);