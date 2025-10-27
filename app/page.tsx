import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { CardContent, CardTwo } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import Footer from "./_components/footer"
import { db } from "./_lib/prisma"
import BarberShopItem from "./_components/barbershop-item"

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})

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

        <h2 className="mb-3 mt-6 uppercase text-gray-500">Agendamentos</h2>

        <CardTwo className="">
          <CardContent className="flex justify-between p-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit text-sm" variant="secondary">
                Confirmado
              </Badge>
              <h3 className="text-xl font-bold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-lg">Barbearia FSW</p>
              </div>
            </div>

            {/* DIREITA */}
            <div className="flex flex-col items-center justify-center border-l-[1px] border-solid px-6">
              <p className="text-lg">Outubro</p>
              <p className="text-2xl">19</p>
              <p className="text-lg">20:00</p>
            </div>
          </CardContent>
        </CardTwo>

        <h2 className="mb-3 mt-6 uppercase text-gray-500">Recomendados</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
