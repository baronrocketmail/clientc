import "../app/globals.css"
import fetch from 'node-fetch';
import {myFont} from "../app/myFont.js";
import Links from "../app/(components)/Links.js";
import { useEffect, useState} from "react"
import {db} from "../app/(components)/firestoreInit.js";
import { doc, onSnapshot } from "firebase/firestore";
export async function getStaticProps(){

    const initialAutopayActive = await fetch("https://undefxx.com/api/info/autopay").then(x => x.json())
    const emailAddresses = await fetch("https://undefxx.com/api/info/emailAddresses").then(x => x.json())
    const phoneNumbers = await fetch("https://undefxx.com/api/info/phoneNumbers").then(x => x.json())

    return {
        props: { initialAutopayActive, emailAddresses, phoneNumbers},
        revalidate: 1
    }
}
//
export default function Autopay(props){

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "/units/18572 Cull Canyon Rd/info", "info"), (doc) => {
            setAutopayActive(doc.data().autopay);
            console.log("Current data: ", doc.data());
        });
        return () => unsub()
    },[])

    const [autopayActive, setAutopayActive] = useState(props.initialAutopayActive)


    let links = [{label: "<---", href: "/"}, {label:  autopayActive ? ("autopay: active") : ("autopay: inactive"), href: "/"}]

    return(
            <div className={myFont.className}>
            <Links links = {links}/>
            </div>
            )
}

