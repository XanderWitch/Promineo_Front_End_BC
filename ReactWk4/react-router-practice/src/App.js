import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
} from 'react-router-dom';

//different routes we want to have access to

export default function App() {
	//create mock data
	const posts = [
		{
			id: 1,
			title: 'My first post',
			date: '4-7-2020',
			content: 'This is my first stupid post ever. Not.',
		},
		{
			id: 2,
			title: 'Checking in',
			date: '4-8-2020',
			content: "What's up, peeps?",
		},
		{
			id: 3,
			title: 'Vacation time!',
			date: '4-9-2020',
			content: "I'm goin' to Jamaica. Later, y'all!",
		},
		{
			id: 4,
			title: 'Plane crash',
			date: '4-10-2020',
			content: "Nah. Just kidding. Layin' on the beach perpetratin a tan",
		},
	];

	return (
		<Container>
			<Router>
				<div>
					<ButtonGroup>
						<Button variant='outline-secondary'>
							<Link to='/'>Home</Link>
						</Button>
						<Button variant='outline-secondary'>
							<Link to='/friends'>Friends</Link>
						</Button>{' '}
						<Button variant='outline-secondary'>
							<Link to='/posts'>Posts</Link>
						</Button>{' '}
					</ButtonGroup>

					{/* Routes render different components, depending on the URL  */}
					<Switch>
						{/* evaluate a value and render one or another view/route, posts is a prop */}
						<Route path='/posts'>
							<Posts posts={posts} />
						</Route>
						<Route path='/friends'>
							{/* Can pass in data as straight array */}
							<Friends
								names={[
									'Barb',
									'Xen',
									'Kimber',
									'Meg',
									'Lily',
									'Alan',
									'Jay',
									'A.J.',
								]}
							/>
						</Route>
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		</Container>
	);
}

function Home() {
	return <h2>Home</h2>;
}

function Friends(props) {
	//destructuring names from props
	const { names } = props;
	return (
		<>
			<h2>Friends</h2>
			<div>
				<ul>
					{names.map((friend, index) => (
						<li key={index}>{friend}</li>
					))}
				</ul>
			</div>
			;
		</>
	);
}

function Posts({ posts }) {
	//will display links to individual posts
	const match = useRouteMatch();
	const findPostById = (id) => posts.filter((post) => post.id == id)[0];

	return (
		<div>
			<h2>Posts</h2>

			{posts.map((post, index) => {
				return (
					<Alert key={index} variant='primary'>
						{/* match.url sets the path */}
						<Link to={`${match.url}/${post.id}`}>
							{post.title}
						</Link>
					</Alert>
				);
			})}

			<Switch>
				{/* match.path matching the full path set earlier, :postId is a path parameter, becomes a value*/}
				<Route
					path={`${match.path}/:postId`}
					render={(props) => (
						<Post
							{...props}
							data={findPostById(
								props.match.params.postId
							)}
						/>
					)}
				/>
				{/* render function above takes a function to return what your going to render instead of opening and closing Route tag so we have access to the id that is in the path once it is clicked */}
				{/* add a default below */}
				<Route path={match.path}>
					<h3>Please Select a Post to View It</h3>
				</Route>
			</Switch>
		</div>
	);
}

function Post(props) {
	const { data } = props;
	return data === undefined ? (
		<h1>404 - Post Not Found</h1>
	) : (
		<Card>
			<Card.Header>{data.title}</Card.Header>
			<Card.Body>
				<Card.Subtitle>{data.date}</Card.Subtitle>
				<Card.Text>{data.content}</Card.Text>
			</Card.Body>
		</Card>
	);
}
