"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import {useEffect} from "react"


export default function Links(props){

    useEffect(()=>{
        const router = useRouter();
        if (props.links[0].label.indexOf("<") != -1) router.prefetch("/")
        else {
            router.prefetch("/autopay")
            router.prefetch("/log")
            for(let elem in props.dynamicRoutes){
                router.prefetch(props.dynamicRoutes[elem])
            }
        }
    }, [])

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