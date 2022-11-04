
export default function PreloadRoot(){
    const router = useRouter();
    router.preload("/autopay")
    router.preload("/log")

    return
}