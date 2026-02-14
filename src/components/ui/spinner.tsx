import * as React from "react"
import {Loader2} from "lucide-react"
import {cn} from "@/lib/utils"
import {cva, VariantProps} from "class-variance-authority"

const spinnerVariants = cva(
    "flex-shrink-0 animate-spin text-muted-foreground",
    {
        variants: {
            size: {
                default: "h-4 w-4",
                sm: "h-2 w-2",
                lg: "h-6 w-6",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
)

export interface SpinnerProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof spinnerVariants> {
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
    ({className, size, ...props}, ref) => {
        return (
            <div ref={ref} {...props}>
                <Loader2 className={cn(spinnerVariants({size}), className)}/>
            </div>
        )
    }
)
Spinner.displayName = "Spinner"

export {Spinner}
