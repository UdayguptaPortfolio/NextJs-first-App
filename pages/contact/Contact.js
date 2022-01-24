import Link from "next/link";
export const getStaticProps=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/posts')
  const data=await res.json();
  return{
    props:{
      data:data
    }
  }
}
const contact=({data})=>{
    return(
      <div>
  
        <h1>Hello to my Contact page.</h1>
        {
          data.slice(0,4).map((el)=>{
            return (
              <div key={el.id} className="ssr-styles">
                <h3>{el.id}</h3>
                <Link href={`/blog/${el.id}`}><h2>{el.title}</h2></Link>
              </div>

            )
          })
        }
      </div>
    )
  }
  
  export default contact;