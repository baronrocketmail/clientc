async function getName(){
    return fetch("https://undefxx.com/api/info/name",  { next: { revalidate: 1 } })
}

async function getUnpaid(){
    return fetch("https://undefxx.com/api/payments/unpaid",  { next: { revalidate: 1 } })
}

export default async function Page(){
    const name = await getName()
    const unpaid = await getUnpaid()

    return(
            <h1>929 lee ave</h1>
    )
}