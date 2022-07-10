const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li> ${post.title} </li>`;
            console.log(post);
        });

        document.body.innerHTML = output;
    }, 1000);
}
 

function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            posts.push(post);
            
            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}





/* createPost({title: 'Post Three', body: 'This is post three'})
    .then(getPosts)
    .catch(err => console.log(err)); */




// Async / Await
/* async function init(){
    await createPost({title: 'Post Three', body: 'This is post three'});

    getPosts();
}

init(); */


// Async / Awat with Fetch()

async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users'); 
    const data = await res.json();
    //console.log(data);
    return data;
}

console.log(fetchUsers()); // fetchUsers return a promise both res and data are promises!

// how to tap into promise data with .then()

const username= fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    //.then(data => console.log(data))
    //.then((values) => {return values});

const printName = () => {
    username.then((a) => {
    let output = [];
    console.log(a);
    //let output = `<p> ${JSON.stringify(a)} </p>`;
    a.forEach((value)=>{
        output += `<li> ${JSON.stringify(value)} </li>`;
    });
    console.log(a);
    document.body.innerHTML = output;
    });
};
      
printName();

const address = fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((values) => {
    return values.address;
  });

const printAddress = () => {
  address.then((a) => {
    let output = `<p> ${JSON.stringify(a)} </p>`;

    console.log(a);
    document.body.innerHTML = output;
  });
  
};

printAddress();
/* function postUser(){
    let data = fetchUsers().then(data => {data});
     console.log(data);
    let output = '';
    data.forEach((user)=>{
      output += `<li> ${user.name} </li>`;

      console.log(user);
    });
    
    document.body.innerHTML = output;
}
postUser();  */


    // Promise.all

    /* const promise1 = Promise.resolve('Hello World');
    const promise2 = 10;
    const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

    const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

    Promise.all([promise1,promise2,promise3,promise4]).then(values => console.log(values)); */


    // 