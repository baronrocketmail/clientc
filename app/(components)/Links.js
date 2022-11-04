import Link from "next/link";
import { useRouter } from 'next/navigation';
import {useEffect} from "react"


export default function Links(props){



    let result = []
    for (let elem in props.links){
        result.push(<><Link prefetch = {false} href = {props.links[elem].href}> {props.links[elem].label} </Link> <br/></>)
    }
    return(
            <div className={"links"}>
                {result}
            </div>
    )
}