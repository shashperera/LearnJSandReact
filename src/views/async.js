const TODO_URL = 'https://jsonplaceholder.typicode.com/todos'
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

//Async Data Fetching in sequence
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

//Async Data Fetching in parallel - multiple requests at the same time
//for data not dependent on each other
async function fetchDataInParallel(){

    console.log('Fetching both posts and todos')

    const requests = [fetch(TODO_URL), fetch(POSTS_URL)]

    const[todoResponse,postResponse] = await Promise.all(requests) //return all data once all promises has finished
    const todos = await todoResponse.json()
    const posts = await postResponse.json()

    console.log('Todos parallel',todos)
    console.log('Posts in parallel',posts)

}

// fetchDataInParallel()

const Async = () => {
    return (
        <div>
            <p>
            <fetchDataInSequence />

                <code>

                </code>
            </p>
        </div>
    )
}


export default Async;
// const bool = (val)=> {val? "true":"false"};
// console.log(bool([]));
// console.log(bool(""))
// console.log(bool(0))
// console.log(bool(null))
