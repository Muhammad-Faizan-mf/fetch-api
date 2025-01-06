import Link from "next/link";

export default async function Posts(params:type) {
    console.log(params.params.id)
    const url = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.params.id}`);
    let response = await url.json();
    return(
        <div className="font-serif">
            <div className="p-5 text-center text-3xl font-bold font-serif">Post Details</div>
            <div className="flex flex-col justify-center items-center my-10 border p-5">
                <h1 className="font-bold">Title</h1>
            <div>{response.title}</div>
            <h1 className="font-bold">Body</h1>
            <div>{response.body}</div>
            </div>
            <div className="flex items-center justify-center">
                <Link href='/'>
                <div className="bg-black text-white h-10 w-[100px] rounded-md text-xl p-1 text-center">
                <button>Back</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}





// export default async function Book(props){

//     const url = await fetch(`https://simple-books-api.glitch.me/books/${props.params.id}`)
//     const res = await url.json();
//     return(
//         <div>
//             {res.name}
//             {
//                 props.params.id
//             }
//         </div>
//     )
// }