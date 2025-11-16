import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SidebarSheet from "./sidebar-sheet"
import { MenuIcon } from "lucide-react"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-5">
        <Link href="/">
          <Image src="/Logo.svg" alt="FSW Barber" width={150} height={15} />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="default">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
