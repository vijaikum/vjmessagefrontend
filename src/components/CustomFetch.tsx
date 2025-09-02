import { useEffect, useState } from "react";


const CustomFetch = (url) =>{

     interface dataProps {
    userId?: number,
    id?: number,
    title?: string,
    body?: string
    }

    const [data,setData] = useState<[dataProps]>([{}]);
    const [loading,setLoading] = useState(true);
    
        useEffect(()=>{
            async function getData(){
            const response =  await fetch(url);
            console.log(response);
            if (!response.ok){
                //throw new Error(`Response status: ${response.status}`);
                return {data,loading,error:`Response status: ${response.status}`};
            }
            const allData = await response.json();
            
            setData(allData);
            setLoading(false);
            }
            getData();
        },[])

        return {data,loading,error:null}
}



export default CustomFetch;