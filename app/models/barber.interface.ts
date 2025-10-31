import { BarbershopService, Barbershop } from "@prisma/client"

export interface BarberShopItemProps {
  barbershop: Barbershop
}

export interface PhoneItemProps {
  phone: string
}

export interface ServiceItemProps {
  service: BarbershopService
}

export interface QuickSearchOption {
  imageUrl: string
  title: string
}

export interface BarbershopPageProps {
  params: {
    id: string
  }
  include: {
    services: true
  }
}
