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

// Lesson 7
const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
h1.className = "header";
document.getElementById("root").append(h1);

// Lesson 8
const navbar = (
	<nav>
		<h1>Bob's Bistro</h1>
		<ul>
			<li>Menu</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	</nav>
);

ReactDOM.render(navbar, document.getElementById("root"));
