import React from "react";

export const getStaticPaths=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    const data=await res.json();

    const paths=data.map((el)=>{
        return{
            params:{
                pageNo:el.id.toString(),
            }
        }
    })
    return{
      paths,
      fallback:false
    }
  }
  export const getStaticProps=async(context)=>{
      const id=context.params.pageNo;
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data=await res.json();
    return{
      props:{
        data:data
      }
    }
  }

const myData=({data})=>{
    const { id, title, body } = data;
    //console.log("Title",title)
    return(
<div className="ssr-styles ssr-styles-inside">
    Helloo...
    <h3>{id}</h3>
    <h2>{title}</h2>
    <p>{body}</p>
</div>
    )
}
export default myData;