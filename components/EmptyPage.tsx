import Image from "next/image";

export default function EmptyPage() {
  return (
    <div className="h-screen mt-10 ">
      <Image src="/welcome.png" alt="Empty" width={300} height={300} />
      <p className="text-white font-bold text-3xl">C'mon, type something</p>
    </div>
  )
}
