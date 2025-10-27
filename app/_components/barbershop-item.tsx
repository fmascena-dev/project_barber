import { Barbershop } from "@prisma/client"
import { Card, CardContentTwo } from "./ui/card"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { StarIcon } from "lucide-react"
import { Button } from "./ui/button"

interface BarberShopItemProps {
  barbershop: Barbershop
}

const BarberShopItem = ({ barbershop }: BarberShopItemProps) => {
  return (
    <Card className="min-w-[167px] rounded-2xl">
      <CardContentTwo className="px-2 pt-1">
        <div className="relative h-[159px] w-full">
          <Image
            alt={barbershop.name}
            src={barbershop.imageUrl}
            fill
            className="rounded-2xl object-cover"
          />

          <Badge
            className="absolute left-2 top-2 space-x-2"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <p className="text-xs text-white">5,0</p>
          </Badge>
        </div>

        <div className="py-3">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-500">{barbershop.address}</p>
          <Button variant="default" className="mt-3 w-full">
            Reservar
          </Button>
        </div>
      </CardContentTwo>
    </Card>
  )
}

export default BarberShopItem
