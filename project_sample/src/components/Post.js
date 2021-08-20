import "../App.css";

function Post(props) {
	console.log(props.date);
	return (
		<div className="App">
			<h1> {props.title}</h1>
			<p>{props.article}</p>
			<h2> {props.date}</h2>
		</div>
	);
}

export default Post;
