import Post from "./components/Post";
import Welcome from "./components/Welcome";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import posts from "./posts.json";
import Button from "@material-ui/core/Button";

function App() {
	return (
		<div>
			<PrimarySearchAppBar />

			<Post title={posts[1].title} article={posts[1].article} date={posts[1].date}></Post>
			<Button>ADD A TASK</Button>
			<hr></hr>

			<Post title={posts[1].title} article={posts[1].article} date={posts[1].date}></Post>
			<h4>ADD A TASK</h4>
		</div>
	);
}

export default App;


