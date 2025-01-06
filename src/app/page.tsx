import Link from "next/link";

export default async function Home() {

  const url = await fetch('https://jsonplaceholder.typicode.com/posts');
  let response = await url.json();
  console.log(response)
  return(
    <div>
      <div className="p-5 text-center text-3xl font-bold font-serif">Here are the posts!</div>
      <div className="flex flex-col">
      {
        response.map((res:any, key:number)=>(
          <div key={res.id}>
         <Link href={`${res.id}`} > 
        <div className="border m-2 p-1 rounded-lg font-serif">{`${key+1}. ${res.title}`}
        </div>
        </Link>
        </div>
        ))
      }
      </div>
    </div>
  )
}



// import Link from "next/link";

// export default async function Home() {

//   const url = await fetch("https://simple-books-api.glitch.me/books");
//   const res  = await url.json();
//   console.log(res);
//   return(
//     <div>
//       hello
//       {res.map((book)=>(
//         <div>
//           <Link href={`${book.id}`}>
//             <h1>{book.name}</h1>
//           </Link>
//           {/* {book.name} 
//           {book.id} */}
//         </div>
//       ))}

     
//     </div>
//   )

// }








// "use client"
// import Image from "next/image";
// import { useRef, useState } from "react";

// export default function Home() {
//   let [count, setCount] = useState(0);
//   // let inpValue = useRef();
//   let increment = () => {
//     setCount(++count);
//   }
//   let reset = () => {
//     setCount(0);
//     // console.log(inpValue.current.value);
//   }
//   let decrement = () => {
//     setCount(--count);
//   }
//   return (
//     <div className="m-10  ">
//       <div className=" flex justify-center text-3xl font-bold text-blue-700 ">{count}</div>
//       <div className="m-10 flex justify-center">
//         <div className="border h-10">
//           <button onClick={
//             () => setCount((++count))
//           } className="bg-green-500 h-20 w-20">++</button>
//         </div>
//         <div className="border h-10">
//           <button onClick={reset} className="bg-gray-500 h-20 w-20">Reset</button>
//         </div>
//         <div className="border h-10">
//           <button onClick={decrement} className="bg-red-500 h-20 w-20">--</button>
//         </div>

//       </div>
//       {/* <div className="">
//         <input ref={inpValue} type="text" name="" id="" className="border border-black"/>
//       </div> */}
//     </div>
//   );
// }
