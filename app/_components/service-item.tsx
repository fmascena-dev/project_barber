import { BarbershopService } from "@prisma/client"
import { CardThree, CardContentTwo } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"

interface ServiceItemProps {
  service: BarbershopService
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <CardThree>
      <CardContentTwo className="flex w-full items-center gap-4 p-3">
        <div className="relative max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px]">
          <Image
            alt={service.name}
            src={service.imageUrl}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <div className="flex w-full flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold">{service.name}</h3>
            <p className="mb-3 text-sm text-gray-400">{service.description}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-primary">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>

            <Button size="smTwo" variant="default">
              Reservar
            </Button>
          </div>
        </div>
      </CardContentTwo>
    </CardThree>
  )
}

export default ServiceItem
