import Image from "next/image"
import { Card, CardFooter } from "./ui/card"

const Footer = () => {
  return (
    <Card className="px-5 py-6">
      <CardFooter className="flex justify-between text-gray-400">
        <p>
          © 2023 Copyright{" "}
          <span className="font-bold text-primary">FSW Barber</span>
        </p>
        <Image src="/logo.png" alt="FSW Barber" width={120} height={18} />
      </CardFooter>
    </Card>
  )
}

export default Footer
