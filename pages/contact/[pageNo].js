import {useRouter} from 'next/router';

const pageNo=()=>{
    const router=useRouter();
    const pageNo=router.query.pageNo;
    return(
      <div>
  
        <h1>Hello to my Contact Page No {pageNo}.</h1>
      </div>
    )
  }
  
  export default pageNo;