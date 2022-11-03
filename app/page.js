import Links from "./(components)/Links";

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
    const name = await getName()
    const unpaid = await getUnpaid()
    const applicationsOpen = await getApplicationsOpen()

    let links = [{label: name, href: "/"}]

    if (applicationsOpen) {
        links.push({label: "apply", href: "/apply"})
    } else {
        links.push({label: "autopay", href: "/autopay"})
    }


    return(
            <>
            <Links links ={links}/>
            </>
    )
}