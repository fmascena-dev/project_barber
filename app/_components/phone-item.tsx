"use client"

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success("Telefone copiado com sucesso!")
  }

  return (
    <div className="flex justify-between" key={phone}>
      {/* ESQUERDA */}
      <div className="flex items-center gap-2">
        <SmartphoneIcon color="#8162FF" />
        <p className="text-sm">{phone}</p>
      </div>
      {/* DIREITA */}
      <Button
        variant="default"
        size="smTwo"
        onClick={() => handleCopyPhoneClick(phone)}
      >
        Copiar
      </Button>
    </div>
  )
}

export default PhoneItem
