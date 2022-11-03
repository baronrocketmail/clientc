"use client";
import Links from "../(components)/Links";
import {use, useEffect, useMemo, useState} from "react"
import {propertyID} from "public/constants.mjs"
import {initializeApp} from "firebase/app";
import {db} from "../(components)/firestoreInit.js";
import { doc, onSnapshot } from "firebase/firestore";


async function getAutopayActive(){
    return fetch("https://undefxx.com/api/info/autopay", { next: { revalidate: 1 } }).then(x=> x.json());
}

export default function Page(){


    useEffect(() => {
        const unsub = onSnapshot(doc(db, "/units/18572 Cull Canyon Rd/info", "info"), (doc) => {
            setAutopayActive(doc.data().autopay);
            console.log("Current data: ", doc.data());
        });
    },[])

//    const initialAutopayActive = use(getAutopayActive())

    const [autopayActive, setAutopayActive] = useState(true)


    let links = [{label: "<---", href: "/"}, {label:  autopayActive ? ("autopay: active") : ("autopay: inactive"), href: "/"}]


    return(
            <>
            <Links links = {links}/>
            </>
    )
}

