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

// Lesson 13
const page = (
	<div>
		<h1>My awesome website in React</h1>
		<h3>Reasons I love React</h3>
		<ol>
			<li>It's composable</li>
			<li>It's declarative</li>
			<li>It's a hireable skill</li>
			<li>It's actively maintained by skilled people</li>
		</ol>
	</div>
);

ReactDOM.render(page, document.getElementById("root"));
// document.getElementById("root").append(JSON.stringify(page))

// Lesson 14
const page1 = (
	<div>
		<img src="./react-logo.png" width="40px" />
		<h1>Fun facts about React</h1>
		<ul>
			<li>Was first released in 2013</li>
			<li>Was originally created by Jordan Walke</li>
			<li>Has well over 100K stars on GitHub</li>
			<li>Is maintained by Facebook</li>
			<li>Powers thousands of enterprise apps, including mobile apps</li>
		</ul>
	</div>
);

ReactDOM.render(page1, document.getElementById("root"));

// Lesson 16
function Page() {
	return (
		<ol>
			<li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
			<li>I'm more likely to get a job as a developer if I know React</li>
		</ol>
	);
}

ReactDOM.render(<Page />, document.getElementById("root"));

// Lesson 17
function Page1() {
	return (
		<div>
			<header>
				<nav>
					<img src="./react-logo.png" width="40px" />
				</nav>
			</header>
			<h1>Reasons I'm excited to learn React</h1>
			<ol>
				<li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
				<li>I'm more likely to get a job as a developer if I know React</li>
			</ol>
			<footer>
				<small>© 2021 Ziroll development. All rights reserved.</small>
			</footer>
		</div>
	);
}

ReactDOM.render(<Page1 />, document.getElementById("root"));
