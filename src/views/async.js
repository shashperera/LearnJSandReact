const TODO_URL = 'https://jsonplaceholder.typicode.com/todos'
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

async function fetchDataInSequence(){

    console.log("Stat fetching user todo");

    const todoRes = await fetch(`${TODO_URL}/1`)
    const todo = await todoRes.json()

    console.log('Todo', todo)

    console.log("Stat fetching user post");

    const postRes = await fetch(`${POSTS_URL}/${todo.userId}`)
    const post = await postRes.json()

    console.log('Posts', post)

}

fetchDataInSequence()