import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
// import { Button } from "./_components/ui/button"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Felipe!</h2>
        <p>Domingo, 19 de Outubro</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Search" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <Button variant="outline">
            <Image src="/cabelo.svg" alt="cabelo" width={12} height={12} />
            Cabelo
          </Button>
          <Button variant="outline">
            <Image src="/barba.svg" alt="barba" width={12} height={12} />
            Barba
          </Button>
          <Button variant="outline">
            <Image
              src="/acabamento.svg"
              alt="acabamento"
              width={12}
              height={12}
            />
            Acabamento
          </Button>
          <Button variant="outline">
            <Image
              src="/sobrancelha.svg"
              alt="sobrancelha"
              width={12}
              height={12}
            />
            Sobrancelha
          </Button>
        </div>

        <div className="relative mt-6 h-[200px] w-full">
          <Image
            src="/banner-01.png"
            alt="Agende nos melhores com FSW Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}
