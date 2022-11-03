import {myFont} from "../app/myFont";
import React from "react";
import Links from "../app/(components)/Links";
import "../app/globals.css";
import fetch from 'node-fetch';

export async function getStaticProps(){

    const unpaid = await fetch("https://undefxx.com/api/payments/unpaid").then(x => x.json())

    return{
        props: {unpaid},
        revalidate: 1
    }
}


export default function Log(props){
    let links = [{label: "<---", href: "/"}, {label: "", href: "/"}]

    for(let elem in props.unpaid) {
        links.push({label: "", href: '/'})
    }
    links.push({label: "...", href: '/'})

    return(
            <div className={myFont.className}>
                <Links links = {links}/>
                <h1>an extremeley advanced table </h1>
            </div>
    )
}