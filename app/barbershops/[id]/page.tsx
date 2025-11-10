"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Barbershop } from "@prisma/client"
import { SearchIcon } from "lucide-react"
import Header from "../../_components/header"
import { Button } from "../../_components/ui/button"
import { Input } from "../../_components/ui/input"
import BarberShopItem, {
  BarberShopItemSkeleton,
} from "../../_components/barbershop-item"

export default function BarbershopsPage() {
  const searchParams = useSearchParams()
  const search = searchParams.get("search")
  const [barbershops, setBarbershops] = useState<Barbershop[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    console.log("=== COMPONENT EFFECT START ===")
    console.log("Search param:", search)

    const fetchBarbershops = async () => {
      setIsLoading(true)
      try {
        console.log("Fetching data from API...")
        const response = await fetch(`/api/barbershops?search=${search || ""}`)
        const data = await response.json()

        console.log("Data received from API:", data.length, "items")
        console.log("Received barbershops:")
        data.forEach((b: Barbershop) => {
          console.log(`- ${b.name} (ID: ${b.id})`)
        })

        // Só atualiza o estado se o componente ainda estiver montado
        if (isMounted) {
          // Remove possíveis duplicatas antes de atualizar o estado
          const uniqueData = data.filter(
            (barbershop: Barbershop, index: number, self: Barbershop[]) =>
              index === self.findIndex((b) => b.id === barbershop.id),
          )

          console.log("After component filtering:", uniqueData.length, "items")
          console.log("Final barbershops to render:")
          uniqueData.forEach((b: Barbershop) => {
            console.log(`- ${b.name} (ID: ${b.id})`)
          })

          setBarbershops(uniqueData)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
      console.log("=== COMPONENT EFFECT END ===\n")
    }

    fetchBarbershops()

    // Cleanup function
    return () => {
      isMounted = false
    }
  }, [search])

  return (
    <div className="flex flex-col gap-4 p-5">
      <Header />

      <div className="mt-6 flex items-center gap-2">
        <Input
          id="search-barbershops"
          name="search"
          placeholder="Busque por barbearias..."
          value={search || ""}
          disabled
        />
        <Button variant="default" disabled>
          <SearchIcon size={20} />
        </Button>
      </div>

      <h2 className="mb-3 text-gray-400">
        {search ? `Resultados para "${search}"` : "Todas as barbearias"}
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {isLoading && (
          <>
            <BarberShopItemSkeleton />
            <BarberShopItemSkeleton />
            <BarberShopItemSkeleton />
          </>
        )}

        {!isLoading &&
          barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}

        {!isLoading && barbershops.length === 0 && (
          <p className="text-center text-gray-400">
            Nenhuma barbearia encontrada para a sua busca.
          </p>
        )}
      </div>
    </div>
  )
}
