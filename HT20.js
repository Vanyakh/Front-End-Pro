let getPost = () => {
	let postId = document.getElementById('postId').value;
	if (postId >= 1 && postId <= 100) {
		fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
			.then((response) => response.json())
			.then((post) => {
				let postDiv = document.getElementById('post');
				postDiv.innerHTML = `
									<div>
											<h2>${post.title}</h2>
											<p>${post.body}</p>
									</div>
							`
				let button = document.createElement('button');
				button.innerText = 'Get Comments';
				button.addEventListener('click', getComments);
				postDiv.appendChild(button);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	} else {
		alert('Please enter a valid post ID between 1 and 100');
	}
}

let getComments = () => {
	let postId = document.getElementById('postId').value;
	fetch('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
		.then((response) => response.json())
		.then((comments) => {
			let commentsDiv = document.getElementById('comments');
			commentsDiv.innerHTML = '';
			comments.forEach((comment) => {
				let commentDiv = document.createElement('div');
				commentDiv.innerHTML = `
									<h3>${comment.name}</h3>
									<p>${comment.body}</p>
							`;
				commentsDiv.appendChild(commentDiv);
			});
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}
