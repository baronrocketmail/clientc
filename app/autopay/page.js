"use client";
import Links from "../(components)/Links";
import {use, useState} from "react"

async function getAutopayActive(){
    return fetch("https://undefxx.com/api/info/autopay", { next: { revalidate: 1 } }).then(x=> x.json());
}

export default function Page(){
    const [autopayActive, setAutopayActive] = useState(use(getAutopayActive()))


    let links = [{label: "<---", href: "/"}, {label:  autopayActive ? ("autopay: active") : ("autopay: inactive"), href: "/"}]


    return(
            <>
            <Links links = {links}/>
            </>
    )
}