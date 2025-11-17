"use client"

import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import BarberShopItem, {
  BarberShopItemSkeleton,
} from "./_components/barbershop-item"
import { Separator } from "./_components/ui/separator"
import BookingItem, { BookingItemSkeleton } from "./_components/booking-item"
import { quickSearchOptions } from "./_constants/search"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { Barbershop } from "@prisma/client"
import Search from "./_components/search"
import { capitalizeFirstLetter } from "./utils/dateFormatter"

export default function Home() {
  const { data: session } = useSession()
  const [barbershops, setBarbershops] = useState<Barbershop[]>([])
  const [popularBarbershops, setPopularBarbershops] = useState<Barbershop[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
  }
  const rawDateString = new Date().toLocaleDateString("pt-BR", dateOptions)
  const formattedDate = capitalizeFirstLetter(rawDateString)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000))

        const [barbershopsData, popularBarbershopsData] = await Promise.all([
          fetch("/api/barbershops").then((res) => res.json()),
          fetch("/api/barbershops/popular").then((res) => res.json()),
        ])
        setBarbershops(barbershopsData)
        setPopularBarbershops(popularBarbershopsData)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="flex flex-col">
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">
          <span className="text-primary">Olá</span>,{" "}
          {session?.user?.name
            ? session.user.name.split(" ").slice(0, 2).join(" ")
            : "Visitante"}
          !
        </h2>
        <p className="text-gray-500">{formattedDate}</p>

        <div className="mt-6">
          <Search />
        </div>

        <div className="mt-6 flex items-center gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2 text-base"
              variant="modify"
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

        <h2 className="mb-3 mt-6 uppercase text-gray-500">Agendamentos</h2>
        <div className="transition-all duration-1000">
          {isLoading ? (
            <div className="animate-fade-in opacity-0">
              <BookingItemSkeleton />
            </div>
          ) : (
            <div className="animate-fade-in opacity-0">
              <BookingItem />
            </div>
          )}
        </div>

        <Separator className="mt-6" />

        <h2 className="mb-3 mt-6 uppercase text-gray-500">Recomendados</h2>
        <div className="flex gap-4 overflow-auto transition-all duration-1000 [&::-webkit-scrollbar]:hidden">
          <div
            className={`flex gap-4 transition-all duration-1000 ${isLoading ? "opacity-100" : "opacity-0"}`}
          >
            {isLoading && (
              <>
                <BarberShopItemSkeleton />
                <BarberShopItemSkeleton />
                <BarberShopItemSkeleton />
              </>
            )}
          </div>
          <div
            className={`flex gap-4 transition-all duration-1000 ${!isLoading ? "opacity-100" : "opacity-0"}`}
          >
            {!isLoading &&
              barbershops.map((barbershop) => (
                <BarberShopItem key={barbershop.id} barbershop={barbershop} />
              ))}
          </div>
        </div>

        <Separator className="mt-6" />

        <h2 className="mb-3 mt-6 uppercase text-gray-500">Populares</h2>
        <div className="flex gap-4 overflow-auto transition-all duration-1000 [&::-webkit-scrollbar]:hidden">
          <div
            className={`flex gap-4 transition-all duration-1000 ${isLoading ? "opacity-100" : "opacity-0"}`}
          >
            {isLoading && (
              <>
                <BarberShopItemSkeleton />
                <BarberShopItemSkeleton />
                <BarberShopItemSkeleton />
              </>
            )}
          </div>
          <div
            className={`flex gap-4 transition-all duration-1000 ${!isLoading ? "opacity-100" : "opacity-0"}`}
          >
            {!isLoading &&
              popularBarbershops.map((barbershop) => (
                <BarberShopItem key={barbershop.id} barbershop={barbershop} />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
