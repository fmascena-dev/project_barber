import { BarbershopService } from "@prisma/client"
import { CardTwo, CardContentTwo } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"

interface ServiceItemProps {
  service: BarbershopService
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <CardTwo>
      <CardContentTwo className="flex items-center gap-3 p-3">
        <div className="min-w[110px] relative max-h-[110px] min-h-[110px] max-w-[110px]">
          <Image
            alt={service.name}
            src={service.imageUrl}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold">{service.name}</h3>
          <p className="text-sm text-gray-400">{service.description}</p>

          <div className="flex w-full items-center justify-between border border-red-400">
            <p className="text-sm font-bold text-primary">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>

            <Button size="sm" variant="default">
              Reservar
            </Button>
          </div>
        </div>
      </CardContentTwo>
    </CardTwo>
  )
}

export default ServiceItem
