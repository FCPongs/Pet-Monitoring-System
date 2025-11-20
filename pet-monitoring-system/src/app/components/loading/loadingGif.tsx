import Image from "next/image"
export default function LoadingLogo() {
    return (
        <>
            <Image src="/gif/loading.gif" alt={""} width={800} height={300} />
        </>
    )
}