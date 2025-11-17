import Image from "next/image"
import { CardFooter, CardFour } from "./ui/card"
import Link from "next/link"

const Footer = () => {
  return (
    <CardFour className="px-5 py-6">
      <CardFooter className="flex justify-between text-gray-400">
        <p>
          © 2023 Copyright{" "}
          <span className="font-bold text-primary">FSW Barber</span>
        </p>
        <Link href="/">
          <Image src="/Logo.svg" alt="FSW Barber" width={120} height={15} />
        </Link>
      </CardFooter>
    </CardFour>
  )
}

export default Footer
