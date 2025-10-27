import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import Footer from "./_components/footer"
import { db } from "./_lib/prisma"
import BarberShopItem from "./_components/barbershop-item"
import { Separator } from "./_components/ui/separator"
import BookingItem from "./_components/booking-item"
import { quickSearchOptions } from "./_constants/search"

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div className="flex flex-col">
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

        <div className="mt-6 flex items-center gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2 text-base"
              variant="outline"
              key={option.title}
            >
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>

        <div className="relative mt-6 h-[200px] w-full">
          <Image
            src="/banner-01.png"
            alt="Agende nos melhores com FSW Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <Separator className="mt-6" />

        <BookingItem />

        <Separator className="mt-6" />

        <h2 className="mb-3 mt-6 uppercase text-gray-500">Recomendados</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <Separator className="mt-6" />

        <h2 className="mb-3 mt-6 uppercase text-gray-500">Populares</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
