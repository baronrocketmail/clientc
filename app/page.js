import Links from "./(components)/Links";
import { useRouter } from 'next/navigation';


async function getName(){
    return fetch("https://undefxx.com/api/info/name", { next: { revalidate: 1 } }).then(x=> x.json());
}

async function getUnpaid(){
    return fetch("https://undefxx.com/api/payments/unpaid", { next: { revalidate: 1 } }).then(x=> x.json());
}

async function getApplicationsOpen(){
    return fetch("https://undefxx.com/api/info/applicationsOpen", { next: { revalidate: 1 } }).then(x=> x.json());
}

export default async function Page(){

    const router = useRouter();

    const name = await getName()
    const unpaid = await getUnpaid()
    const applicationsOpen = await getApplicationsOpen()

    let links = [{label: name, href: "/"}]

    router.prefetch("/autopay")
    router.prefetch("/log")
//    for(let elem in unpaid) {
//        router.prefetch("/" + unpaid[elem].url)
//    }


    if (applicationsOpen) {
        links.push({label: "apply", href: "/apply"})
        links.push({label: "lease", href: "/lease"})
        links.push({label: "...", href: "/explainer"})

    } else {
        links.push({label: "autopay", href: "/autopay"})
        for(let elem in unpaid){
            links.push({label: unpaid[elem].name, href: unpaid[elem].url})
        }
        links.push({label: "...", href: "/log"})
    }


    return(
            <>
            <Links links ={links}/>
            </>
    )
}