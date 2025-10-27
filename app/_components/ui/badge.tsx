import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/app/_lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 hover:cursor-default",
        secondary:
          "border-transparent bg-[#221C3D] text-[#8162FF] hover:cursor-default",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80 hover:cursor-default",
        outline: "text-foreground hover:cursor-default",
        finished:
          "border-transparent bg-[#26272B] text-[#838896] hover:cursor-default",
        avaliation:
          "border-transparent bg-[#221C3D] text-[#838896] hover:cursor-default",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
