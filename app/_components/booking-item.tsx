import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { CardTwo, CardContent } from "./ui/card"

export default function BookingItem() {
  return (
    <>
      <h2 className="mb-3 mt-6 uppercase text-gray-500">Agendamentos</h2>

      <CardTwo>
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
    </>
  )
}
