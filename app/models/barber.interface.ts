import { BarbershopService, Barbershop } from "@prisma/client"

export interface BarberShopItemProps {
  barbershop: Barbershop
}

export interface PhoneItemProps {
  phone: string
}

export interface ServiceItemProps {
  service: BarbershopService
  barbershop: Pick<Barbershop, "name">
}

export interface QuickSearchOption {
  imageUrl: string
  title: string
}

export interface BarbershopPageProps {
  searchParams: {
    id: string
    search?: string
  }
  include: {
    services: true
  }
}
